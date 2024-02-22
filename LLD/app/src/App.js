import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Components/Team";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
