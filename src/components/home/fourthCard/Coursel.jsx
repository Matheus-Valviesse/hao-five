import React, { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import Image from 'next/image';
import c from '@/assets/captura.png';
import SecondaryButton from '@/components/button/SecondaryButtonVTwon';

const PersonCard = ({ name, role, index, color }) => {
	return (
		<CarouselItem
			key={index * 1}
			className='overflow-hidden md:basis-1/2 lg:basis-1/3'
		>
			<motion.div
				initial='hidden'
				whileHover='visible'
				className='w-full h-full cursor-pointer relative'
			>
				<span className='max-h-[280px] h-[280px] w-full flex relative  '>
					<motion.div
						className='absolute self-end z-20 mb-5 ml-5 '
						variants={{
							hidden: { x: -10, opacity: 0 },
							visible: { x: 0, opacity: 1 }
						}}
						transition={{ duration: 0.2 }}
					>
						<SecondaryButton
							cnContainer={
								'bg-[#000] w-[80px] sm:w-[100px] h-[24px] sm:h-[32px] '
							}
							cnText={'text-[12px] text-[#fff]'}
							buttonText={'CONHEÇA'}
							variantsText={{
								hidden: { color: '#fff' },
								visible: { color: '#fff' }
							}}
							btnColor={color}
						/>
					</motion.div>
					<motion.div
						variants={{
							hidden: { scaleY: 0 },
							visible: { scaleY: 1 }
						}}
						transition={{ duration: 0.2 }}
						className={`bg-gradient-to-t ${
							color == 'pink' ? 'from-[#FF14FF]' : 'from-[#00B4FF]'
						} w-full h-[40vh] absolute z-10 self-end origin-bottom opacity-30`}
					></motion.div>
					<Image
						src={c}
						fill
						style={{ objectFit: 'cover' }}
						alt='a'
						className='filter grayscale'
					/>
				</span>
				<div className='mt-2 flex flex-col gap-1'>
					<h3 className='text-[#2F2F2F] font-semibold text-[18px]'>
						{name ? name : 'Fulano Aleatorio'}
					</h3>
					<p className='text-[#2F2F2F] font-semibold text-[12px]'>
						{role ? role : 'Cargo do Fulano'}
					</p>
					<div className='bg-[#2F2F2F] w-full h-[1px]'></div>
				</div>
			</motion.div>
		</CarouselItem>
	);
};

const Coursel = () => {
	const [personCard, setPerasonCard] = useState(0);
	const persons = [
		{
			id: 1,
			name: 'Pamela Ohnitram',
			role: 'Coordenadora de Tecnologia',
			description: '',
			tags: [],
			color: 'pink'
		},
		{
			id: 5,
			name: 'Giovan Bueno',
			role: 'Diretor de Cenógrafia',
			description: '',
			tags: [],
			color: 'blue'
		},
		{
			id: 3,
			name: 'Aryel Quintela',
			role: 'Head Marketing',
			description: '',
			tags: [],
			color: 'pink'
		},
		{
			id: 2,
			name: 'Luciana Ribeiro',
			role: 'Designer Gráfico',
			description: '',
			tags: [],
			color: 'pink'
		},

		{
			id: 4,
			name: 'Letícia Alves',
			role: 'Head Comercial',
			description: '',
			tags: [],
			color: 'pink'
		}
	];

	return (
		<div className='w-full flex justify-center mt-10 '>
			<Carousel
				opts={{
					align: 'start'
				}}
				className=' max-w-[300px] sm:max-w-[520px] lg:max-w-[1000px]'
			>
				<CarouselContent>
					{persons.map((data, index) => (
						<PersonCard
							color={data.color}
							index={index}
							key={index}
							name={data.name}
							role={data.role}
						/>
					))}
				</CarouselContent>
				<CarouselPrevious className='bg-black text-white hover:bg-slate-500 hover:text-white' />
				<CarouselNext className='bg-black text-white hover:bg-slate-500 hover:text-white' />
			</Carousel>
		</div>
	);
};

export default Coursel;
