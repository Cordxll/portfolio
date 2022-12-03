import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Projects from "./components/Projects"
import NavBar from "./components/NavBar"
import Blog from "./components/Blog"

function App() {
  return (
    <div>
          <Router>
            <NavBar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/blog" element={<Blog/>}/>
            </Routes>
          </Router>
        </div>
  );
}

export default App;
