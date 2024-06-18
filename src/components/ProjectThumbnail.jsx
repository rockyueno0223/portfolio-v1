import React from 'react'

const ProjectThumbnail = ({img, text}) => {
  return (
    <div className='project-thumbnail'>
      <div className='project-thumbnail-img'>
        <img src={img} alt="" />
      </div>
      <div className='project-thumbnail-text'>
        {text}
      </div>
    </div>
  )
}

export default ProjectThumbnail
