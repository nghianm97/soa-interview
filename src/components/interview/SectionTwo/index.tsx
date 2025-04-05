'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useResponsive } from '@/hooks/use-responsive'

interface CardProps {
  imageSrc: string
  title: string
  subtitle: string
  description: string
  forfaitNumber: number
}

const Card = ({
  imageSrc,
  title,
  subtitle,
  description,
  forfaitNumber
}: CardProps) => {
  const { isMobile, isTabletHorizontal, isDesktop } = useResponsive()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="flex flex-col w-full "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative w-full ${isDesktop ? 'h-[397px]' : isMobile ? 'h-[200px]' : isTabletHorizontal ? 'h-[355px]' : 'h-[240px]'} overflow-hidden rounded-lg mb-4`}
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Image
          src={imageSrc || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="flex flex-col"
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          delay: 0.05
        }}
      >
        <span className="text-secondaryButton text-[18px] font-medium mb-1">
          {title}
        </span>
        <h3 className="text-mainColor text-2xl font-medium mb-2">{subtitle}</h3>
        <p className="text-[18px] text-sm mb-4 line-clamp-2">{description}</p>

        <motion.button
          className="text-[18px] flex items-center text-mainColor text-sm font-medium w-fit border border-mainColor rounded-full px-4 py-2"
          whileHover={{ backgroundColor: 'rgba(255, 99, 71, 0.05)' }}
          whileTap={{ scale: 0.98 }}
        >
          Forfait {forfaitNumber}{' '}
          <Image
            src="/assets/ArrowUpRight.svg"
            width={20}
            height={20}
            className="ml-2 text-greenArrow"
            alt=""
          />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default function SectionTwo() {
  const { isMobile, isTabletHorizontal, isDesktop } = useResponsive()
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [lineWidth, setLineWidth] = useState(0)

  // Update line width when container width changes
  useEffect(() => {
    const updateLineWidth = () => {
      if (cardsContainerRef.current) {
        setLineWidth(cardsContainerRef.current.offsetWidth)
      }
    }

    // Initial update
    updateLineWidth()

    // Update on resize
    window.addEventListener('resize', updateLineWidth)
    return () => window.removeEventListener('resize', updateLineWidth)
  }, [])

  const cards: CardProps[] = [
    {
      imageSrc: '/assets/section-21.svg',
      title: 'Case Title',
      subtitle: 'Case sous-titre',
      description:
        'Chaque sentier vous conduit à des panoramas époustouflants, chaque instant est une nouvelle découverte qui vous émerveillera.',
      forfaitNumber: 1
    },
    {
      imageSrc: '/assets/section-22.svg',
      title: 'Case Title',
      subtitle: 'Case sous-titre',
      description:
        "Chez BASIC, la pêche est une alliance entre passion et respect. Imaginez des lacs paisibles où le temps semble s'arrêter.",
      forfaitNumber: 2
    },
    {
      imageSrc: '/assets/section-23.svg',
      title: 'Case Title',
      subtitle: 'Case sous-titre',
      description:
        'BASIC vous guide à travers des territoires authentiques, où la chasse est une quête de connexion avec la nature sauvage.',
      forfaitNumber: 3
    }
  ]

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col items-center ${isMobile ? 'mb-8' : 'mb-16'} `}
        >
          <div className="relative flex items-center justify-center w-full mb-2">
            <div
              className={`absolute h-[2px] bg-gray-300 ${isMobile ? 'hidden' : ''}`}
              style={{
                left: `calc(50% - ${lineWidth / 2}px)`,
                width: lineWidth,
                top: '50%'
              }}
            />
            <motion.h2
              // className="text-secondaryButton text-3xl font-bold relative z-10 bg-white px-8"
              className={`text-secondaryButton z-20 bg-white font-semibold px-8 ${isDesktop ? 'text-[52px]' : isMobile ? 'text-[24px]' : isTabletHorizontal ? 'text-[40px]' : 'text-[32px]'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              TITRE BLOC 1
            </motion.h2>
          </div>

          <motion.p
            className="text-[20px] text-mainColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sous-titre Bloc 1
          </motion.p>
        </div>

        <motion.div
          ref={cardsContainerRef}
          className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              forfaitNumber={card.forfaitNumber}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
