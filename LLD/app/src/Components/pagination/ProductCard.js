import React from "react";
import Shimmer from "../Shimmer";

const ProductCard = ({
  id,
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div>
      <div className="m-4 p-4 border border-solid border-gray-100 shadow-md cursor-pointer">
        <img className=" w-56 object-contain" src={thumbnail} alt={title} />
        <h1 className="p-1 font-bold text-xl w-56 line-clamp-1">
          {id} - {title}
        </h1>
        <h2 className="p-1 text-lg w-56">
          Rs. {price} - discount of {discountPercentage}%
        </h2>
        <p className="p-1 text-sm w-56 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
