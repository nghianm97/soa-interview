'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
        delay: delay
      }}
    >
      {children}
    </motion.div>
  )
}
