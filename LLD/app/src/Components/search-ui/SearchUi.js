import React, { useEffect, useState } from "react";

const SearchUi = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchResultsVisible, setIsSearchResultsVisible] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    // Debouncing
    const timer = setTimeout(() => {
      fetchData();
    }, 220);
    return () => clearInterval(timer);
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      // If cache have data, don't make an API call, send data from here

      setSearchResults(cache[searchText]);
    } else {
      // If cache doesn't have data, make an API call & update the cache too

      const data = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + searchText
      );
      const json = await data.json();
      cache[searchText] = json[1];
      setSearchResults(json[1]);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center mt-10 w-full">
        <input
          className="w-[30rem] p-2 border border-solid border-gray-500 rounded-lg shadow-sm"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsSearchResultsVisible(true)}
          onBlur={() => setIsSearchResultsVisible(false)}
        />
      </div>
      {searchResults.length > 1 && isSearchResultsVisible && (
        <div className="flex justify-center">
          <ul className="border border-s-gray-400 w-[30rem] rounded-lg shadow-md p-2">
            {searchResults.map((search) => (
              <li key={search}>{search}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchUi;
