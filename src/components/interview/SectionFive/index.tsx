/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useResponsive } from '@/hooks/use-responsive'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Button } from '@/components/ui/button'

// Define the type for our slide data
type SlideItem = {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
}

// Sample data array with 8 items
export const SLIDE_DATA: SlideItem[] = [
  {
    id: 1,
    image: '/assets/section-51.png',
    title: 'Case title',
    subtitle: 'Case sous-titre',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    image: '/assets/section-52.png',
    title: 'Case title',
    subtitle: 'Case sous-titre',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 3,
    image: '/assets/section-54.png',
    title: 'Case title',
    subtitle: 'Case sous-titre',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 4,
    image: '/assets/section-55.png',
    title: 'Case title',
    subtitle: 'Case sous-titre',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 5,
    image: '/assets/section-51.png',
    title: 'Case title',
    subtitle: 'Case sous-titre',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 6,
    image: '/assets/section-52.png',
    title: 'Case title',
    subtitle: 'Case sous-titre',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 7,
    image: '/assets/section-54.png',
    title: 'Case title',
    subtitle: 'Case sous-titre',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 8,
    image: '/assets/section-55.png',
    title: 'Case title',
    subtitle: 'Case sous-titre',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
]

const slideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
}

// Animation variants for the image
const imageVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
}

export default function SectionFive() {
  const { isMobile, isTabletHorizontal, isDesktop } = useResponsive()
  const [isAutoplay, _setIsAutoplay] = useState(true)

  return (
    <div className="mb-10">
      <section className={`w-full mx-auto px-4 md:px-8`}>
        <div className={`container max-w-7xl mx-auto`}>
          <div
            className={`relative flex ${isMobile ? 'justify-center' : 'justify-between'} items-center w-full`}
          >
            <motion.h2
              // className="text-secondaryButton text-3xl font-bold relative z-10 bg-white px-8"
              className={`text-secondaryButton uppercase z-20 bg-white font-semibold ${isDesktop ? 'text-[52px]' : isMobile ? 'text-[24px]' : isTabletHorizontal ? 'text-[40px]' : 'text-[32px]'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Titre
            </motion.h2>
            <a
              href="#"
              className={`text-[20px] flex items-center text-gray-600 hover:text-secondaryButton transition-colors border-b-[1px] border-gray-400 ${isMobile ? 'hidden' : ''}`}
            >
              En Savoir Plus <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
      <section className={`${isMobile ? 'pt-6 pb-12' : 'py-12'} relative`}>
        <div
          className={`${isMobile ? 'pl-4' : isTabletHorizontal ? 'pl-[25vw]' : isDesktop ? 'pl-[25vw]' : 'pl-[15vw]'} pr-0 w-full`}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={'auto'}
            spaceBetween={isMobile ? 20 : 40}
            speed={800}
            autoplay={
              isAutoplay
                ? {
                    delay: 1500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }
                : false
            }
            grabCursor={true}
            className="mySwiper"
          >
            <AnimatePresence>
              {SLIDE_DATA.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: isMobile ? '200px' : '300px' }}
                >
                  <motion.div
                    className="h-full flex flex-col cursor-pointer"
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover="hover"
                    custom={index}
                    layoutId={`slide-${item.id}`}
                  >
                    {/* <motion.div variants={imageVariants} className={`relative ${isDesktop ? "h-[340px]" : "h-[200px]"} w-full mb-4 overflow-hidden rounded-2xl`}>
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </motion.div> */}

                    <motion.div
                      className={`relative ${isMobile ? 'h-[200px]' : 'h-[300px]'} w-full mb-4 overflow-hidden rounded-2xl`}
                      whileHover="hover"
                    >
                      <motion.div
                        className="w-full h-full"
                        variants={imageVariants}
                      >
                        <Image
                          src={item.image || '/placeholder.svg'}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                    <div className="flex flex-col items-start">
                      <h3 className="text-secondaryButton text-xl mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-[28px] font-medium mb-2">
                        {item.subtitle}
                      </h4>
                      <p className="text-[18px] text-mainColor line-clamp-3 text-left px-3 mx-3 border-l-[1px]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </AnimatePresence>
          </Swiper>
        </div>
      </section>
      {isMobile && (
        <div
          className={`flex ${isMobile ? 'justify-center' : 'justify-end'} space-x-4 pt-4`}
        >
          <Button
            type="submit"
            className="w-[95%] bg-secondaryButton hover:bg-secondaryButton text-white rounded-full px-10 py-[16px] !text-lg"
          >
            En savoir plus
            <Image
              src="/assets/white-arrow.svg"
              alt="sent-2"
              width={20}
              height={20}
            />
          </Button>
        </div>
      )}
    </div>
  )
}
