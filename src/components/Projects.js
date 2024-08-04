import "./Projects.css"
import React, { useState } from 'react';
import projectData from '../data/projects.js' 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
    const [filter, setFilter] = useState("all")
    // filter projects by what filter currently equals
    const filteredProjects = filter === "all" ? projectData : projectData.filter(project => project.type === filter)
    return (
        <section className="projects-container" id="projectSection">
            <div className="projects-content-container">
                <h1 className="project-title">projects</h1>
                <div className="button-container">
                    <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>all</button>
                    <button className={filter === "business" ? "active" : ""} onClick={() => setFilter("business")}>business</button>
                    <button className={filter === "personal" ? "active" : ""} onClick={() => setFilter("personal")}>personal</button>
                </div>
                <div className="project-icon-container">
                        {filteredProjects.map(project => (
                            <div key={project.id} className="project-icon">
                                <img className="project-pic" src={project.imgSrc} alt={project.title} />
                                <div className="project-desc-layer">
                                    <div className="project-desc">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <h4>{project.skills.join(' | ')}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};