'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, User } from 'lucide-react'
import Image from 'next/image'
import { useResponsive } from '@/hooks/use-responsive'
import { LanguageSwitcher } from '../language-switcher'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { isMobile, isTabletVertical, isTabletHorizontal, isDesktop } =
    useResponsive()
  const { t } = useTranslation()
  // Header variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  }

  // Logo variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  }

  // Nav item variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.1,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  }

  // Icon variants
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.1,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.9 }
  }

  // Button variants
  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: 'rgba(255, 99, 71, 0.9)',
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-[#562C2CB2]/70 backdrop-blur-sm text-white"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[1300px] w-full flex items-center justify-between mx-auto">
        <motion.div
          className="text-sm md:text-lg font-bold"
          variants={logoVariants}
          whileHover="hover"
        >
          {t('logo_sample')}
        </motion.div>

        <AnimatePresence mode="wait">
          {(isDesktop || isTabletHorizontal) && (
            <motion.nav
              className="flex space-x-4 md:space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {['Titre 1', 'Titre 2', 'Titre 3', 'Titre 4'].map(
                (title, index) => (
                  <motion.div
                    key={index}
                    variants={navItemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    custom={index}
                    className={`flex-1 ${isDesktop && index === 1 ? '!ml-[90px]' : isDesktop && index === 2 ? '!ml-[60px]' : isDesktop && index === 3 ? '!ml-[30px]' : ''}`}
                  >
                    <Link
                      href="#"
                      className={`hover:text-gray-200 transition-colors whitespace-nowrap`}
                    >
                      {title}
                    </Link>
                  </motion.div>
                )
              )}
            </motion.nav>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isDesktop && (
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LanguageSwitcher />
              <motion.div
                className="icon-item"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image
                  src="/assets/mountains-white.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="text-white cursor-pointer fill-white"
                />
              </motion.div>
              <motion.div
                className="icon-item"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image
                  src="/assets/fish-white.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="text-white cursor-pointer"
                />
              </motion.div>
              <motion.div
                className="icon-item"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image
                  src="/assets/vector-white.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="text-white cursor-pointer"
                />
              </motion.div>
              <motion.div
                className="flex items-center justify-center w-8 h-8 rounded-full bg-secondaryButton cursor-pointer icon-item"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image
                  src="/assets/arrow-white.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="text-white cursor-pointer"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isTabletHorizontal && (
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div className="flex items-center space-x-6">
                <LanguageSwitcher />
                <motion.div
                  className="icon-item"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Image
                    src="/assets/mountains-white.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="text-white cursor-pointer"
                  />
                </motion.div>
                <motion.div
                  className="icon-item"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Image
                    src="/assets/fish-white.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="text-white cursor-pointer"
                  />
                </motion.div>
                <motion.div
                  className="icon-item"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Image
                    src="/assets/vector-white.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="text-white cursor-pointer"
                  />
                </motion.div>
                <motion.div
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-secondaryButton cursor-pointer icon-item"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <User size={14} className="text-white" />
                </motion.div>
              </motion.div>

              <motion.button
                className="bg-secondaryButton hover:bg-secondaryButton/90 text-white text-xs rounded-full px-4 py-1 h-auto contact-btn"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contactez-Nous
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {(isMobile || isTabletVertical) && (
            <motion.div
              className="cursor-pointer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Menu size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
