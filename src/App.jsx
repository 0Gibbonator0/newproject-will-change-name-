import { Routes, Route, Link, useLocation} from "react-router-dom"  /* useLocation Enables exit animations when changing routes */
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import "./App.css";

export default function App() {

    const location = useLocation();

    return (
      <>
        <nav className = "nav">
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/projects">Projects</Link> |{" "}
                <Link to="/contact">Contact</Link> 
        </nav>

        <AnimatePresence mode = "wait">
            <Routes location = {location} key = {location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
      </>
    );
}