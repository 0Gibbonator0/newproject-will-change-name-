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
        <div className = "center-contact-content">
          <h1 className = "contact-title">Let's Connect!</h1>
          <p className = "mt-2 top1">
            Feel free to reach out about opportunities, internships, projects, or networking
          </p>
           <p className="mt-2 contact-link top2">📧 asandhu2487@sdsu.edu</p>
           <a href="https://www.linkedin.com/in/arshvir-sandhu-b83448341/" className="btn btn-outline2 top3" target="_blank" > My LinkedIn</a>
           <a href="https://github.com/0Gibbonator0" className = "btn btn-outline3 top4" target="_blank">GitHub</a>
           <a href="Copy-Arshvir-resume.pdf" className="btn btn-outline4 top5" target="_blank" download>Download Resume</a>
           <p className="mt-2 contact-link top6"> 📞 +1 (510) 760‑2349</p>
           <h1 className="mt-6 top7">Thanks for visiting my site — hope to connect with you soon! 🙌</h1>


        </div>
        
      </div>
    
    </motion.div>



  );
}