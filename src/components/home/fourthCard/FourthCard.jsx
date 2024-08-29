'use client';
import React, { useState, useCallback } from 'react';
import Coursel from './Coursel';

const FourthCard = () => {
	return (
		<section className='w-full flex flex-col justify-center items-center py-20 '>
			<h2 className='text-[#000] text-[48px] sm:text-[64px] font-semibold'>
				Nossa equipe
			</h2>
			<p className='text-[#555] text-[20px] sm:text-[24px] font-semibold max-w-[1000px] px-8 text-center '>
				Estamos empenhados em fornecer aos nossos clientes um serviço
				excepcional, ao mesmo tempo que oferecemos o nosso funcionários o melhor
				treinamento.
			</p>
			<Coursel />
		</section>
	);
};

export default FourthCard;
