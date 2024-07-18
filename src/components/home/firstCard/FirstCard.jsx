
import BgCard from '@/assets/images/bg/card-bg.svg'

const FirstCard = () =>{
  return (
    <div className='w-full max-h-[800px] h-full flex items-center  overflow-hidden' >

      <div className='absolute z-10 justify-start ml-12  '>    
        <p className='text-[#D9D9D9] text-[14px] font-medium '>BEM-VINDO A HAO FIVE </p>
        <h1 className='text-[#D9D9D9] text-[64px] font-medium w-[420px] leading-[1] mb-10 -ml-1' >Produtora de Conteudo e Audio Visual</h1>
        <button className='z-10 justify-end bg-white text-[20px] text-[#000] px-4 py-2 font-bold'>Frist Button</button>
      </div>

      <BgCard className='w-full h-fit max-h-[800px] bg-cover b'/>
    </div>
  )
}
 export default FirstCard