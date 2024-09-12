import React from 'react'

const ProjectThumbnail = ({ project }) => {
  return (
    <div className='project-thumbnail'>
      <div className='project-thumbnail-img'>
        <a href={project.url} target="_blank" rel="noreferrer">
          <img src={`/images/sample/${project.thumbnail}`} alt={project.title} loading='lazy'/>
        </a>
      </div>
      <div className='project-thumbnail-content'>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectThumbnail
