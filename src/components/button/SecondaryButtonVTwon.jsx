'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SecondaryButton = ({
	cnContainer,
	cnText,
	cnAnimation,
	buttonText,
	variantsText,
	btnColor
}) => {
	return (
		<motion.div
			className={cn(
				cnContainer,
				'relative  text-[18px] sm:text-[24px] font-bold overflow-hidden flex items-center justify-center cursor-pointer'
			)}
			initial='hidden'
			whileHover='visible'
			transition={{ duration: 0.3 }}
		>
			<motion.p
				className={cn(cnText, 'absolute z-20')}
				variants={
					variantsText
						? variantsText
						: {
								hidden: { color: '#000' },
								visible: { color: '#fff' }
						  }
				}
				transition={{ duration: 0.3 }}
			>
				{buttonText ? buttonText : 'DESCUBRA MAIS'}
			</motion.p>
			<motion.span
				className={cn(
					cnAnimation,
					`absolute bottom-0 right-0 w-full h-full ${
						btnColor == 'pink' ? 'bg-[#FF14FF]' : 'bg-[#00B4FF]'
					} origin-right z-10`
				)}
				variants={{
					hidden: { scaleX: 0.04 },
					visible: { scaleX: 1 }
				}}
				transition={{ duration: 0.3 }}
			/>
		</motion.div>
	);
};

export default SecondaryButton;
