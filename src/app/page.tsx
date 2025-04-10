/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { Footer } from '@/components/interview/Footer'
import Header from '@/components/interview/Header'
import { ScrollReveal } from '@/components/interview/scroll-reveal'
import SectionEight from '@/components/interview/SectionEight'
import SectionFive from '@/components/interview/SectionFive'
import SectionFour from '@/components/interview/SectionFour'
import SectionOne from '@/components/interview/SectionOne'
import { SectionSeven } from '@/components/interview/SectionSeven'
import { SectionSix } from '@/components/interview/SectionSix'
import { SectionThree } from '@/components/interview/SectionThree'
import SectionTwo from '@/components/interview/SectionTwo'
import { getMultiLanguage } from '@/services/interview'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<any>([])

  const { i18n } = useTranslation()

  const getDataMultiLanguage = async (lng: string) => {
    await getMultiLanguage(lng).then((res) => {
      setData(res.data[0])
    })
  }

  useEffect(() => {
    // Gọi API lần đầu
    getDataMultiLanguage(i18n.language)

    // Lắng nghe thay đổi ngôn ngữ
    const onLanguageChanged = (lng: string) => {
      getDataMultiLanguage(lng)
    }

    i18n.on('languageChanged', onLanguageChanged)

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000)

    return () => {
      i18n.off('languageChanged', onLanguageChanged)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.2, 1],
              opacity: 1
            }}
            transition={{
              duration: 0.8,
              times: [0, 0.5, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse'
            }}
            className="w-16 h-16 rounded-full bg-primaryButton"
          />
        </motion.div>
      ) : (
        <motion.main
          key="main"
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <ScrollReveal>
            <SectionOne />
          </ScrollReveal>

          <ScrollReveal>
            <SectionTwo data={data?.bloc_1} />
          </ScrollReveal>

          <ScrollReveal>
            <SectionThree />
          </ScrollReveal>

          <ScrollReveal>
            <SectionFour />
          </ScrollReveal>

          <ScrollReveal>
            <SectionFive />
          </ScrollReveal>

          <ScrollReveal>
            <SectionSix />
          </ScrollReveal>

          <ScrollReveal>
            <SectionSeven />
          </ScrollReveal>

          <ScrollReveal>
            <SectionEight />
          </ScrollReveal>
          <Footer data={data} />
        </motion.main>
      )}
    </AnimatePresence>
  )
}
