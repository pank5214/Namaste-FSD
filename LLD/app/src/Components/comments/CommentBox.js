import React from "react";

const CommentBox = ({ data }) => {
  return data.map((data, index) => (
    <div className="flex gap-3 m-4 border-l-2 border-black" key={index}>
      <div>
        <img
          className="w-12 rounded-full"
          src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
          alt="user"
        />
      </div>
      <div className="">
        <h1 className="font-bold text-xl p-2">{data.username}</h1>
        <p className="font-medium text-lg px-2">{data.comment}</p>
        <div className="font-medium text-lg px-2">
          {data?.replies && <CommentBox data={data.replies} />}
        </div>
      </div>
    </div>
  ));
};

export default CommentBox;
