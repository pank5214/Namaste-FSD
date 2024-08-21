import React, { useEffect, useState } from "react";
import MemesCard from "./MemesCard";
import Shimmer from "./Shimmer";

const LIMIT = 20;

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    getMemesData();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 10
    ) {
      getMemesData();
    }
  };

  const getMemesData = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };
  return (
    <div className="flex flex-wrap justify-center">
      {memes && memes.map((meme, i) => <MemesCard key={i} data={meme} />)}
      {showShimmer && <Shimmer limit={LIMIT} />}
    </div>
  );
};

export default Body;
