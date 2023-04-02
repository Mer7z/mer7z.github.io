import React from 'react'
import Project from './Project'
import ProjectsList from './ProjectsList'

function Portfolio() {
  return (
    <div className='Portfolio px-5'>
      <h3 className='text-5xl font-bold text-center'>My Portfolio</h3>
      <ProjectsList/>
    </div>
  )
}

export default Portfolio