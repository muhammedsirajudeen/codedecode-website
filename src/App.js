import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
function App() {
  return (
    <BrowserRouter>
    <Layout/>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}>
       

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
