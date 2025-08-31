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
          <h1 className = "contact-title">Let's Connect!</h1>
        
        </div>
      </div>
    </motion.div>
  );
}