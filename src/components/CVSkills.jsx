import React, { useEffect, useState } from 'react'

function CVSkills({name, rate, delay = 0}) {

  const [rates, setRates] = useState([false,false,false,false,false])

  useEffect(() => {
    const timeout = setTimeout(() =>{
      rates.forEach((el, i) => {
        if(i <= rate - 1){
          setRates(prevArr =>{
            const newArr = [...prevArr]
            newArr[i] = true;
            return newArr;
          })
        } else {
          setRates(prevArr =>{
            const newArr = [...prevArr]
            newArr[i] = false;
            return newArr;
          })
        }
      });
    }, delay)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='cv-skill'>
      <p className='text-xl font-bold font-sans mb-2'>{name}</p>
      <div className='rate flex gap-1'>
        <div className='h-2 grow bg-gray-400/50 relative'>
          <div className={`skill-rate1 absolute top-0 left-0 w-full h-full bg-sky-500  ${rates[0] === true ? 'view' : 'opacity-0'}`}></div>
        </div>
        <div className='h-2 grow bg-gray-400/50 relative'>
          <div className={`skill-rate2 absolute top-0 left-0 w-full h-full bg-sky-500  ${rates[1] === true ? 'view' : 'opacity-0'}`}></div>
        </div>
        <div className='h-2 grow bg-gray-400/50 relative'>
          <div className={`skill-rate3 absolute top-0 left-0 w-full h-full bg-sky-500  ${rates[2] === true ? 'view' : 'opacity-0'}`}></div>
        </div>
        <div className='h-2 grow bg-gray-400/50 relative'>
          <div className={`skill-rate4 absolute top-0 left-0 w-full h-full bg-sky-500  ${rates[3] === true ? 'view' : 'opacity-0'}`}></div>
        </div>
        <div className='h-2 grow bg-gray-400/50 relative'>
          <div className={`skill-rate5 absolute top-0 left-0 w-full h-full bg-sky-500  ${rates[4] === true ? 'view' : 'opacity-0'}`}></div>
        </div>
      </div>
    </div>
  )
}

export default CVSkills