'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import i18n from '@/i18n'
import toast from 'react-hot-toast'

type Language = 'en' | 'fr'

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>('en')
  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const changeLanguage = async (newLanguage: Language) => {
    await i18n.changeLanguage(newLanguage)
    toast.success(t('change_message_success', { lng: newLanguage }))
    setLanguage(newLanguage)
    localStorage.setItem('i18nextLng', newLanguage)
    setIsOpen(false)
  }

  const renderLanguageButton = ['en', 'fr'].map((lng) => (
    <button
      key={lng}
      className={`w-full text-left px-3 py-2 text-sm rounded-sm ${
        language === lng
          ? 'bg-secondaryButton text-white font-medium'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
      onClick={() => changeLanguage(lng as Language)}
    >
      {lng.toUpperCase()}
    </button>
  ))

  return (
    <div className="relative">
      <motion.button
        className="flex items-center space-x-1 bg-transparent text-white hover:text-gray-200 focus:outline-none"
        onClick={toggleDropdown}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {language === 'en' ? 'EN' : 'FR'}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-10"
          >
            <div className="p-1">{renderLanguageButton}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
