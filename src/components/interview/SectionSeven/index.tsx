'use client'

import { Instagram, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useResponsive } from '@/hooks/use-responsive'

export function SectionSeven() {
  const { isMobile, isDesktop } = useResponsive()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  }

  const renderImg = [1, 2, 3, 4].map((i, index) => (
    <motion.div
      className="rounded-xl overflow-hidden relative group"
      variants={gridItemVariants}
      whileHover="hover"
      key={index}
    >
      <div className="bg-[#F8D7E3] aspect-square">
        <Image
          width={292}
          height={292}
          src={`/assets/image-fruit-${i}.png`}
          alt="Avocado"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-brownColor bg-opacity-80 text-white p-1.5 md:p-2 flex justify-between items-center">
        <div className="flex items-center">
          <Instagram className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
          <span className="text-xs md:text-sm">Anthony Durand</span>
        </div>
        <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
          <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
        </motion.div>
      </div>
    </motion.div>
  ))

  return (
    <motion.section
      className="bg-[#E6F4F4] w-full mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div
        className={`container max-w-7xl mx-auto ${isDesktop ? '' : 'px-5'} py-10`}
      >
        {/* Header section - responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8 items-center text-mainColor">
          {/* Left column - Text content that changes between mobile and desktop */}
          <motion.div
            className="order-2 lg:order-1 max-w-md"
            variants={itemVariants}
          >
            {/* Desktop text - hidden on mobile */}
            <p className="hidden lg:block leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            {/* Mobile text - hidden on desktop */}
            <p className="lg:hidden text-sm leading-relaxed">
              Partagez vos aventures et souvenirs exceptionnels vécus avec
              BASIC. Que ce soit une immersion en pleine nature, une activité
              audacieuse ou un instant t de calme, chaque moment mérite d être
              raconté. Utilisez{' '}
              <span className="text-mainColor font-bold">#BASIC</span> pour
              faire partie de notre communauté et inspirer d autres
              explorateurs.
            </p>
          </motion.div>

          {/* Right column on desktop, top on mobile - Heading */}
          <motion.div
            className="order-1 lg:order-2 lg:text-right"
            variants={itemVariants}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-mainColor">
              <span className="lg:hidden">
                IMMORTALISEZ DES
                <br />
                MOMENTS INOUBLIABLES
                <br />
                AVEC <span className="text-mainTextBlur">#BASIC</span>
              </span>
              <span className="hidden lg:inline">
                IMMORTALISEZ DES MOMENTS
                <br />
                INOUBLIABLES AVEC{' '}
                <span className="text-mainTextBlur">#BASIC</span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Featured image with caption */}

        <div
          className={`bg-[url(/assets/breakfast1.svg)] bg-cover bg-no-repeat ${isMobile ? 'p-3' : 'p-10'} flex items-center justify-center mb-10 rounded-2xl`}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-lg max-w-5xl w-full"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="relative">
              <Image
                src="/assets/breakfast.svg"
                alt="Fruit platter with various fruits and a measuring tape"
                width={1240}
                height={500}
                className="w-full h-full object-cover rounded-t-[1.5rem]"
              />
            </div>

            <div className="p-6 flex justify-between items-start w-full">
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-black-800">
                    La famille
                  </h2>
                  <div className="text-sm text-gray-700 border rounded-full p-2">
                    24 Sep 2024
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-1 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Four image grid - responsive from 2x2 on mobile to 4x1 on desktop */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8"
          variants={gridVariants}
        >
          {renderImg}
        </motion.div>

        {/* Bottom text */}
        <motion.div
          className="text-center text-xs md:text-base text-gray-700"
          variants={itemVariants}
        >
          Consultez @BASIC et{' '}
          <span className="text-mainTextBlur font-bold">#BASIC</span> pour
          découvrir les expériences inoubliables des pourvoires et activités
          BASIC.
        </motion.div>
      </div>
    </motion.section>
  )
}
