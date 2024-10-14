import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetail = ({ project }) => {
  const ProjectDetailClass = ((id) => {
    let classText = "project-detail "
    if (id % 3 === 1) {
      classText += "green"
    } else if (id % 3 === 2) {
      classText += "white"
    } else if (id % 3 === 0) {
      classText += "grey"
    }
    return classText
  })

  const skillText = project.skills.join(' / ')

  return (
    <div className={ProjectDetailClass(project.id)}>
      <div className='project-detail-img'>
        <a href={project.url} target="_blank" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/images/portfolio/${project.thumbnail}`} alt={project.title} loading='lazy'/>
        </a>
      </div>
      <div className='project-detail-content'>
        <h4 className='title'>{project.title}</h4>
        <p className='skills'>{skillText}</p>
        <p className='text'>{project.description}</p>
        <div className="link">
          <span>
            <a href={project.url} target="_blank" rel="noreferrer">
              Link
              <FaExternalLinkAlt size={12} />
            </a>
          </span>
          <span>
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
              <FaGithub size={14} />
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
