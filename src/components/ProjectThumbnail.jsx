import React from 'react'

const ProjectThumbnail = ({name, img, url, text}) => {
  return (
    <div className='project-thumbnail'>
      <div className='project-thumbnail-img'>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={img} alt={name} />
        </a>
      </div>
      <div className='project-name'>
        <h4>{name}</h4>
      </div>
      <div className='project-thumbnail-content'>
        {text}
      </div>
    </div>
  )
}

export default ProjectThumbnail
