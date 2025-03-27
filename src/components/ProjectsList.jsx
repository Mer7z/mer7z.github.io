import React, { useEffect, useState } from 'react'
import Project from './Project'

function ProjectsList({filter}) {

  const [projects, setProjects] = useState([])

  useEffect(() => {

    const loadProjects = async () =>{
      try{
        const res = await fetch('/projects/projects.json')
        if(res.ok){
          const object = await res.json()
          setProjects(object)
        }
      } catch(err){
        console.error(err)
      }
    } 

    loadProjects();
  }, [])


  if(filter){
    return (
      <div className='Projects grid grid-cols-1 lg:grid-cols-3 gap-3 mb-5'>
        {projects.slice(0, 3).map((val, i) => (
          <Project
            key={i}
            title={val.name}
            date={val.date}
            imgLink={val.img}
            description={val.description}
            projectLink={val.pageLink}
            tech={val.tech}
          />
        ))}
      </div>
    );
  }

  return (
    <div className='Projects grid grid-cols-1 lg:grid-cols-3 gap-3 mb-5'>
        {projects.map((val, i) => (
          <Project
            key={i}
            title={val.name}
            date={val.date}
            imgLink={val.img}
            description={val.description}
            projectLink={val.pageLink}
            tech={val.tech}
          />
        ))}
      </div>
  )
}

export default ProjectsList