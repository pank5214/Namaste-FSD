import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Components/Team";
import Login from "./Components/Login";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Accordion from "./Components/Accordion";
import About from "./Components/About";
import { useState } from "react";

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
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
