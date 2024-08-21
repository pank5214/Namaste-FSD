import React from "react";

const Shimmer = ({ limit }) => {
  return Array(limit)
    .fill(0)
    .map((q, i) => (
      <div
        key={i}
        className="p-4 m-4 border border-gray-200 rounded-lg shadow-md"
      >
        <div className="w-56 h-72 bg-gray-200"></div>
      </div>
    ));
};

export default Shimmer;
