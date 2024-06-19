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
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

import SampleIcon from "../img/sample/sample-icon.png";
import AboutImg from "../img/about/aboutme.jpg";

const About = () => {
  return (
    <div>
      <Label title="About" />
      <div className="container">
        <div className="profile">
          <div className="about-text">
            I'm Rocky.<br />
            I'm a front-end engineer and a passionate learner who have fun for learning!
          </div>
          <div className="about-img">
            <img src={AboutImg} alt="about me"/>
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
              This is a content about university.
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
              This is a content about work.
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
              This is a content about Vancouver.
            </div>
          </div>
        </div>
      </div>
      <Label title="Skills" />
      <div className="container">
        <div className="skill-wrapper">
          <div className="skill-row">
            <div className="skill-item">
              <FaHtml5 size={26}/>
              <div className="skill-name">HTML</div>
            </div>
            <div className="skill-item">
              <FaCss3Alt size={26}/>
              <div className="skill-name">CSS</div>
            </div>
            <div className="skill-item">
              <SiSass size={26}/>
              <div className="skill-name">SASS</div>
            </div>
            <div className="skill-item">
              <SiTailwindcss size={26}/>
              <div className="skill-name">Tailwind</div>
            </div>
            <div className="skill-item">
              <FaBootstrap size={26}/>
              <div className="skill-name">Bootstrap</div>
            </div>
            <div className="skill-item">
              <IoLogoJavascript size={26}/>
              <div className="skill-name">JavaScript</div>
            </div>
            <div className="skill-item">
              <SiTypescript size={26}/>
              <div className="skill-name">TypeScript</div>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill-item">
              <FaReact size={26}/>
              <div className="skill-name">React</div>
            </div>
            <div className="skill-item">
              <IoLogoVue size={26}/>
              <div className="skill-name">Vue.js</div>
            </div>
            <div className="skill-item">
              <FaNodeJs size={26}/>
              <div className="skill-name">Node.js</div>
            </div>
            <div className="skill-item">
              <SiPhp size={26}/>
              <div className="skill-name">PHP</div>
            </div>
            <div className="skill-item">
              <FaLaravel size={26}/>
              <div className="skill-name">Laravel</div>
            </div>
            <div className="skill-item">
              <RiJavaLine size={26}/>
              <div className="skill-name">Java</div>
            </div>
            <div className="skill-item">
              <SiMysql size={26}/>
              <div className="skill-name">MySQL</div>
            </div>
            <div className="skill-item">
              <SiMongodb size={26}/>
              <div className="skill-name">MongoDB</div>
            </div>
            <div className="skill-item">
              <SiPostgresql size={26}/>
              <div className="skill-name">PostgreSQL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;
