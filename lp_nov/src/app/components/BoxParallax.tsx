'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function BoxParallax() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) // dispara uma vez
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const dots = [0, 1, 2]

  return (
    <div
      
      className="relative h-[35vh] md:h-[60vh] bg-[url('/bg-parallax.jpg')] bg-cover bg-center bg-scroll md:bg-fixed flex items-center justify-center px-8"
    >
      {/* Bolinhas animadas */}
      <div className="absolute top-8 left-8 md:top-16 md:left-16 flex gap-2">
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            className="w-6 h-6 rounded-full bg-orange-400"
            initial={{ y: 0 }}
            animate={controls}
            variants={{
              visible: {
                y: [0, -8, 0],
                transition: {
                  delay: index * 0.2,
                  duration: 0.6,
                  repeat: 3,
                  repeatType: 'loop',
                  ease: 'easeInOut'
                }
              }
            }}
          />
        ))}
      </div>

      {/* Texto com animação de baixo pra cima */}
      <div 
      ref={ref}
      className="text-white text-center space-y-2">
        <motion.h2
          className="text-xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-light pb-[1%] md:pb-[2%]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        >
          Marketing também é sentir.
        </motion.h2>
        <motion.p
          className="text-sm sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        >
          Se não toca ninguém, não vale o post.
        </motion.p>
      </div>
    </div>
  )
}
