import "../App.css";
import { motion } from "framer-motion";
import myVideo from "../assets/AI-Flashcard Maker.mp4";

export default function Projects() {
  return (
    <motion.div
      className = "page page-projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition = {{ duration: 0.7 }}
      >
      <div className = "page page--projects">
        <div className="center">
          <h1 className = "projects-title">Projects</h1>
        </div>
         <h1 className = "projects-heading-left">AI Flashcard Generator</h1>
        <div className = "video-box">
          <video className = "video-element" controls>
            <source src={myVideo} type="video/mp4" />
          </video>
        </div>
        <ul className = "projects-text-box-left    mt-5 line-spacing">
          <li>
             Developed an interactive React web app that can generate flashcards and quizzes, enhancing learning efficiency
         </li>
         <li>
             Integrated OpenAI’s API with GPT-4o to automatically create flashcards based on user provided text, improving content generation
         </li>
         <li>Implemented multiple features such as manual flashcard creation, quiz functionality, answer validation, and user-friendly navigation between different modes
         </li>

         <li>
          Ensured user convenience by handling edge cases and errors, including input validation and API response parsing
         </li>

         <li>
          Managed sensitive API keys securely using environment variables, following good practice for credential safety. In addition, buttons and animations
          were styled using CSS to create a responsive interface.

         </li>
        </ul>
       
      </div>
      
    </motion.div>
  );
}