import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Projects from "./components/Projects"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import Blog from "./components/Blog"
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <div>
          <Router>
            <NavBar/>
            <div className="h-20"></div>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/blog/:title" element={<BlogPost/>}/>
            </Routes>
            <Footer/>
          </Router>
        </div>
  );
}

export default App;
