import React, { useEffect, useState } from "react";

import { fetchData } from '../../api/fetchDetails';
import "./project.css";
import useScrollTranslate from '../../Hooks/useScrollTranslate';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaGithub } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

function Projects() {
    const [projects, setProjects] = useState([]);

    useScrollTranslate('projectsection');
    useScrollTranslate('custom-swiper');

    useEffect(() => {
        fetchData('/projects')
            .then((res) => {
                const formattedProjects = res.map((item, index) => ({
                    id: item.ID || index,
                    name: item.Title || `Project ${index + 1}`,
                    description: item.Description,
                    tech: item.Technologies || [],
                    github: item.Github || "#"
                }));
                setProjects(formattedProjects);
            })
            .catch((err) => {
                console.error("Error fetching projects:", err);
            });
    }, []);

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
                                    {project.github && project.github !== "#" && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="github-link">
                                            <FaGithub size={24} />
                                        </a>
                                    )}

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
