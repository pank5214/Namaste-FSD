import React from "react";
import VideoStreaming from "./VideoStreaming";
import ChatWindow from "./ChatWindow";

const LiveChat = () => {
  return (
    <div className="flex gap-3 m-4 p-2">
      <VideoStreaming />
      <ChatWindow />
    </div>
  );
};

export default LiveChat;
