import SecondaryButton from '@/components/button/SecondaryButton'
import React from 'react'
import { MdDashboardCustomize } from "react-icons/md";
import ShadowElipse from '@/assets/card/Ellipse.svg';
const Card = ({title,description,icon}) =>{
  return (
    <div className='w-[320px] h-[420px] flex flex-col justify-center  items-center gap-4 text-center px-[20px] '>
      <h2 className='w-full  text-[24px] text-[#2B2828] font-medium'>{title}</h2>
      <p className='w-full text-[18px] text-[#585858] font-medium'>{description}</p>
      <span className='text-black text-[4rem] mt-[24px]'> {icon}</span>
      <span className='w-full px-20 mb-[40px]'><ShadowElipse/></span>
    </div>
  )
}
const SecondCard = () => {
  return (
    <div className='w-full  h-full flex flex-col items-center bg-white py-10 sm:py-20 px-10'>
      <div className='text-[#555] flex flex-col justify-center items-center w-full text-center'>
        <p className=' text-[12px] sm:text-[20px] font-normal '>BEM VINDO A HAO FIVE</p>
        <h1 className='text-[#1c1c1c] text-[14px] sm:text-[32px] max-w-[800px] font-bold  py-4'>AMPLIANDO HORIZONTES DIGITAIS CRIANDO PRODUTOS PARA ALAVANCAR EMPRESAS.</h1>
         <p className=' text-[12px] sm:text-[18px] font-normal '>Estamos empenhados em fornecer aos nossos clientes um serviço <br/>excepcional, ao mesmo tempo que oferecemos o nosso funcionários o melhor treinamento.</p>
      </div>

     <div className={'w-full py-10 flex flex-wrap gap-2 justify-center items-center'} > 
        <Card title='texto aleatorio' description='Na escuridão, Emily ouviu um sussurro vindo do corredor. Seus passos ecoaram pelo vazio. Uma sombra surgiu, avançando em direção à luz.' icon={<MdDashboardCustomize />}/>
        <Card title='texto aleatorio' description='Na escuridão, Emily ouviu um sussurro vindo do corredor. Seus passos ecoaram pelo vazio. Uma sombra surgiu, avançando em direção à luz.' icon={<MdDashboardCustomize />}/>
        <Card title='texto aleatorio' description='Na escuridão, Emily ouviu um sussurro vindo do corredor. Seus passos ecoaram pelo vazio. Uma sombra surgiu, avançando em direção à luz.' icon={<MdDashboardCustomize />}/>
     </div>
     

     <div className='flex flex-col justify-center items-center gap-2 '>
<SecondaryButton  />
     </div>

    </div>
  )
}

export default SecondCard