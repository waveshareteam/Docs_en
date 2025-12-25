import React from 'react';
import DocItem from '@theme-original/DocItem';

export default function DocItemWrapper(props) {
  // 直接从 props 中解构出 content，再从 content 中解构出 frontMatter
  const { content: { frontMatter } } = props;
  
  const supporedModels = frontMatter.product_model;
  const supporedSerie = frontMatter.product_family;

  return (
    <>
      {supporedSerie && supporedSerie.length > 0 && (
        <div 
          id="waveshare_serial_mark" 
          style={{ display: 'none' }}
        >
          {supporedSerie.join('、')}
        </div>
      )}
      {supporedModels && supporedModels.length > 0 && (
        <div 
          id="waveshare_model_mark" 
          style={{ display: 'none' }}
        >
          {supporedModels.join('、')}
        </div>
      )}

      <DocItem {...props} />
    </>
  );
}