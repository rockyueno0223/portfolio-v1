import React from 'react'

const ProjectDetail = ({img, text}) => {
  return (
    <div className='project-detail'>
      <div className='project-detail-img'>
        <img src={img} alt="" />
      </div>
      <div className='project-detail-text'>
        {text}
      </div>
    </div>
  )
}

export default ProjectDetail
