import React from 'react'

const ProjectDetail = ({ id, name, img, url, skills, text }) => {
  const ProjectDetailContentClass = (({ id }) => {
    let classText = "project-detail-content "
    if (id % 2 !== 0) {
      classText += "odd"
    } else if (id % 2 === 0) {
      classText += "even"
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
            <img src={img} alt={name} />
          </a>
      </div>
      <div className={ProjectDetailContentClass({id})}>
        <h3 className='title'>{name}</h3>
        <p className='skills'>{skillText}</p>
        <p className='text'>{text}</p>
      </div>
    </div>
  )
}

export default ProjectDetail
