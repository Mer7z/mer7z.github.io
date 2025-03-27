import React, { useState } from 'react'

function Project({title, description, date, imgLink, projectLink, tech}) {

  const [hover, setHover] = useState(false);

  const handdleEnter = () => setHover(true)
  const handdleLeave = () => setHover(false)
  return (
    <div onPointerEnter={handdleEnter} onBlur={handdleLeave} onPointerLeave={handdleLeave} className='project-wraper rounded-sm shadow-lg p-5'>
      <div className='img w-full h-72 overflow-hidden cursor-pointer'>
        <a href={projectLink} target="_blank">
          <img src={imgLink} className={`w-full h-full object-cover transition duration-700 ${hover ? 'scale-125' : ''}`} />
        </a>
      </div>
      <div className='project-info font-sans mt-3'>
        <a href={projectLink} target="_blank" className='text-xl font-bold font-serif transition-colors cursor-pointer hover:underline hover:text-sky-500'>{title}</a>
        <p className='text-lg text-black/60'>{date}</p>
        <div className='flex flex-wrap gap-3 mt-3'>
          {
            tech && tech.map((val, index) => (
              <span key={index} className='p-2 text-white dark:bg-gray-500 rounded-full text-xs'>{val}</span>
            ))
          }
        </div>
        <p className='mt-3'>{description}</p>
      </div>
    </div>
  )
}

export default Project