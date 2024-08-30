import React from 'react';
import bgCam from './../../assets/images/bg/cam.jpg';
import Image from 'next/image';
import SecondaryButton from '@/components/button/SecondaryButtonVTwon';
import ShadowElipse from '@/assets/card/Ellipse.svg';

import { IoCameraOutline } from 'react-icons/io5';

const Card = ({ title, description, icon }) => {
	return (
		<div className='sm:w-[420px] min-h-[420px] flex flex-col justify-center items-center gap-4 text-center px-[20px] pb-10'>
			<h2 className='w-full  text-[24px] text-[#2B2828] font-medium'>
				{title}
			</h2>
			<p className='w-full text-[18px] text-[#585858] font-medium'>
				{description}
			</p>
			<span className='text-black text-[4rem] mt-[24px]'> {icon}</span>
			<span className='w-full px-20 mb-[40px]'>
				<ShadowElipse />
			</span>
			<SecondaryButton
				cnContainer={'bg-[#000] w-[120px] sm:w-[160px] h-[32px] sm:h-[40px] '}
				cnText={' text-[12px] sm:text-[16px] text-[#fff]'}
				buttonText={'NOS CONTATE'}
				variantsText={{
					hidden: { color: '#fff' },
					visible: { color: '#fff' }
				}}
			/>
		</div>
	);
};

const CardCount = ({ value, title }) => {
	return (
		<div className='flex flex-col justify-center items-center gap-6'>
			<p className='text-[#000] text-[64px] '>{value}</p>
			{title}
		</div>
	);
};
const page = () => {
	const dataCard = [
		{ count: 52, title: 'PROJETOS FINALIZADOS' },
		{ count: 11, title: 'CLIENTES ATIVOS' },
		{ count: 284, title: 'CAFEZINOS TOMADOS' }
	];

	const categorys = [
		'produção audiovisual',
		'marketing digital',
		'videografia e fotografia',
		'mixagem e design de áudio',
		'desenvolvimento de jogos',
		'realidade aumentada e virtual'
	];

	const servicesData = [
		{
			name: 'Produção de Vídeos Corporativos',
			description:
				'Criação de vídeos promocionais e institucionais para empresas, com foco em comunicação visual e storytelling.',
			icon: '🎥',
			message: 'Transforme sua mensagem em vídeo com qualidade profissional.',
			category: 'produção audiovisual'
		},
		{
			name: 'Direção de Fotografia para Filmes',
			description:
				'Serviço de direção de fotografia para curtas, longas e documentários, garantindo a estética visual desejada.',
			icon: '🎬',
			message: 'Dê vida ao seu roteiro com imagens que falam por si.',
			category: 'videografia e fotografia'
		},
		{
			name: 'Mixagem e Masterização de Áudio',
			description:
				'Mixagem e masterização profissional para filmes, vídeos e música, garantindo a melhor qualidade sonora.',
			icon: '🎚️',
			message:
				'Ajuste o som ao nível de excelência para a melhor experiência auditiva.',
			category: 'mixagem e design de áudio'
		},
		{
			name: 'Desenvolvimento de Trilha Sonora para Jogos',
			description:
				'Criação de trilhas sonoras originais para jogos, adaptadas ao tema e à narrativa do game.',
			icon: '🎮',
			message:
				'Dê uma identidade única ao seu jogo com trilhas sonoras inesquecíveis.',
			category: 'desenvolvimento de jogos'
		},
		{
			name: 'Edição e Pós-Produção de Vídeos',
			description:
				'Edição avançada e pós-produção de vídeos com efeitos especiais, correção de cores e ajustes finais.',
			icon: '✂️',
			message: 'Transforme suas filmagens em produções visuais impactantes.',
			category: 'videografia e fotografia'
		},
		{
			name: 'Consultoria de Roteiro e Direção',
			description:
				'Apoio na criação e direção de roteiros para cinema, garantindo coerência narrativa e impacto emocional.',
			icon: '📝',
			message: 'Conte sua história de maneira envolvente e cativante.',
			category: 'videografia e fotografia'
		},
		{
			name: 'Design de Som para Filmes e Animações',
			description:
				'Criação de efeitos sonoros personalizados para filmes, animações e vídeos, enriquecendo a experiência do espectador.',
			icon: '🔊',
			message: 'Imersão sonora que dá vida às suas produções.',
			category: 'mixagem e design de áudio'
		},
		{
			name: 'Desenvolvimento de Jogos Interativos',
			description:
				'Criação de jogos interativos com design inovador e mecânicas de jogo cativantes, adaptados ao seu público.',
			icon: '🕹️',
			message: 'Crie mundos interativos que encantam e envolvem os jogadores.',
			category: 'desenvolvimento de jogos'
		}
	];

	const CategorySection = ({ category, data }) => {
		const categoryFilter = data?.filter((item) => item.category == category);

		if (categoryFilter.length == 0) return null;
		return (
			<div className='w-full flex flex-col text-center mb-20'>
				<p className='flex flex-col  items-center font-medium text-[20px] capitalize'>
					{category}
					<span className='min-w-[300px] bg-black h-[1px] mt-2 mb-10'></span>
				</p>
				<div className='w-full flex flex-wrap  justify-center'>
					{categoryFilter?.map((item, index) => (
						<Card
							icon={item.icon}
							description={item.description}
							title={item.name}
							key={item.title + index}
						/>
					))}
				</div>
			</div>
		);
	};

	return (
		<div className='w-full '>
			<div className='relative w-full max-h-[600px] h-[200px] flex items-center  overflow-hidden'>
				<Image src={bgCam} fill style={{ objectFit: 'cover' }} alt='a' />
			</div>

			<div className='min-h-[300px] py-6 w-full  flex flex-wrap justify-center gap-[60px] text-[30px] text-[#313131] font-medium border-b border-[#000]'>
				{dataCard?.map((data, index) => {
					return (
						<CardCount
							title={data.title}
							value={data.count}
							key={data.title + index}
						/>
					);
				})}
			</div>

			<div className='w-full text-center my-10 flex flex-col'>
				<h3 className='text-[#000] text-[32px] font-semibold mb-10'>
					Nossos Serviços
				</h3>
				<div className='w-full flex flex-col'>
					{categorys.map((category) => (
						<CategorySection
							category={category}
							data={servicesData}
							key={category}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
