import React from "react";
import Shimmer from "./Shimmer";

const MemesCard = ({ data }) => {
  const { url, author } = data;
  return (
    <div>
      <div className="p-4 m-4 border border-gray-200 rounded-lg shadow-md">
        <img className="w-56 h-64" src={url} alt="meme" />
        <p className="text-center font-medium text-lg mt-4">{author}</p>
      </div>
    </div>
  );
};

export default MemesCard;
