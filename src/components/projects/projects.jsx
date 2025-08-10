import React from "react";
import "./project.css";
import useScrollTranslate from '../../Hooks/useScrollTranslate';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function Projects() {
    const projects = [
        { id: 1, name: "Docap - Web Application", description: "Developed a web application that enables users to search for doctors based on location and expertise. Implemented features ..." },
        { id: 5, name: "COVID-19 Detection Using DL", description: "Developed a deep learning solution to detect COVID-19 cases from CT scan and X-ray images using CNN architectures." },
        { id: 6, name: "E-Commerce - Web Application", description: "Built a dynamic web application using Python-Django." }
    ];
    useScrollTranslate('projectsection');
    return (
        <section id="projects">
            <h1 className="project-head">
                <span className="projectsection">Projects</span>
            </h1>
            <div className="projects-container">
           
            <Swiper
                 modules={[Pagination, Autoplay]}
                 loop={true} 
                 slidesPerView={2}
                 className="custom-swiper"
                 autoplay={{
                    delay: 2500,  // Delay in milliseconds between slide transitions (adjust as needed)
                    disableOnInteraction: true,  // Keep autoplay running even when interacting with the swiper
                  }}
            >
                {projects.map((project) => (
                       <SwiperSlide>
                        <div key={project.id} className="project-item">
                            <div className="project-title">{project.name}</div>
                            <div className="project-content">
                                {project.description || "No description available."}
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
         
                </div>
        </section>
    );
}

export default Projects;
