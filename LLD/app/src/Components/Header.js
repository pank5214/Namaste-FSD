import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ onLangeChange }) => {
  const [lang, setLang] = useState("en");
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const handleChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    onLangeChange(newLang);
  };
  return (
    <div className="w-full h-32 bg-gray-400">
      <div className="flex float-end gap-8 items-center h-full p-4 text-lg font-medium">
        <Link to={"/"}>Home</Link>

        <Link to={"/about"}>About</Link>

        <Link to={"/team"}>Team</Link>

        <Link to={"/accordion"}>Accordion</Link>
        
        <Link to={"/comments"}>Comments</Link>

        <Link to={"/login"}>Login</Link>

        {isAboutPage && (
          <select
            className="w-auto px-2 h-10 text-center rounded-md bg-gray-50"
            value={lang}
            onChange={handleChange}
          >
            <option value={"en"}>English</option>
            <option value={"hi"}>Hindi</option>
            <option value={"jp"}>Japanese</option>
            <option value={"ru"}>Russian</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default Header;
