import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Projects from "./components/Projects"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import Blog from "./components/Blog"
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
import ProjectsPage from "./components/ProjectsPage";
import TestFile from "./components/TestFile";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
          <Router>
            <NavBar/>
            <div className="h-16"></div>
            <ScrollToTop/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/projects/:title" element={<ProjectsPage/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/blog/:title" element={<BlogPost/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/test" element={<TestFile/>}/>
            </Routes>
            <Footer className=""/>
          </Router>
        </div>
  );
}

export default App;