import "../App.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className = "page page-contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition = {{ duration: 0.7 }}
      >
      <div className="page page--contact">
        <div className="center">
          <h1>Contact Page</h1>
          <p className="mt-2">Put your email, links, or form here.</p>
        </div>
      </div>
    </motion.div>
  );
}