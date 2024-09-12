import React, { useState, useEffect } from "react";
import Label from "../components/Label";

import ProjectDetail from "../components/ProjectDetail";

const Work = () => {
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
      setProjects(data.projects)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Label title="Work" />
      <div className="container">
        <div className="project-detail-wrapper">
          {projects.map((project, index) => {
          return (
            <ProjectDetail key={index} project={project} />
          )
          })}
        </div>
      </div>
    </>
  )
}
export default Work;
