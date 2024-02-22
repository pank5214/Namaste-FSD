import React, { useEffect, useState } from "react";
import MemesCard from "./MemesCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);
  useEffect(() => {
    getMemesData();
  }, []);

  const getMemesData = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setMemes(json?.memes);
  };
  return (
    <div className="flex flex-wrap justify-center">
      {!memes ? (
        <Shimmer />
      ) : (
        memes.map((meme, i) => <MemesCard key={i} data={meme} />)
      )}
    </div>
  );
};

export default Body;
