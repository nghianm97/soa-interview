'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useResponsive } from '@/hooks/use-responsive'

type IProperties = {
  category: string
  cta: string
  description: string
  tagline: string
  imageSrc: string
}

type IProps = {
  cases?: IProperties[]
  subtitle?: string
  title?: string
}

type IData = {
  data: IProps
}

const Card = ({
  imageSrc,
  category,
  cta,
  description,
  tagline
}: IProperties) => {
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
          alt={category}
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
          {category}
        </span>
        <h3 className="text-mainColor text-2xl font-medium mb-2">{cta}</h3>
        <p className="text-[18px] text-sm mb-4 line-clamp-2">{description}</p>

        <motion.button
          className="text-[18px] flex items-center text-mainColor text-sm font-medium w-fit border border-mainColor rounded-full px-4 py-2"
          whileHover={{ backgroundColor: 'rgba(255, 99, 71, 0.05)' }}
          whileTap={{ scale: 0.98 }}
        >
          {tagline}
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

export default function SectionTwo(props: IData) {
  const { cases, subtitle, title } = props.data
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

  // const cards: IProperties[] = [
  //   {
  //     imageSrc: '/assets/section-21.svg',
  //     category: 'Case Title',
  //     cta: 'Case sous-titre',
  //     description:
  //       'Chaque sentier vous conduit à des panoramas époustouflants, chaque instant est une nouvelle découverte qui vous émerveillera.',
  //     tagline: 1
  //   },
  //   {
  //     imageSrc: '/assets/section-22.svg',
  //     category: 'Case Title',
  //     cta: 'Case sous-titre',
  //     description:
  //       "Chez BASIC, la pêche est une alliance entre passion et respect. Imaginez des lacs paisibles où le temps semble s'arrêter.",
  //     tagline: 2
  //   },
  //   {
  //     imageSrc: '/assets/section-23.svg',
  //     category: 'Case Title',
  //     cta: 'Case sous-titre',
  //     description:
  //       'BASIC vous guide à travers des territoires authentiques, où la chasse est une quête de connexion avec la nature sauvage.',
  //     tagline: 3
  //   }
  // ]

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
              {title}
            </motion.h2>
          </div>

          <motion.p
            className="text-[20px] text-mainColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          ref={cardsContainerRef}
          className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {cases &&
            cases.map((card, index) => (
              <Card
                key={index}
                imageSrc={`/assets/section-2${index + 1}.svg`}
                category={card.category}
                cta={card.cta}
                description={card.description}
                tagline={card.tagline}
              />
            ))}
        </motion.div>
      </div>
    </section>
  )
}
