import "../App.css";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className = "page page-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition = {{ duration: 0.7 }}
      >
      <div className = "page page--home"> 
        <div className = "profile-box">
          {<img src={profilePic} alt = "Arsh" className = "profile-img"/>}
        </div>
        <div className = "center home-hero">
          <h1 className = "home-title">Hi, I'm <span className = "highlight">Arsh</span></h1>
          <h2 className = "home-subtitle">Computer Engineering Student</h2>
          <p className = "mt-2">
            I'm passionate about building coding projects, problem solving through code, and improving my
            technical skills through LeetCode and software development.
          </p>

          <div className = "home-buttons mt-4">
            <Link to="/about" className = "btn">About Me</Link>
            <Link to="/contact" className = "btn">Contact</Link>
            <Link to="/projects" className = "btn">Projects</Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
}


