import "../App.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className = "page page-about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition = {{ duration: 0.7 }}
      >
          <div className="page page--about">
            <div className = "text-box-left">
              <p className = "mt-3 line-spacing">
                My full name is Arshvir Sandhu. I am currently a sophmore student at San Diego State University
                studying Computer Engineering. After my freshman year, I decided to get ahead and start working on leetcode
                and coding projects on the side. I had the idea that I needed to start building an impressive resume and work
                on problem-solving skills through leetcode. I got interested in tech and programming since highschool
                and taking my first Computer Science class. In addition to that, I've always loved computers and playing
                video games which sparked my curiosity into how all these things were organized and made. As of right
                now I have developed skills in the following languages: Python, Java, C, C++ with my strongest being Python.
                I also have experience working with React + Vite and solving Leetcode problems.
              </p>
            </div>
            <div className = "text-box-middle">
              <p className = "mt-3 line-spacing">
                My goal is to become a full time software engineer in big tech. I've become so intrigued with 
                coding since it involves lots of problem solving skills. Playing video games and dealing
                with puzzles and solving problems has also inspired my desire to become someone who thinks more outside the box.
                I also dream to work in New York City, that has always been my dream city that I want to live while pursing 
                my career. I also hope to contribute to the world through software development and innovation.
                I strongly believe in the positive effect technology has had in our lives and the world, and I love that working a job
                which involves improving and creating software is going to be my career. I want to improve people's lives
                and the world with better tech. I've had this career goal since I was in middle school and I'm excited as I get
                closer to the end.
              </p>
            </div>
            <div className = "text-box-right">
              <p className = "mt-3 line-spacing">
                Some personal/fun facts about me is I love going to the gym six days a week. I used to be very 
                insecure about my body and strength but after a few tough years of training and eating more, I developed
                a decent body that looked and felt right to me. This taught me a great lesson that you fail when you
                give up, not when you fail. I started off thinking I was always going to be weak and super thin and I felt
                like giving up, but despite those hard times I kept going and now looking back I'm glad I didn't give up.
                I now use that and apply it to all parts of my life, whether it's coding, or any other skill I want to 
                improve at. Now even if I am a beginner or feel like I am not good at something, I know if I just
                keep the momentum going I am bound to succeed. Some other facts is that I love playing video games when I 
                have free time or watching YouTube. I also enjoy volleyball and walking around in big cities!
              </p>
            </div>
              <h1 className = "about-middle">Career Goals</h1>
              <h1 className = "about-top-left">Background & Skills</h1>
              <h1 className = "about-top-right">Personal / Fun Facts</h1>
              <h1 className = "about-title">Who Am I?</h1>
          </div>
      </motion.div>
  );
}