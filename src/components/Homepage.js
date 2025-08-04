import "./Homepage.css"
import React, { useState, useEffect } from 'react';
import homeIcon from '../assets/home-icon.png';
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

const screenHeight = window.innerHeight;
document.documentElement.style.setProperty('--vh', `${screenHeight * 0.01}px`);

export const Homepage = () => {
    const allText = ["hey there!", "i'm grace, a student at northwestern university", "i'm studying computer science", 
        "i'm interested in software engineering, product development engineering, and data science", "i'm also interested in ui/ux design and web/app dev",
        "i also love to draw and play piano", "thanks for visiting!"]
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [typeTime, setTypeTime] = useState(100);
    
    // sets interval for text being typed everytime 'text' changes
    useEffect(() => {
        // calls type() with 300ms delay in between
        let typer = setInterval(() => {
          type();
        }, typeTime);
        
        //cleanup function to clear interval when component unmounts or [text] changes
        return () => {
          clearInterval(typer)};
      }, [text])

    // type function
    const type = () => {
        //loop back to beginning of text arr when we reach the last element
        let i = loopNum % allText.length;
        let currText = allText[i];
        // if being typed, add letter, if being deleted, delete letter + update the text
        let updatedText = isDeleting ? currText.substring(0, text.length - 1) : currText.substring(0, text.length + 1);
        setText(updatedText);

        //set deleting speed
        if (isDeleting) {
            setTypeTime(33);
        }

        // if isDeleting is false and the full string is typed, set isDeleting to true
        if (!isDeleting && updatedText === currText) {
            setIsDeleting(true);
            setTypeTime(1000) // pause at the end
        }
        // if finished deleting, update loopNum and change back to normal typing speed
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(prevLoopNum => prevLoopNum + 1);
            setTypeTime(40)
        }
    }
    
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section className="home-container" id="homeSection">
            <div className="home-content-container">
                <motion.div className="home-content" variants={textVariants} initial="initial" animate="animate">
                    <motion.img src={homeIcon} alt="home icon" className="home-img" variants={textVariants}/>
                    <motion.h1 className="home-title" variants={textVariants}>grace shum</motion.h1>
                    <motion.p className="home-desc" variants={textVariants}><span className="wrap">{text}</span></motion.p>
                    <motion.div className="home-button-container" variants={textVariants}>
                        <motion.a href="https://www.linkedin.com/in/~graceshum" target="_blank" rel="noopener noreferrer" className="home-button">linkedin →</motion.a>
                        <motion.a href="https://github.com/graceshum" target="_blank" rel="noopener noreferrer" className="home-button">github →</motion.a>
                        <motion.a href="mailto:graceshum@u.northwestern.edu" target="_blank" rel="noopener noreferrer" className="home-button">email →</motion.a>
                    </motion.div>
                </motion.div>
            </div>
            <div className="arrow-container">
                <HashLink smooth to="#aboutSection" className="arrow"></HashLink>
            </div>
        </section>
    );
};


    
