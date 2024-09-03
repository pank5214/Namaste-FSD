import React from "react";

const ChatMessage = ({ name, photo, message }) => {
  return (
    <div className="flex p-2 items-center gap-2">
      <img className="h-8 w-8 rounded-full" alt={name} src={photo} />
      <p className="line-clamp-2">
        <span className="font-bold">{name} </span>
        <span className="ml-2">{message}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
