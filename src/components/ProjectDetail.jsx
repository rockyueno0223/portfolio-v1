import React from 'react'

const ProjectDetail = ({ id, name, img, url, skills, text }) => {
  const ProjectDetailContentClass = (({ id }) => {
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

  const skillText = skills.reduce((result, curr) => {
    return `${result} / ${curr}`
  })

  return (
    <div className='project-detail'>
      <div className='project-detail-img'>
        <a href={url} target="_blank" rel="noreferrer">
            <img src={img} alt={name} loading='lazy'/>
          </a>
      </div>
      <div className={ProjectDetailContentClass({id})}>
        <h4 className='title'>{name}</h4>
        <p className='skills'>{skillText}</p>
        <p className='text'>{text}</p>
      </div>
    </div>
  )
}

export default ProjectDetail
