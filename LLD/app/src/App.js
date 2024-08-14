import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Components/Team";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Accordion from "./Components/Accordion/Accordion";
import About from "./Components/About";
import { useState } from "react";
import CommentsContainer from "./Components/Comment/CommentsContainer";
import PokemonList from "./Components/List";
import ImageSlider from "./Components/Image-slider/ImageSlider";

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
        <Route path="/list" element={<PokemonList />}></Route>
        <Route path="/image-slider" element={<ImageSlider />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
