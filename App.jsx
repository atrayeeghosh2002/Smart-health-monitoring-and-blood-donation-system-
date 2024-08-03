import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Home, Error, Auth } from "./Pages";
import { SuperPower } from "./Pages/SuperPower/SuperPower";
import EditProfile from "./Pages/EditProfile/EditProfile";
import {auth} from "../firebase";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/super" element={<SuperPower />} />
        <Route path="/edit" element={<EditProfile/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
