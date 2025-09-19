import React, { useState, useEffect } from "react";
import { fetchData } from '../../api/fetchDetails';
import {
  SiGoland,
  SiPython,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiFlask,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLinux,
  SiNginx,
  SiApache,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiMocha,
  SiChai,
  SiJasmine,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiNextdotjs,
  SiAngular,
  SiExpress,
  SiGraphql,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiWebpack,
  SiBabel,
  SiIntellijidea,
  SiPostman,
} from "react-icons/si";
import { BiHelpCircle } from "react-icons/bi";
import { FaAws, FaMicrosoft, FaGoogle } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import useScrollTranslate from "../../Hooks/useScrollTranslate";
import "./about_me.css";

const iconMap = {
  golang: SiGoland,
  python: SiPython,
  php: SiPhp,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  html5: SiHtml5,
  css3: SiCss3,
  sass: SiSass,
  tailwindcss: SiTailwindcss,
  bootstrap: SiBootstrap,
  javascript: SiJavascript,
  typescript: SiTypescript,
  django: SiDjango,
  flask: SiFlask,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  jenkins: SiJenkins,
  git: SiGit,
  github: SiGithub,
  gitlab: SiGitlab,
  linux: SiLinux,
  nginx: SiNginx,
  apache: SiApache,
  aws: FaAws,
  azure: FaMicrosoft,
  googlecloud: FaGoogle,
  jest: SiJest,
  unittesting: SiTestinglibrary,
  cypress: SiCypress,
  mocha: SiMocha,
  chai: SiChai,
  jasmine: SiJasmine,
  reactjs: SiReact,
  reactnative: SiReacthookform,
  redux: SiRedux,
  nextjs: SiNextdotjs,
  angular: SiAngular,
  express: SiExpress,
  graphql: SiGraphql,
  webpack: SiWebpack,
  babel: SiBabel,
  intellij: SiIntellijidea,
  postman: SiPostman,
};

function AboutMe() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchData('/skills')
      .then((res) => {
         const formattedSkills = res.map((item) => ({
          name: item.Title,          // Used in text
          title: item.Title,         // Used to look up icon
          color: item.Color || "#000" // Fallback if color is missing
        }));
        setSkills(formattedSkills);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
      });
  }, []);

  useScrollTranslate("skill-section");
  useScrollTranslate("about-me-content");

  const renderIcon = (skillName, color) => {
    const normalized = skillName.toLowerCase().replace(/\s+/g, "");
    const IconComponent = iconMap[normalized] || BiHelpCircle;
    return <IconComponent size={70} className="icon-shadow" color={color || "#000"} />;
  };

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
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {skills.map((skill, index) => (
                <SwiperSlide key={index}>
                  <div className="skill-item">
                    {renderIcon(skill.name, skill.color)}
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
