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
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoVue } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const About = () => {
  return (
    <>
      <Label title="About" />
      <div className="container">
        <div className="profile">
          <div className="about-text">
            <p>
              I'm a front-end engineer who have work experience of back-end development and eager to learn new technologies.<br />
              I'm happy to this job because I like to make something useful or convenient and make people's lives better. Also, learning new technologies is really interesting for me.<br />
              I'd love to travel foreign countries. I've visited 16 countries and want more. I'm always exploring something new!
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
              I majored in International politics and relationship in university because I wanted to study International issues. Also, I joined English drama club and performed plays. I thought I wanted to live in other country from this time.
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
              I worked for a software company in Japan as a back-end engineer. I used HTML, CSS, JavaScript, Vue.js in front-end, and Java, PHP, C# in back-end.
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
              Now I'm studying web development in college and finding a job in Vancouver. I came to Vancouver because I've wanted to live in other country for a long time and it makes my life more exciting.
            </div>
          </div>
        </div>
      </div>
      <Label title="Skills" />
      <div className="container">
        <div className="skill-wrapper">
          <div className="skill-row">
            <div className="skill-item">
              <FaHtml5 size={24}/>
              <div className="skill-name">HTML</div>
            </div>
            <div className="skill-item">
              <FaCss3Alt size={24}/>
              <div className="skill-name">CSS</div>
            </div>
            <div className="skill-item">
              <SiSass size={24}/>
              <div className="skill-name">SASS</div>
            </div>
            <div className="skill-item">
              <SiTailwindcss size={24}/>
              <div className="skill-name">Tailwind</div>
            </div>
            <div className="skill-item">
              <FaBootstrap size={24}/>
              <div className="skill-name">Bootstrap</div>
            </div>
            <div className="skill-item">
              <IoLogoJavascript size={24}/>
              <div className="skill-name">JavaScript</div>
            </div>
            <div className="skill-item">
              <SiTypescript size={24}/>
              <div className="skill-name">TypeScript</div>
            </div>
            <div className="skill-item">
              <FaReact size={24}/>
              <div className="skill-name">React</div>
            </div>
            <div className="skill-item">
              <RiNextjsFill size={24}/>
              <div className="skill-name">Next.js</div>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill-item">
              <IoLogoVue size={24}/>
              <div className="skill-name">Vue.js</div>
            </div>
            <div className="skill-item">
              <FaNodeJs size={24}/>
              <div className="skill-name">Node.js</div>
            </div>
            <div className="skill-item">
              <SiPhp size={24}/>
              <div className="skill-name">PHP</div>
            </div>
            <div className="skill-item">
              <FaLaravel size={24}/>
              <div className="skill-name">Laravel</div>
            </div>
            <div className="skill-item">
              <RiJavaLine size={24}/>
              <div className="skill-name">Java</div>
            </div>
            <div className="skill-item">
              <SiMysql size={24}/>
              <div className="skill-name">MySQL</div>
            </div>
            <div className="skill-item">
              <SiMongodb size={24}/>
              <div className="skill-name">MongoDB</div>
            </div>
            <div className="skill-item">
              <SiPostgresql size={24}/>
              <div className="skill-name">PostgreSQL</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About;
