import BgCard from '@/assets/images/bg/card-bg.svg';
import SecondaryButton from '@/components/button/SecondaryButtonVTwon';
const FirstCard = () => {
	return (
		<div className='w-full max-h-[800px] h-full flex items-center  overflow-hidden'>
			<div className='absolute z-1 justify-start ml-6 sm:ml-12   '>
				<p className='text-[#D9D9D9] text-[10px] sm:text-[14px] font-medium mb-1'>
					BEM-VINDO A HAO FIVE{' '}
				</p>
				<h1 className='text-[#D9D9D9] text-[30px] sm:text-[64px] font-medium w-[200px] sm:w-[420px] leading-[30px] sm:leading-[54px] mb-4 sm:mb-10 sm:-ml-1'>
					Conectando Marcas ao Futuro
				</h1>
				<SecondaryButton
					cnContainer={'bg-[#fff] w-[120px] sm:w-[160px] h-[32px] sm:h-[40px] '}
					cnText={' text-[12px] sm:text-[16px] text-[#000]'}
					buttonText={'DESCUBRA MAIS'}
					variantsText={{
						hidden: { color: '#000' },
						visible: { color: '#fff' }
					}}
					btnColor={'pink'}
					btnLink={'/about'}
				/>
			</div>

			<BgCard className='w-full h-fit max-h-[800px] bg-cover ' />
		</div>
	);
};
export default FirstCard;
