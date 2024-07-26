'use client'
import React from 'react'
import { motion } from 'framer-motion'
const SecondaryButton = () => {
  return (
    <motion.div className='relative w-[150px] h-[40px] bg-[#000f] text-[#fff] text-[14px] font-bold overflow-hidden flex items-center justify-center cursor-pointer'      
      initial="hidden"
      whileHover="visible"
      transition={{ duration: 0.6 }}>
      <p className='absolute z-20'>DESCUBRA MAIS </p>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-full bg-[#FF14FF] origin-left z-10"
        variants={{
          hidden: { scaleX: 0.04},
          visible: { scaleX: 1 },
        }}transition={{ duration: 0.3 }}
      /></motion.div>
  )
}

export default SecondaryButton