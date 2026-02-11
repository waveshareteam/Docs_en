import os
import re

def normalize_path(import_path, current_file_path, docs_root):
    """
    If the path starts with /docs/, try to make it relative to the current file
    to follow standard markdown practices.
    """
    if import_path.startswith('/docs/'):
        # Docs root is c:\...\Docs_zh\docs
        # import_path is /docs/ESP32/...
        # We need to find the relative path from current_file_path to docs_root + import_path
        
        # Strip the leading /docs/
        relative_to_docs = import_path[6:] # e.g. ESP32/ESP32-S3/...
        target_abs_path = os.path.normpath(os.path.join(docs_root, relative_to_docs))
        current_dir = os.path.dirname(os.path.abspath(current_file_path))
        
        try:
            rel_path = os.path.relpath(target_abs_path, current_dir)
            # Ensure it uses forward slashes and starts with ./ or ../
            rel_path = rel_path.replace('\\', '/')
            if not rel_path.startswith('.'):
                rel_path = './' + rel_path
            return rel_path
        except:
            return import_path
    return import_path

def refactor_file(filepath, docs_root):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return False

    # 1. Match image imports: import var from '...';
    # Support various path formats, including ./images, /docs/, @site/
    # Filter for common image extensions
    import_pattern = re.compile(r"import\s+(\w+)\s+from\s+['\"]([^'\"]+\.(?:webp|png|jpg|jpeg|gif|svg))['\"];?", re.IGNORECASE)
    imports = import_pattern.findall(content)
    
    if not imports:
        return False

    # Map variable to a potentially normalized path
    mapping = {var: normalize_path(path, filepath, docs_root) for var, path in imports}
    orig_paths = {var: path for var, path in imports} # Keep original for import removal
    
    # 2. Replace <img src={var} alt="text" /> or similar
    # Support attributes in any order, multi-line tags, and extra spaces
    img_tag_pattern = re.compile(r"<img\s+([^>]*?)src=\{([^}]+)\}([^>]*?)\/?>", re.DOTALL)
    
    def img_replacer(match):
        pre_attr = match.group(1)
        var_name = match.group(2).strip()
        post_attr = match.group(3)
        
        if var_name in mapping:
            # Extract alt text from either pre or post attributes
            combined_attr = pre_attr + post_attr
            alt_match = re.search(r'alt=["\']([^"\']*)["\']', combined_attr)
            alt_text = alt_match.group(1) if alt_match else ""
            return f"![{alt_text}]({mapping[var_name]})"
        return match.group(0)

    new_content = img_tag_pattern.sub(img_replacer, content)

    # 3. Replace {var} usage in other contexts (e.g. src={var} without full <img>)
    for var, path in mapping.items():
        new_content = new_content.replace(f"src={{{var}}}", f"src=\"{path}\"")

    # 4. Remove the import lines
    filtered_lines = []
    lines = new_content.splitlines()
    for line in lines:
        is_matched_import = False
        for var, path in imports:
            # Check if this line is an import for one of our mapped variables
            # We match the variable name and the original path
            if re.match(rf"import\s+{var}\s+from\s+['\"]{re.escape(path)}['\"];?", line.strip()):
                is_matched_import = True
                break
        if not is_matched_import:
            filtered_lines.append(line)
    
    new_content = "\n".join(filtered_lines)

    # 5. Cleanup: Remove "<!-- Image References -->" if it's left alone or followed by empty lines
    new_content = re.sub(r"<!-- Image References -->\s*(?=\n#|\nimport|\n$)", "", new_content)
    
    # 6. Final cleanup: multiple blank lines at top
    new_content = re.sub(r"^(\s*\n){2,}", "\n", new_content)

    if new_content.strip() != content.strip():
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        except Exception as e:
            print(f"Error writing {filepath}: {e}")
            return False
    return False

def main(root_dir):
    abs_root = os.path.abspath(root_dir)
    # Assume root_dir is the 'docs' folder or contains it. 
    # Let's find the actual 'docs' folder for path normalization.
    docs_folder = abs_root
    if os.path.basename(abs_root) != 'docs' and os.path.exists(os.path.join(abs_root, 'docs')):
        docs_folder = os.path.join(abs_root, 'docs')

    modified_count = 0
    total_files = 0
    for root, dirs, files in os.walk(abs_root):
        for file in files:
            if file.endswith('.md'):
                total_files += 1
                if refactor_file(os.path.join(root, file), docs_folder):
                    modified_count += 1
    print(f"Processed {total_files} files. Modified {modified_count} files.")

if __name__ == "__main__":
    import sys
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "./docs"
    if not os.path.exists(target_dir):
        print(f"Directory {target_dir} does not exist.")
    else:
        main(target_dir)
