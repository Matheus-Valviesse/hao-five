import SecondaryButton from '@/components/button/SecondaryButtonVTwon';
import React from 'react';

const FifthCard = () => {
	return (
		<section className='w-full h-[400px] bg-gray-600 relative flex items-center justify-center'>
			<div className='px-4 flex flex-col gap-2 max-w-[90vw]'>
				<h1 className='text-[#fff] text-[26px] sm:text-[48px]'>
					AGORA QUE SABE UM POUCO MAIS SOBRE NÓS QUE TAL COMEÇAR SEU PROJETO?
				</h1>
				<SecondaryButton
					cnContainer={'bg-[#000] w-[120px] sm:w-[160px] h-[32px] sm:h-[40px] '}
					cnText={' text-[12px] sm:text-[16px] text-[#fff]'}
					buttonText={'FALE CONOSCO'}
					variantsText={{
						hidden: { color: '#fff' },
						visible: { color: '#fff' }
					}}
					btnLink={'/contact'}
				/>
			</div>
		</section>
	);
};

export default FifthCard;
