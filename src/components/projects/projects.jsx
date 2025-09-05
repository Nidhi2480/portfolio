import React from "react";
import "./project.css";
import useScrollTranslate from '../../Hooks/useScrollTranslate';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaGithub } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";


function Projects() {
    const projects = [
        {
            id: 1,
            name: "Docap - Web Application",
            description: "Developed a doctor search web application using PHP, HTML, CSS, and JavaScript. Enabled users to search doctors by location and specialization.",
            tech: ["PHP", "HTML", "CSS", "JavaScript","MYSQL"],
            github: "#"
        },
        {
            id: 2,
            name: "COVID-19 Detection Using DL",
            description: "Developed a deep learning solution using Python and Flask to detect COVID-19 from CT scan and X-ray images using CNN architectures.",
            tech: ["Python", "Flask", "Deep Learning"],
            github: "https://github.com/Nidhi2480/COVID-19-Detection-Deep-Learning"
        },
        {
            id: 3,
            name: "E-Commerce - Web Application",
            description: "Built a full-featured e-commerce platform using Django. Implemented user authentication, product management, shopping cart, and order processing.",
            tech: ["Django", "Python", "HTML", "CSS"],
            github: "https://github.com/Nidhi2480/Python-Django-projects/tree/main/ecommerce"
        },
        {
            id: 4,
            name: "Hotstar Clone - React",
            description: "Created a Hotstar-like web application using React, featuring responsive UI.",
            tech: ["React", "HTML", "CSS", "JavaScript"],
            github: "#"
        },
        {
            id: 5,
            name: "Hotstar Clone - React Native",
            description: "Developed a mobile app using React Native, mimicking Hotstar's functionality for Android platform.",
            tech: ["React Native", "Expo", "JavaScript"],
            github: "#"
        },
        {
            id: 6,
            name: "RESTful APIs - Golang",
            description: "Designed and implemented robust RESTful APIs using Golang for simple CRUD actions scalable and maintainable backend services.",
            tech: ["Golang"],
            github: "https://github.com/Nidhi2480/Frontend-and-REST-API"
        },
        {
            id: 7,
            name: "Chatbox - Python Django + AJAX",
            description: "Implemented a real-time chatbox using Django and AJAX, enabling seamless two-way communication between users without page reloads.",
            tech: ["Django", "AJAX", "JavaScript", "HTML", "CSS"],
            github: "#"
        }
    ];

    useScrollTranslate('projectsection');

    return (
        <section id="projects">
            <div className="projects-container">
                <span className="projectsection">Projects</span>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    className="custom-swiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        1035: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="project-item">
                                <div className="project-title">
                                    {project.name}
                                </div>
                                <div className="project-content">
                                    {project.description || "No description available."}
                                    {project.tech && project.tech.length > 0 && (
                                        <div className="project-tech">  
                                            <span className="stack-icon"><FaLayerGroup size={10} /></span> | {project.tech.join(', ')}
                                        </div>
                                    )}
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
