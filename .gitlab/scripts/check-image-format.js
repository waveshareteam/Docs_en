const GITLAB_API_URL = process.env.GITLAB_API_URL;
const PROJECT_ID = process.env.PROJECT_ID;
const MR_IID = process.env.MR_IID;
const TOKEN = process.env.GITLAB_TOKEN ? process.env.GITLAB_TOKEN.trim() : null;

if (!TOKEN) {
  console.error("Error: GITLAB_TOKEN is not set.");
  process.exit(1);
}

// DEBUG: Diagnose 401 error
// console.log(`[DEBUG] Token Length: ${TOKEN.length}`);
// if (TOKEN.startsWith('$')) {
//   console.error(`[CRITICAL] GITLAB_TOKEN appears to be the literal string "${TOKEN}". Variable expansion failed.`);
// } else if (TOKEN.length < 20) {
//   console.warn(`[WARNING] Token seems unusually short (${TOKEN.length} chars).`);
// } else {
//   console.log(`[DEBUG] Token looks like a valid format (starts with ${TOKEN.substring(0, 5)}...)`);
// }

const BOT_IDENTIFIER = "<!-- Image Format Check by GitLab CI -->";

async function apiRequest(method, path, body = null) {
  const url = `${GITLAB_API_URL}/projects/${PROJECT_ID}/merge_requests/${MR_IID}${path}`;
  
  const options = {
    method: method,
    headers: {
      'PRIVATE-TOKEN': TOKEN,
      'Content-Type': 'application/json'
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (response.status === 204) {
    return {};
  }

  const responseText = await response.text();
  
  if (!response.ok) {
    throw new Error(`API Error ${response.status}: ${responseText}`);
  }

  return responseText ? JSON.parse(responseText) : {};
}


async function run() {
  try {
    console.log("Fetching MR changes...");
    const changes = await apiRequest('GET', '/changes');
    
    // 筛选新增的图片文件
    const newImages = changes.changes
      .filter(file => file.new_file && /\.(jpg|jpeg|png)$/i.test(file.new_path))
      .map(file => file.new_path);

    console.log("Fetching existing notes...");
    const notes = await apiRequest('GET', '/notes');
    
    // 查找旧的机器评论
    const botComments = notes.filter(note => note.body && note.body.includes(BOT_IDENTIFIER));

    // 删除旧评论
    if (botComments.length > 0) {
      console.log(`Found ${botComments.length} old comment(s). Deleting...`);
      for (const comment of botComments) {
        await apiRequest('DELETE', `/notes/${comment.id}`);
      }
      console.log("Old comments deleted.");
    }

    // 如果有新图片，发送新评论
    if (newImages.length > 0) {
      console.log(`Found ${newImages.length} new images.`);
      
      const fileList = newImages.map(file => `- \`${file}\``).join('\n');
      const body = `${BOT_IDENTIFIER}
### 🖼️ Image Format Check

Hello! We've detected the following newly added JPG, JPEG, or PNG images:

${fileList}

For better performance, please consider using **WebP**.

<details>
<summary>💡 How to Convert?</summary>
<br>
Use \`cwebp -q 80 input.jpg -o output.webp\`
</details>
      `;

      await apiRequest('POST', '/notes', { body });
      console.log("New comment posted.");
    } else {
      console.log("No new JPG/PNG images found.");
    }

  } catch (error) {
    console.error("Script failed:", error);
    process.exit(1);
  }
}

run();