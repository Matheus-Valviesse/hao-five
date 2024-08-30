import React from 'react';
import haoProd from './../../assets/images/bg/hao-prod.jpg';
import Wave from '@/assets/images/decoretor/wave.svg';

const page = () => {
	return (
		<section>
			<div className=' relative overflow-hidden'>
				<span className='absolute w-full '>
					<Wave className='rotate-[180deg] w-[120%] clear-start text-[#00B4FF] sm:-mt-40 lg:-mt-60' />
				</span>

				<span className='absolute w-full h-full flex'>
					<Wave className='w-[120%] clear-start text-[#FF14FF] justify-self-end self-end md:-mb-20  lg:-mt-[120px]' />
				</span>

				<div className='py-[100px] px-4 sm:px-20 '>
					<div className='flex flex-col gap-y-10 px-6 sm:px-20 py-10 z-20 relative backdrop-blur-md bg-white/30  rounded-lg'>
						<h1 className='text-[18px] sm:text-[26px] font-bold'>
							Hǎo Five: Onde a Inovação Encontra a Criatividade para Conectar
							Marcas ao Futuro
						</h1>
						<p className='text-[14px] sm:text-[18px] font-medium'>
							Bem-vindo à Hǎo Five, especialista em produção audiovisual,
							cinema, som e jogos. Conectamos marcas ao futuro com soluções
							criativas e inovadoras em marketing digital para pequenas e médias
							empresas. Transformamos ideias em realidade, criando vídeos
							corporativos, trilhas sonoras, mixagem de áudio e conteúdos
							interativos que elevam a presença de marca e engajam o público.
							Somos parceiros estratégicos, unindo tecnologia e criatividade
							para entregar resultados que destacam marcas no mercado.
							<br />
							<br />
							Com foco em inovação e excelência, impulsionamos negócios,
							conectando-os a novas oportunidades e a um público mais engajado.
							Na Hǎo Five, cada projeto é uma chance de inspirar, crescer e se
							destacar.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
