import React, { useEffect, useState } from "react";

import Label from "../components/Label";
import Button from "../components/Button";
import ProjectThumbnail from "../components/ProjectThumbnail";

import AvatarLink from "../img/about/avatar.png";

const Home = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch("/ProjectData.json")

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json()
      console.log(data);
      console.log(data.projects);

      setProjects(data.projects)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="main-visual">
        <div className="title">
          <h2>Front-end Engineer</h2>
          <h1>Rocky's Portfolio</h1>
        </div>
      </div>
      <Label title="About" />
      <div className="container">
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
      </div>
      <Button title="About me" pass="/about" />
      <Label title="Work" />
      <div className="project-thumbnail-wrapper">
        {projects.map((project, index) => {
          return (
            <ProjectThumbnail key={index} project={project} />
          )
        })}
      </div>
      <Button title="Work" pass="/work"/>
    </>
  )
}
export default Home;
