import React from 'react';
import "./Footer.css";

export const Footer = () => {  
  return (
    <section className="footer-container" id="footer">
        <div className="footer-content-container">
          <div>
            <a href="https://www.linkedin.com/in/~graceshum" target="_blank" rel="noopener noreferrer" className="footer-button">linkedin</a>
            <a href="https://github.com/graceshum" target="_blank" rel="noopener noreferrer" className="footer-button">github</a>
            <a href="mailto:graceshum@u.northwestern.edu" target="_blank" rel="noopener noreferrer" className="footer-button">email</a>
          </div>
          <div className="footer-desc">
            <p>designed and coded by grace shum with ♡</p>
            <p>copyright © 2024</p>
          </div>
        </div>
    </section>
  );
};