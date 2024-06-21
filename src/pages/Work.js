import React from "react";
import Label from "../components/Label";

import ProjectDetail from "../components/ProjectDetail";

import Work1Img from "../img/sample/sample-work1.png"
import Work2Img from "../img/sample/sample-work2.png"
import Work3Img from "../img/sample/sample-work3.png"

const projects = [
  { id: 1, name: "Work1", img: Work1Img, url:"#", skills:["HTML", "CSS"], text: "This is an explanation of work1. Explain about this work such as when, how I made it." },
  { id: 2, name: "Work2", img: Work2Img, url:"#", skills:["HTML", "CSS", "JavaScript", "Sass"], text: "This is an explanation of work2. Explain about this work such as when, how I made it." },
  { id: 3, name: "Work3", img: Work3Img, url:"#", skills:["HTML", "CSS", "Vue.js"], text: "This is an explanation of work3. Explain about this work such as when, how I made it." }
]

const Work = () => {
  return (
    <div>
      <Label title="Work" />
      <div className="container">
        <div className="project-detail-wrapper">
          {projects.map(project => {
          return (
            <ProjectDetail key={project.id} id={project.id} name={project.name} img={project.img} url={project.url} skills={project.skills} text={project.text} />
          )
          })}
        </div>
      </div>
    </div>
  )
}
export default Work;
