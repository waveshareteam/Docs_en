import React from "react";

const YoutubeEmbed = ({
  id,
  start = 0,
  autoplay = 0,
  maxWidth = "100%", // 默认全宽
}) => (
  <div style={{ maxWidth: maxWidth }}> 
    <div
      style={{
        position: "relative",
        padding: "30% 45%",
        marginBottom: '1rem',
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}?start=${start}&autoplay=${autoplay}`}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

export default YoutubeEmbed;
