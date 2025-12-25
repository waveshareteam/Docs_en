import React from "react";

export default function VideoPlayer({
  src,
  asGif = false,
  width = "100%",
  fallbackText = "抱歉，您的浏览器不支持嵌入式视频。",
  ...rest
}) {
  const videoProps = {
    width,
    ...rest,
  };

  // 如果 asGif 为 true，则应用 GIF 效果的属性
  if (asGif) {
    videoProps.autoPlay = true;
    videoProps.loop = true;
    videoProps.muted = true;
    videoProps.playsInline = true;
  } else {
    // 否则，应用标准视频的属性
    videoProps.controls = true;
  }

  return (
    <video {...videoProps}>
      <source src={src} type="video/mp4" />
      {fallbackText}
    </video>
  );
}
