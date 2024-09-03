import React, { useState } from "react";

const LiveMessage = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form className="flex items-center m-2 gap-2" onSubmit={handleSubmit}>
      <input
        className="w-full p-2 rounded-full border border-gray-400"
        placeholder="Chat..."
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button className="h-8 w-28 bg-gray-400 rounded-lg ml-2">Send</button>
    </form>
  );
};

export default LiveMessage;
