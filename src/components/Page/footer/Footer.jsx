import React from 'react';
import Logo from '@/assets/Logo 1.svg';

const Footer = () => {
	return (
		<div className='bg-[#101010] py-8 w-full flex flex-col gap-4 sm:gap-8 text-[#CACACA] overflow-hidden relative'>
			<div className='absolute w-[320px] h-[320px] border-solid border-[26px] border-[#fff20] opacity-10 rotate-45 -ml-[200px] sm:ml-0'>
				{' '}
			</div>
			<div className='absolute w-[220px] h-[220px] border-solid border-[12px] border-[#fff20] opacity-10 -rotate-45 self-end sm:mr-[200px]'>
				{' '}
			</div>
			<div className='flex gap-10 justify-center font-light text-[10px] sm:text-[12px]'>
				<div>
					<h3 className='font-semibold text-[#fff]'>CONTATO</h3>
					<p>atuamos na cidade do rio de janeiro - rj</p>
					<p>21 99999-9999</p>
					<p>havofive@sla.com</p>
				</div>
				<div>
					<h3 className='font-semibold text-[#fff]'>SOCIAL</h3>
					<p>21 99999-9999</p>
					<p>@hao_five</p>
				</div>
			</div>

			<div className=' flex flex-col justify-center items-center w-full text-center '>
				<div className='max-w-[90vw] w-full h-[1px] bg-[#CACACA]'></div>
				<span className='text-[12px] sm:text-[14px] font-light mt-2'>
					© COPYRIGHT 2024 by{' '}
					<span className='font-semibold text-[#fff]'>HAOFIVE</span>
				</span>
			</div>
		</div>
	);
};

export default Footer;
