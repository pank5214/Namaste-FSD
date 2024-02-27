import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Components/Team";
import Login from "./Components/Login";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/team" element={<Team />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
