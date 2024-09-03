import React from "react";

const VideoStreaming = () => {
  return (
    <div>
      <iframe
        width="1100"
        height="600"
        src="https://www.youtube.com/embed/B8HZcTL7HZw?si=3IZACREL4tn7t1Vd"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoStreaming;
