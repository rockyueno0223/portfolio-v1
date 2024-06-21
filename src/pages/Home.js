import React from "react";

import Label from "../components/Label";
import Button from "../components/Button";
import ProjectThumbnail from "../components/ProjectThumbnail";
import Contact from "../pages/Contact";

import AvatarLink from "../img/about/avatar.png";

import Work1Img from "../img/sample/sample-work1.png"
import Work2Img from "../img/sample/sample-work2.png"
import Work3Img from "../img/sample/sample-work3.png"

const projects = [
  { name: "Work1", img: Work1Img, url:"#", text: "This is an explanation of work1. Explain about this work such as when, how I made it." },
  { name: "Work2", img: Work2Img, url:"#", text: "This is an explanation of work2. Explain about this work such as when, how I made it." },
  { name: "Work3", img: Work3Img, url:"#", text: "This is an explanation of work3. Explain about this work such as when, how I made it." }
]

const Home = () => {
  return (
    <div>
      <div className="main-visual">
        <div className="title">
          <h2>Front-end Engineer</h2>
          <h1>Rocky's Portfolio</h1>
        </div>
      </div>
      <Label title="About" />
      <div className="home-about-item">
        <div className="home-about-content">
          <p className="my-name">Hi, I'm Rocky!</p>
          <p className="text">
            I'm a front-end engineer who have experience of back-end development and a passionate learner who have fun for learning!
          </p>
          <div className="skills">
            Skills: HTML CSS JavaScript React Vue.js Node.js PHP Java
          </div>
        </div>
        <div className="home-about-img">
          <img src={AvatarLink} alt="avatar" loading="lazy"/>
        </div>
      </div>
      <Button title="About me" pass="/about" />
      <Label title="Work" />
      <div className="project-thumbnail-wrapper">
        {projects.map(project => {
          return (
            <ProjectThumbnail name={project.name} img={project.img} url={project.url} text={project.text} />
          )
        })}
      </div>
      <Button title="Work" pass="/work"/>
      <Contact />
    </div>
  )
}
export default Home;
