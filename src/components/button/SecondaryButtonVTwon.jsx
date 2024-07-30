'use client'
import React from 'react'
import { motion } from 'framer-motion'
const SecondaryButton = () => {
  return (
    <motion.div className='relative  w-[200px] h-[35px] sm:w-[260px] sm:h-[50px] bg-[#fff] text-[#000]   text-[18px] sm:text-[24px] font-bold overflow-hidden flex items-center justify-center cursor-pointer'      
      initial="hidden"
      whileHover="visible"
      transition={{ duration: 0.3 }}>
      <motion.p 
      className='absolute z-20'
 variants={{
          hidden: { color:'#000'},
          visible: {color:'#fff' },
        }}transition={{ duration: 0.3 }}
      >DESCUBRA MAIS </motion.p>
      <motion.span
        className="absolute bottom-0 right-0 w-full h-full bg-[#00B4FF] origin-right z-10"
        variants={{
          hidden: { scaleX: 0.04},
          visible: { scaleX: 1 },
        }}
        transition={{ duration: 0.3 }}
      /></motion.div>
  )
}

export default SecondaryButton