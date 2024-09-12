import React from 'react'

const ProjectDetail = ({ project }) => {
  const ProjectDetailContentClass = ((id) => {
    let classText = "project-detail-content "
    if (id % 3 === 1) {
      classText += "green"
    } else if (id % 3 === 2) {
      classText += "white"
    } else if (id % 3 === 0) {
      classText += "grey"
    }
    return classText
  })

  const skillText = project.skills.reduce((result, curr) => {
    return `${result} / ${curr}`
  })

  return (
    <div className='project-detail'>
      <div className='project-detail-img'>
        <a href={project.url} target="_blank" rel="noreferrer">
          <img src={`/images/sample/${project.thumbnail}`} alt={project.title} loading='lazy'/>
        </a>
      </div>
      <div className={ProjectDetailContentClass(project.id)}>
        <h4 className='title'>{project.title}</h4>
        <p className='skills'>{skillText}</p>
        <p className='text'>{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectDetail
