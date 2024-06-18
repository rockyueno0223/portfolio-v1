import React from "react";
import Label from "../components/Label";
import Button from "../components/Button";
import Contact from "../pages/Contact";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoDevTo } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import AvatarLink from "../img/about/avatar.png";
import ProjectThumbnail from "../components/ProjectThumbnail";

import Work1Img from "../img/sample/sample-work1.png"
import Work2Img from "../img/sample/sample-work2.png"
import Work3Img from "../img/sample/sample-work3.png"

const workObj = [
  { img: Work1Img, text: "This is an explanation of work1. Explain about this work such as when, how I made it." },
  { img: Work2Img, text: "This is an explanation of work2. Explain about this work such as when, how I made it." },
  { img: Work3Img, text: "This is an explanation of work3. Explain about this work such as when, how I made it." }
]

const Home = () => {
  return (
    <div>
      <div className="main-visual">
        <div className="title">
          <h2>Front-end Engineer</h2>
          <h1>Rocky's Portfolio</h1>
        </div>
        <div className="link-wrapper">
          <a href="https://github.com/rockyueno0223" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://dev.to/rockyueno0223" target="_blank" rel="noreferrer">
            <BiLogoDevTo size={30} />
          </a>
          <a href="mailto:rockyueno@gmail.com">
            <MdEmail size={30} />
          </a>
        </div>
      </div>
      <Label title="About" />
      <div className="home-about-item">
        <div className="home-about-text">
          I'm Rocky.<br />
          I'm a front-end engineer and a passionate learner who have fun for learning!
        </div>
        <div className="home-about-img">
          <img src={AvatarLink} alt=""/>
        </div>
      </div>
      <Button title="About me" pass="/about" />
      <Label title="Work" />
      <div className="project-thumbnail-wrapper">
        <ProjectThumbnail img={workObj[0].img} text={workObj[0].text} />
        <ProjectThumbnail img={workObj[1].img} text={workObj[1].text} />
        <ProjectThumbnail img={workObj[2].img} text={workObj[2].text} />
      </div>
      <Button title="Work" pass="/work"/>
      <Contact />
    </div>
  )
}
export default Home;
