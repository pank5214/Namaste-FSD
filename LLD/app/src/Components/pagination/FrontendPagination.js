import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "../Shimmer";

const LIMIT = 10;
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);
  const [showShimmer, setShowShimmer] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const start = currentPage * LIMIT;
    const end = start + LIMIT;
    setPaginatedProducts(products.slice(start, end));
  });

  const fetchData = async () => {
    setShowShimmer(true);
    const data = await fetch(`https://dummyjson.com/products?limit=0`);
    const json = await data.json();
    setShowShimmer(false);
    setProducts(json?.products);
    setNoOfPages(Math.ceil(json?.total / LIMIT));
  };

  return (
    <div>
      {showShimmer ? (
        <div className="flex flex-wrap">
          <Shimmer limit={LIMIT} />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {paginatedProducts?.map((product) => (
            <ProductCard
              key={product?.id}
              {...product}
              showShimmer={showShimmer}
            />
          ))}
        </div>
      )}
      <div className="flex justify-center items-center m-4 p-2 text-lg gap-8 cursor-pointer">
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((nP) => (
          <span
            className={
              "text-xl" +
              (nP === currentPage &&
                "font-bold text-white text-center p-1 px-3 rounded-full bg-gray-700")
            }
            key={nP}
            onClick={() => setCurrentPage(nP)}
          >
            {nP + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
