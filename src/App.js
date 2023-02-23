import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Level1 from "./Pages/levels/level1";
import Level2 from "./Pages/levels/Level2";
import Level3 from "./Pages/levels/Level3";
import Level4 from "./Pages/levels/Level4";
import Level5 from "./Pages/levels/Level5";
function App() {
  return (
    <BrowserRouter>
    <Layout/>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/level1" element={<Level1 />}></Route>
      <Route path="/level2" element={<Level2/>}></Route>
      <Route path="/level3" element={<Level3/>}></Route>
      <Route path="/level4" element={<Level4/>}></Route> 
      <Route path="/level5" element={<Level5/>}></Route>     

    </Routes>
  </BrowserRouter>
  );
}

export default App;
