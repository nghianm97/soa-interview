'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useResponsive } from '@/hooks/use-responsive'

export default function SectionEight() {
  const { isMobile } = useResponsive()

  return (
    <section
      className={`relative w-full ${isMobile ? 'h-[483px]' : 'h-[666px]'} overflow-hidden`}
    >
      {/* Background Image with subtle zoom effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <Image
          src={`/assets/fruit${isMobile ? '1' : ''}.svg`}
          alt="Fresh fruits and vegetables"
          width={1200}
          height={666}
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>

      {/* Content overlay with staggered animations */}
      <div
        className={`absolute inset-0 flex flex-col items-center  ${isMobile ? 'justify-center' : 'pt-[5em]'} text-center px-4 z-10`}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-mainColor mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Explorez Avec BASIC
        </motion.h2>

        <motion.h3
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#a99a9a] mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Dès Aujourd hui
        </motion.h3>

        <motion.p
          className={`max-w-xl text-center text-mainColor mb-8 ${isMobile ? 'text-[14px]' : 'text-[24px]'}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s,
        </motion.p>

        <motion.button
          className="bg-secondaryButton hover:bg-secondaryButton text-white px-10 py-2 rounded-full font-medium transition-colors"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.9,
            type: 'spring',
            stiffness: 200
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explorer
        </motion.button>
      </div>
    </section>
  )
}
