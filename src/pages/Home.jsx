import React, { useEffect, useState } from "react";

import Label from "../components/Label";
import Button from "../components/Button";
import ProjectThumbnail from "../components/ProjectThumbnail";

import { motion } from "framer-motion";

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/ProjectData.json`)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json()
      setFeaturedProjects(data.projects.filter(project => project.isFeatured))
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="main-visual">
        <div className="title">
          <motion.h2
            initial={{ opacity: 0, y: "-120px" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.0,
                delay: 0.3,
                ease: [0.25, 0.8, 0.25, 1],
              }
            }}
          >
            Front-end Engineer
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.0,
                delay: 0.3,
                ease: [0.25, 0.8, 0.25, 1],
              }
            }}
          >
            Rocky's Portfolio
          </motion.h1>
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
            <img src={`${process.env.PUBLIC_URL}/images/about/avatar.png`} alt="Avatar" loading="lazy"/>
          </div>
        </div>
      </div>
      <Button title="About me" pass="/about" />
      <Label title="Work" />
      <div className="project-thumbnail-wrapper">
        {featuredProjects.map((project, index) => {
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
