
import BgCard from '@/assets/images/bg/card-bg.svg'

const FirstCard = () =>{
  return (
    <div className='w-full max-h-[800px] h-full flex items-center  overflow-hidden' >

      <div className='absolute z-1 justify-start ml-6 sm:ml-12   '>    
        <p className='text-[#D9D9D9] text-[10px] sm:text-[14px] font-medium mb-1'>BEM-VINDO A HAO FIVE </p>
        <h1 className='text-[#D9D9D9] text-[30px] sm:text-[64px] font-medium w-[200px] sm:w-[420px] leading-[30px] sm:leading-[54px] mb-4 sm:mb-10 sm:-ml-1' >Produtora de Conteudo e Audio Visual</h1>
        <button className='z-1 justify-end bg-white text-[12px] sm:text-[20px] text-[#000] px-4 py-2 font-bold mb-2 sm:mb-0'>Frist Button</button>
      </div>

      <BgCard className='w-full h-fit max-h-[800px] bg-cover b'/>
    </div>
  )
}
 export default FirstCard