'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

import { useRef } from 'react'
import { useResponsive } from '@/hooks/use-responsive'

export default function SectionOne() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { isMobile, isTabletVertical, isDesktop } = useResponsive()

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6])

  // Section variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }

  // Camera button variants
  const cameraButtonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: '0 0 15px rgba(255, 99, 71, 0.7)',
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  }

  return (
    <motion.section
      ref={sectionRef}
      className={`relative w-full ${isMobile || isTabletVertical ? 'h-[812px]' : isDesktop ? 'h-[1080px]' : 'h-[834px]'} overflow-hidden`}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <Image
          src={'/assets/hero-banner.svg'}
          alt="Healthy food with fruits"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* <motion.div className="absolute inset-0 z-10 flex flex-col justify-between">
        <div className="flex-grow" />

        <AnimatePresence mode="wait">
          {isDesktop ? (
            <motion.div
              className="flex justify-center space-x-16 mb-8"
              variants={iconContainerVariants}
              key="desktop-icons"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="p-3 bg-white/20 backdrop-blur-md rounded-full cursor-pointer nav-icon-container"
                variants={desktopIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Camera size={24} className="text-red" />
              </motion.div>

              <motion.div
                className="p-3 bg-white/20 backdrop-blur-md rounded-full cursor-pointer nav-icon-container"
                variants={desktopIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Copy size={24} className="text-red" />
              </motion.div>

              <motion.div
                className="p-3 bg-white/20 backdrop-blur-md rounded-full cursor-pointer nav-icon-container"
                variants={desktopIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Settings size={24} className="text-red" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="flex justify-around items-center mb-[80px]"
              variants={iconContainerVariants}
              key="mobile-icons"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="flex flex-col items-center nav-icon-container"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Camera size={20} className="text-white mb-1" />
                <motion.span
                  className="text-white text-xs uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Activité 1
                </motion.span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center nav-icon-container"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Copy size={20} className="text-white mb-1" />
                <motion.span
                  className="text-white text-xs uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Activité 2
                </motion.span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center nav-icon-container"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Settings size={20} className="text-white mb-1" />
                <motion.span
                  className="text-white text-xs uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Activité 3
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div> */}

      {/* Nút camera được gắn cố định ở góc cuối của SectionOne */}
      <motion.div
        className="absolute bottom-8 right-8 p-3 bg-secondaryButton rounded-full cursor-pointer z-20 camera-btn"
        variants={cameraButtonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      >
        <Image
          src="/assets/chat-icon.svg"
          width={isMobile ? 15 : 21}
          height={isMobile ? 14 : 20}
          alt=""
          className="text-white cursor-pointer"
        />
      </motion.div>
    </motion.section>
  )
}
