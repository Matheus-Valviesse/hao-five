import React from 'react'
import ArrowLeft from '@/assets/button/arrow-left.svg'
import ArrowRight from '@/assets/button/arrow-right.svg'
import ProjectImg from '@/assets/images/bg/project.svg'
const ProjectCard = () =>{
return (
  <div className='w-full flex flex-row min-h-[300px] h-full  overflow-hidden bg-blue-700'>
    <div className='bg-white flex flex-col text-[#1C1C1C]  py-[30px] px-[60px]  max-w-[60vw] justify-start items-start gap-y-4'>
      <h3 className='text-[28px]  font-semibold uppercase'>propjeto 01</h3>
      <p className='text-[16px] text-[#2F2F2F] leading-[18px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button className='uppercase justify-start flex gap-2 text-[18px] font-bold'>
        conheça 
       
          <ArrowLeft className='w-6'/>
     
      </button>
    </div>
  <span className='max-w-[40vw] max-h-full bg-red-50 bg-cover'><ProjectImg  className='max-w-full w-screen  h-full bg-cover  object-cover'/></span>
   
  </div>
)
}

const ProjectCardReverse = () =>{
return (
  <div className='w-full flex flex-row max-h-[300px] overflow-hidden'> 
    <ProjectImg  className='max-w-[40vw]'/>
    <div className='bg-[#221D1D] flex flex-col text-[#EEEEEE]  py-[30px] px-[60px]  max-w-[60vw] justify-start items-end text-end gap-y-4'>
      <h3 className='text-[28px]  font-semibold uppercase'>propjeto 01</h3>
      <p className='text-[16px] text-[#dddddd] leading-[18px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button className='uppercase justify-start flex gap-2 text-[18px] font-bold'>
        
       
          <ArrowRight className='w-6'/>conheça 
     
      </button>
    </div>

  
  </div>
)
}
const ThirdCard = () => {
  return (
    <div className='bg-black w-full flex flex-col'>
    <h2 className='uppercase text-[34px] text-[#D9D9D9] font-semibold my-[60px] text-center'>Confira nossos projetos!</h2>
    <div className='flex flex-col gap-y-20'>
      <ProjectCard />
      <ProjectCardReverse />
      <ProjectCard />
    </div>
  
    </div>
  )
}

export default ThirdCard