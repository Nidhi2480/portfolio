import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt,FaGamepad, FaChess, FaBookReader } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useScrollTranslate from '../../Hooks/useScrollTranslate';
import { Pagination, Autoplay } from 'swiper/modules'; // Add Autoplay
import { SiMongodb, SiAdobe } from 'react-icons/si'; // You can also import icons from other sets
// import useScrollTranslate from '../../Hooks/useScrollTranslate';

import './about_me.css'; // Your styles

const colour="grey";

// Define an array of skill objects
const skills = [
  {
    id:1,
    name: 'React',
    logo: <FaReact size={70} color={colour}  className="icon-shadow" />,
  },
  {
    id:2,
    name: 'JavaScript',
    logo: <FaJs size={70} color="yellow"  className="icon-shadow" />,
  },
  {
    id:3,
    name: 'HTML5',
    logo: <FaHtml5 size={70} color="red"  className="icon-shadow" />,
  },
  {
    id:4,
    name: 'CSS3',
    logo: <FaCss3Alt size={70} color={colour}  className="icon-shadow" />,
  },
  {
    id:5,
    name: 'Node.js',
    logo: <FaNodeJs size={70} color={colour}  className="icon-shadow" />,
  },
  {
    id:6,
    name: 'Git',
    logo: <FaGitAlt size={70} color="red"  className="icon-shadow" />,
  },
  {
    id:7,
    name: 'MongoDB',
    logo: <SiMongodb size={70} color="green"  className="icon-shadow" />,
  },
  {
    id:8,
    name: 'UI/UX Design',
    logo: <SiAdobe size={70} color={colour}  className="icon-shadow" />,  // Representing UI/UX with Adobe's logo
  }
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
