'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface FooterProps {
  isMobile: boolean
  isTabletVertical: boolean
}

export function Footer({ isMobile, isTabletVertical }: FooterProps) {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  }

  const actionButtonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)'
    },
    tap: { scale: 0.9 }
  }

  const activities = [
    {
      name: 'ACTIVITÉ 1',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      name: 'ACTIVITÉ 2',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      name: 'ACTIVITÉ 3',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" x2="9.01" y1="9" y2="9"></line>
          <line x1="15" x2="15.01" y1="9" y2="9"></line>
        </svg>
      )
    }
  ]

  return (
    <motion.footer
      className={cn(
        'flex items-center justify-around py-3 bg-transparent',
        isMobile || isTabletVertical ? 'absolute bottom-0 left-0 right-0' : ''
      )}
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      {activities.map((activity, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/80 h-10 w-10 mb-1"
            >
              {activity.icon}
            </Button>
          </motion.div>
          <motion.span
            className="text-[10px] text-white font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {activity.name}
          </motion.span>
        </motion.div>
      ))}

      {(isMobile || isTabletVertical) && (
        <motion.div
          className="absolute right-4 bottom-4"
          variants={actionButtonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            size="icon"
            className="rounded-full bg-red-500 hover:bg-red-600 h-12 w-12 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 180 }}
              transition={{
                duration: 0.5,
                repeat: 1,
                repeatType: 'reverse',
                repeatDelay: 2
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 5v14"></path>
                <path d="M5 12h14"></path>
              </svg>
            </motion.div>
          </Button>
        </motion.div>
      )}
    </motion.footer>
  )
}
