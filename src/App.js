import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import About from "./components/About/About";
import User from "./components/User/User";
import Menu from "./components/Header/Menu";
import { Container } from "react-bootstrap";

function App() {
  return (
    
    <div className="App">
      <Menu />
      <Container>
      <Routes>
                  
                  <Route path="/" element={<Posts/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/user/:userId" element={<User/>} />
      </Routes>
      </Container>
    </div>
  );
}

export default App;
