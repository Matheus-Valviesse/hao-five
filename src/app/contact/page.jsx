import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import Shadow from '@/assets/Shadow.svg';
const App = () => {
	return (
		<div className='bg-white w-full h-full flex flex-col items-center justify-center px-6 pb-10 text-center'>
			<h1 className='text-4xl font-bold mb-10'>Vamos fechar seu projeto?</h1>
			<p className='font-light text-[#000] text-[22px]'>
				Gostariamo muito de fazer o seu projeto, veja comos nos encontrar:
			</p>
			<div className='grid  md:grid-cols-2 gap-10 mt-6'>
				<div className='bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center justify-center'>
					<h2 className='text-2xl font-bold mb-4'>
						Vamos falar do sue projeto
					</h2>
					<p className='text-gray-600 text-center mb-4'>
						Que tal você me contar exatamente o que você precisa? Tudo vai
						depender do seu projeto. O importante é saber o que você deseja
						alcançar, o tamanho do seu negócio, o público-alvo e seus recursos.
						Após agregarmos os pontos, podemos dar vida ao seu projeto.
					</p>
					<button className='bg-black hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline flex gap-2 transition-colors duration-300 mt-6'>
						<FaInstagram className='text-[24px]' />
						@haofive_
					</button>
					<span className='mt-6 w-[300px]'>
						<Shadow />
					</span>
				</div>
				<div className='bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center justify-center'>
					<h2 className='text-2xl font-bold mb-4'>
						Vamos falar do sue projeto
					</h2>
					<p className='text-gray-600 text-center mb-4'>
						Deixe comigo a parte da conectividade e dos serviços de automação. É
						a minha expertise. Ativa o seu negócio com uma infraestrutura de
						primeira, conectividade com altíssima performance e segurança
						online. Atraia um público maior e expanda seus negócios com as
						melhores oportunidades do mercado. Deixe-me te mostrar!
					</p>
					<button className='bg-black hover:hover:bg-gradient-to-r from-green-500 via-green-500 to-green-600   text-white font-semibold py-2 px-4  focus:outline-none focus:shadow-outline flex items-center gap-2 mt-6'>
						<FaWhatsapp className='text-[26px]' />
						21 99999 9999
					</button>{' '}
					<span className='mt-6 w-[300px]'>
						<Shadow />
					</span>
				</div>
			</div>
		</div>
	);
};

export default App;
