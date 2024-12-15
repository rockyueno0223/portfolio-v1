import React, { useState, useEffect } from "react";
import Label from "../components/Label";

import ProjectDetail from "../components/ProjectDetail";

const Work = () => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [projectType, setProjectType] = useState("featured")

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    if (projectType === "featured") {
      setFilteredProjects(projects.filter(project => project.isFeatured))
    } else if (projectType === "all") {
      setFilteredProjects(projects)
    }
  }, [projects, projectType])

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/ProjectData.json`)

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
      <div className="container work-page-wrapper">
        <div className="work-page-header">
          <select
            name="project-type"
            id="project-type"
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="featured">Featured Projects</option>
            <option value="all">All Projects</option>
          </select>
        </div>
        <div className="project-detail-wrapper">
          {filteredProjects.map((project, index) => {
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
