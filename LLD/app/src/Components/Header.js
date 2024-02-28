import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";

const Header = () => {
  const [lang, setLang] = useState("en");
  return (
    <div className="w-full h-32 bg-gray-400">
      <div className="flex float-end gap-8 items-center h-full p-4 text-lg font-medium">
        <Link to={"/"}>Home</Link>

        <Link to={"/about"}>About</Link>

        <Link to={"/team"}>Team</Link>
    
        <Link to={"/accordion"}>Accordion</Link>

        <Link to={"/login"}>Login</Link>
        <select
          className="w-auto px-2 h-10 text-center rounded-md bg-gray-50"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value={"en"}>English</option>
          <option value={"hi"}>Hindi</option>
          <option value={"jp"}>Japanese</option>
          <option value={"ru"}>Russian</option>
        </select>
      </div>
      <Routes>
        <Route path={"/about"} element={<About lang={lang} />}></Route>
      </Routes>
    </div>
  );
};

export default Header;
