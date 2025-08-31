import "../App.css";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className = "page page-projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition = {{ duration: 0.7 }}
      >
      <div className="page page--projects">
        <div className="center">
          <h1 className = "projects-title">Projects Page</h1>
        </div>
      </div>
    </motion.div>
  );
}