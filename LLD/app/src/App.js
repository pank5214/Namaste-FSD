import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Components/Team";
import List from "./Components/List";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Accordion from "./Components/Accordion/Accordion";
import About from "./Components/About";
import { useState } from "react";
import CommentsContainer from "./Components/Comment/CommentsContainer";

function App() {
  const [lang, setLang] = useState("en");
  const handleLangChange = (newLang) => {
    setLang(newLang);
  };
  return (
    <BrowserRouter>
      <Header onLangeChange={handleLangChange} />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/team" element={<Team />}></Route>
        </Route>
        <Route path={"/about"} element={<About lang={lang} />}></Route>
        <Route path="/accordion" element={<Accordion />}></Route>
        <Route path="/comments" element={<CommentsContainer />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
