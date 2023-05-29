import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import About from "./components/About/About";
import User from "./components/User/User";
import Menu from "./components/Navbar/Menu";

function App() {
  return (
    
    <div className="App">
      <Menu />
      <Routes>
                  
                  <Route path="/" element={<Posts/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/user/:userId" element={<User/>} />
      </Routes>
    </div>
  );
}

export default App;
