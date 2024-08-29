'use client';
import Logo from '@/assets/Logo 1.svg';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
	const pathName = usePathname();
	const headerLinks = [
		{ name: 'Home', path: '/' },
		// { name: 'Sobre nós', path: '/about' },
		// { name: 'Projetos', path: '/projects' },
		// { name: 'Serviços', path: '/services' },
		{ name: 'Contato', path: '/contact' }
	];

	return (
		<header className='hidden w-full h-[60px] px-[20px] md:px-[60px] bg-[#fff] sm:flex flex-row justify-between items-center'>
			<span className='w-[200px] cursor-pointer'>
				<Logo className='-mt-2' />
			</span>
			<ul className='flex flex-row gap-x-[12px] md:gap-x-[24px] text-[#1C1C1C] text-[16px] font-medium'>
				{headerLinks.map((li, i) => {
					const isActive = pathName === li.path;

					return (
						<LIs
							text={li.name}
							key={li.name + i}
							linkPath={li.path}
							isActive={isActive}
						/>
					);
				})}
			</ul>
		</header>
	);
};
function LIs({ text, linkPath, isActive }) {
	return (
		<motion.li
			className={`relative cursor-pointer`}
			initial='hidden'
			whileHover='visible'
			transition={{ duration: 0.3 }}
		>
			{isActive ? (
				<span>
					{text}
					<motion.span
						className='absolute bottom-0 left-0 w-full h-[4px] bg-[#FF14FF] origin-left'
						variants={{
							hidden: { scaleX: 1 },
							visible: { scaleX: 1 }
						}}
					/>
				</span>
			) : (
				<Link href={linkPath}>
					<span>
						{text}
						<motion.span
							className='absolute bottom-0 left-0 w-full h-[4px] bg-[#FF14FF] origin-left'
							variants={{
								hidden: { scaleX: 0 },
								visible: { scaleX: 1 }
							}}
						/>
					</span>
				</Link>
			)}
		</motion.li>
	);
}
export default Header;
