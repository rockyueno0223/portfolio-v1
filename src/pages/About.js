import React from "react";
import Label from "../components/Label";

import { IoIosSchool } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoVue } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const About = () => {
  return (
    <>
      <Label title="About" />
      <div className="container">
        <div className="profile">
          <div className="about-text">
            <p>
              <span>
                &nbsp;I'm a front-end engineer who have work experience of back-end development and eager to learn new technologies.
              </span>
              <span>
                &nbsp;I'm happy to this job because I like to make something useful or convenient and make people's lives better. Also, learning new technologies is really interesting for me.
              </span>
              <span>
                &nbsp;I'd love to travel foreign countries. I've visited 16 countries and want more. I'm always exploring something new!
              </span>
            </p>
          </div>
          <div className="about-img">
            <img src={`${process.env.PUBLIC_URL}/images/about/about-me.jpg`} alt="About Me" loading="lazy"/>
          </div>
        </div>
        <div className="history">
          <div className="history-content">
            <div className="history-header">
              <IoIosSchool size={45}/>
              <div className="history-title">
                My university life
              </div>
            </div>
            <div className="history-text">
              &nbsp;I majored in International politics and relationship in university because I wanted to study International issues. Also, I joined English drama club and performed plays. I thought I wanted to live in other country from this time.
            </div>
          </div>
          <div className="history-content">
            <div className="history-header">
              <FaLaptop size={45}/>
              <div className="history-title">
                My Work in Japan
              </div>
            </div>
            <div className="history-text">
              &nbsp;I worked for a software company in Japan as a back-end engineer. I used HTML, CSS, JavaScript, Vue.js in front-end, and Java, PHP, C# in back-end.
            </div>
          </div>
          <div className="history-content">
            <div className="history-header">
              <FaSchool size={45}/>
              <div className="history-title">
                Now in Vancouver
              </div>
            </div>
            <div className="history-text">
              &nbsp;Now I'm studying web development in college and finding a job in Vancouver. I came to Vancouver because I've wanted to live in other country for a long time and it makes my life more exciting.
            </div>
          </div>
        </div>
      </div>
      <Label title="Skills" />
      <div className="container">
        <div className="skill-wrapper">
          <div className="skill-section">
            <p className="skill-section-title">
              Languages
            </p>
            <div className="skill-section-inner">
              <span><FaHtml5 size={24}/></span>
              <span><FaCss3Alt size={24}/></span>
              <span><IoLogoJavascript size={24}/></span>
              <span><BiLogoTypescript size={24}/></span>
              <span><SiPhp size={24}/></span>
              <span><RiJavaLine size={24} /></span>
            </div>
          </div>
          <div className="skill-section">
            <p className="skill-section-title">
              Frameworks & Libraries
            </p>
            <div className="skill-section-inner">
              <span><SiTailwindcss size={24}/></span>
              <span><FaReact size={24}/></span>
              <span><RiNextjsFill size={24}/></span>
              <span><IoLogoVue size={24} /></span>
              <span><SiRedux size={24}/></span>
              <span><SiShadcnui size={24}/></span>
              <span><TbBrandFramerMotion size={24} /></span>
              <span><SiPrisma size={24}/></span>
              <span><FaNodeJs size={24}/></span>
              <span><SiExpress size={24} /></span>
              <span><FaLaravel size={24} /></span>
              <span><SiSass size={24} /></span>
              <span><FaBootstrap size={24} /></span>
              <span><SiJquery size={24}/></span>
            </div>
          </div>
          <div className="skill-section">
            <p className="skill-section-title">
              DB & SaaS
            </p>
            <div className="skill-section-inner">
              <span><SiSupabase size={24}/></span>
              <span><IoLogoFirebase size={24}/></span>
              <span><SiMongodb size={24}/></span>
              <span><SiMysql size={24}/></span>
              <span><SiPostgresql size={24}/></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About;
