import React from "react";

const MemesCard = ({ data }) => {
  const { url, author } = data;
  return (
    <div className="p-4 m-4 border border-gray-200 rounded-lg shadow-md">
      <img className="w-56 h-64" src={url} alt="meme" />
      <p className="text-center font-medium text-lg mt-4">{author}</p>
    </div>
  );
};

export default MemesCard;
