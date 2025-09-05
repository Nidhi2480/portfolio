import React from "react";
import {
  SiGoland,
  SiPython,
  SiPhp,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDjango,
  SiFlask,
  SiDocker,
  SiTestinglibrary,
  SiReact,
  SiReacthookform
} from 'react-icons/si';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useScrollTranslate from '../../Hooks/useScrollTranslate';
import { Pagination, Autoplay } from 'swiper/modules'; // Add Autoplay
// import useScrollTranslate from '../../Hooks/useScrollTranslate';

import './about_me.css'; // Your styles

const skills = [
  {
    id: 1,
    name: 'Golang',
    logo: <SiGoland size={70} color="#00ADD8" className="icon-shadow" />,
  },
  {
    id: 2,
    name: 'Python',
    logo: <SiPython size={70} color="#3776AB" className="icon-shadow" />,
  },
  {
    id: 3,
    name: 'PHP',
    logo: <SiPhp size={70} color="#8892BF" className="icon-shadow" />,
  },
  {
    id: 4,
    name: 'SQL',
    logo: <SiMysql size={70} color="#00758F" className="icon-shadow" />,
  },
  {
    id: 5,
    name: 'HTML5',
    logo: <SiHtml5 size={70} color="#E34F26" className="icon-shadow" />,
  },
  {
    id: 6,
    name: 'CSS3',
    logo: <SiCss3 size={70} color="#1572B6" className="icon-shadow" />,
  },
  {
    id: 7,
    name: 'JavaScript',
    logo: <SiJavascript size={70} color="#F7DF1E" className="icon-shadow" />,
  },
  {
    id: 8,
    name: 'Django',
    logo: <SiDjango size={70} color="#092E20" className="icon-shadow" />,
  },
  {
    id: 9,
    name: 'Flask',
    logo: <SiFlask size={70} color="#000000" className="icon-shadow" />,
  },
  {
    id: 10,
    name: 'Docker',
    logo: <SiDocker size={70} color="#2496ED" className="icon-shadow" />,
  },
  {
    id: 11,
    name: 'Unit Testing',
    logo: <SiTestinglibrary size={70} color="#E03C31" className="icon-shadow" />,
  },
  {
    id: 12,
    name: 'ReactJS',
    logo: <SiReact size={70} color="#61DAFB" className="icon-shadow" />,
  },
  {
    id: 13,
    name: 'React Native',
    logo: <SiReacthookform size={70} color="#EC5990" className="icon-shadow" />,
  },
];


function AboutMe() {
  useScrollTranslate('skill-section');
  return (
    <section id="about-me">
    <div className="about-me-container">
    <span className="skill-section">Skills</span>
      <div className="about-me-content">
          <div className="skills-container">
            <Swiper
            modules={[Pagination, Autoplay]} 
            spaceBetween={10}
            slidesPerView={4}
            loop={true}  // Enable loop to cycle through slides continuously
            autoplay={{
              delay: 2500,  // Delay in milliseconds between slide transitions (adjust as needed)
              disableOnInteraction: false,  // Keep autoplay running even when interacting with the swiper
            }}
            style={{ height: 'auto' }}  // Automatically adjust height based on content
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              }}}
          >
            {skills.map((skill) => (
                <SwiperSlide key={skill.id}>
                    <div className="skill-item">
                      {skill.logo}
                      <div className="skill-title">{skill.name}</div>
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>

    
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
