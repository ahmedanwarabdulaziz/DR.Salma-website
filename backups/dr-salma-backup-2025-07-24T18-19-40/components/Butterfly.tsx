'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface ButterflyProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'pink' | 'green' | 'mixed'
  className?: string
  delay?: number
}

const Butterfly: React.FC<ButterflyProps> = ({ 
  size = 'md', 
  color = 'pink', 
  className = '',
  delay = 0 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const colorClasses = {
    pink: 'text-primary-pink/60',
    green: 'text-primary-green/60',
    mixed: 'text-primary-pink/40'
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
    >
      <Sparkles className="w-full h-full" />
    </motion.div>
  )
}

export default Butterfly 