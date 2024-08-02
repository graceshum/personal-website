import "./About.css"
import React from 'react';
import aboutIcon from '../assets/about-me-cat.png';
// import tapeIcon from '../assets/tape.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skillsData from '../data/skills.js';
import techData from '../data/technologies.js';
import resumePdf from '../assets/resume.pdf';

// SLIDER COMPONENT FOR SKILLS + TECHNOLOGIES
const SkillSlider = ({ skills }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };
  
  return (
    <div className="skills-container">
      <Slider className="slider-container"{...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.imgSrc} alt={skill.title} />
            <p>{skill.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
  
// ABOUT SECTION
export const About = () => {  
    return (
        <section className="about-container" id="aboutSection">
            {/* <img src={tapeIcon} alt="tape icon" className="tape-img"/> */}
            <div className="about-content-container">
                <div className="text-block">
                    <p className="about-sub">2005.19.04</p>
                    <h1 className="about-headers">grace shum</h1>
                </div>
                <div className="text-block">
                    <p className="about-sub">at northwestern university studying</p>
                    <h1 className="about-headers">computer science, business institutions</h1>
                </div>
                <img src={aboutIcon} alt="about icon" className="about-img"/>
                <div className="text-block">
                    <p className="about-sub">want to know more?</p>
                    <h1 className="about-headers">
                      <a className="about-headers" href={resumePdf} target="_blank" rel="noopener noreferrer">
                      resume</a>
                    </h1>
                </div>  
            </div>
            {/* skills right side */}
            <div className="about-skills">
              <div className="text-block">
                    <p className="about-sub">skills i've used in projects</p>
                    <h1 className="about-headers">programming languages</h1>
              </div>
              <div className="skills-container">
                  <SkillSlider skills={skillsData} />
              </div>
              <div className="text-block">
                    <p className="about-sub">frameworks, libraries, infrastructure, etc.</p>
                    <h1 className="about-headers">technologies</h1>
              </div>
              <div className="skills-container">
                  <SkillSlider skills={techData} />
              </div>
            </div>
        </section>
    );
};