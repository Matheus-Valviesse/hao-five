'use client'
import React from 'react'
import ArrowLeft from '@/assets/button/arrow-left.svg'
import ArrowRight from '@/assets/button/arrow-right.svg'
import c from '@/assets/captura.png'
import Image from 'next/image'
import SecondaryButton from '@/components/button/SecondaryButtonVTwon'
const ProjectCard = () =>{
return (
  <div className='w-full flex min-h-[280px] h-full overflow-hidden '>
    <div className='bg-white flex flex-col text-[#1C1C1C]  py-[30px] px-[60px]  sm:max-w-[60vw] justify-start items-start gap-y-4'>
      <span className='max-h-[200px] h-[200px] w-full flex sm:hidden relative'>
        <Image src={c} layout='fill' objectFit='cover' alt='a'/>
      </span>
      <h3 className='text-[28px]  font-semibold uppercase'>propjeto 01</h3>

      <p className='text-[16px] text-[#2F2F2F] leading-[18px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button className='uppercase justify-start flex gap-2 text-[18px] font-bold'>
        conheça 
       
          <ArrowLeft className='w-6'/>
     
      </button>
    </div>
  
      <div className='relative w-full bg-red-500 hidden sm:flex'>
        <Image src={c} layout='fill' objectFit='cover' alt='a' />
      </div>
     
    
  </div>
)
}

const ProjectCardReverse = () =>{
return (
  <div className='w-full flex min-h-[280px] h-full overflow-hidden '>
    
  
      <div className='relative w-full  hidden sm:flex'>
        <Image src={c} layout='fill' objectFit='cover' alt='a' />
      </div>
     <div className='bg-[#221D1D] flex flex-col text-[#EEEEEE]  py-[30px] px-[60px]  sm:max-w-[60vw] justify-start items-start gap-y-4'>
      <span className='max-h-[200px] h-[200px] w-full flex sm:hidden relative'>
        <Image src={c} layout='fill' objectFit='cover' alt='a'/>
      </span>
      <h3 className='text-[28px]  font-semibold uppercase'>propjeto 01</h3>

      <p className='text-[16px] text-[#e0e0e0] leading-[18px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button className='uppercase justify-start flex gap-2 text-[18px] font-bold'>
       <ArrowRight className='w-6'/> conheça 
       
          
     
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
  
    <div className='w-full text-center flex flex-col justify-center items-center py-[95px]  gap-4 sm:gap-8'>
      <h3 className='max-w-[660px] px-10 text-[30px] sm:text-[50px] text-[#FFFFFF] font-semibold uppercase leading-[35px] sm:leading-[60px]
      '>Gostou ?<br/> 
      Com certeza né, para saber mais confira:</h3>
      <SecondaryButton />
    </div>
    </div>
  )
}

export default ThirdCard