import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import LiveMessage from "./LiveMessage";
import {
  CHAT_MESSAGES_LIMIT,
  generateRandomNames,
} from "../../utils/constants";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const s = setInterval(fetchData, 2000);

    return () => clearInterval(s);
  }, []);

  const fetchData = () => {
    // Make api call and get data
    const data = [
      {
        name: generateRandomNames(),
        photo:
          "https://yt3.ggpht.com/94fIxe--TYT6bXdZHzynlZUfSz__kqpRJG3irsE6Xw_gxk2Nv0cPiDuvKM_JRhIUlY2F3bJjjw=s88-c-k-c0x00ffffff-no-rj",
        message:
          "This is a live streaming chat in youtube using API-Polling concept.",
      },
    ];

    setMessages((messages) => {
      let newMessageList = [...data, ...messages];
      newMessageList = newMessageList.splice(0, CHAT_MESSAGES_LIMIT);
      return newMessageList;
    });
  };

  const handleSendMessage = (message) => {
    const newMessage = {
      name: "Pankaj Kumar",
      photo:
        "https://avatars.githubusercontent.com/u/101389384?s=400&u=ef1e56edca8dd74c4fa137c48f835d9c41f8a02c&v=4",
      message: message,
    };
    setMessages((messages) => {
      let newMessageList = [newMessage, ...messages];
      newMessageList = newMessageList.splice(0, CHAT_MESSAGES_LIMIT);
      return newMessageList;
    });
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex border border-black h-[550px] w-full overflow-y-scroll flex-col-reverse">
        {messages.map((message, i) => (
          <ChatMessage key={i} {...message} />
        ))}
      </div>
      <div className="flex items-center border border-black h-[45px]">
        <LiveMessage onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;
