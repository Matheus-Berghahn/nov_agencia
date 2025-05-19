'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <header
      ref={ref}
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url('/bg-header.jpg')`
      }}
    >
      {/* Logo */}
      <motion.img
        src="/logo_branco.png"
        alt="Logo"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[40vw] xl:w-[35vw] mb-12 md:mb-16"
      />

      {/* Texto principal */}
      <div className="text-center font-semibold mb-4 text-[clamp(1.5rem,4vw,2.5rem)] leading-tight max-w-[90%]">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Não siga o fluxo, crie suas próprias ondas')
              .pauseFor(999999)
              .start()
          }}
          options={{
            autoStart: true,
            loop: false,
            delay: 30,
            cursor: ''
          }}
        />
      </div>

      {/* Subtexto */}
      <motion.p
        className="text-center text-[clamp(0.8rem,2vw,1.2rem)] leading-snug max-w-[90%] sm:max-w-[80%] md:max-w-xl mb-8 md:mb-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        A gente não quer só likes. Criamos conteúdo que emociona, conecta, representa e, de preferência, arranca um meu Deus, sou eu nesse post!
      </motion.p>

      <a
        href="https://wa.me/555193318332"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* CTA Button */}
        <motion.div
          className="overflow-hidden rounded-full bg-white text-[#0D2C7C] origin-center cursor-pointer hover:bg-[#EF7714] hover:text-[white]"
          initial={{ scaleX: 0 }}
          animate={
            isInView
              ? {
                  scaleX: 1,
                  scale: [1, 1.05, 1]
                }
              : {}
          }
          transition={{
            scaleX: { duration: 0.5, delay: 1.9, ease: 'easeInOut' },
            scale: {
              delay: 3.1,
              duration: 0.6,
              ease: 'easeInOut'
            }
          }}
        >
          <motion.button
            className="px-6 py-3 font-semibold rounded-full text-[clamp(0.9rem,2vw,1rem)] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2.6, duration: 0.5 }}
          >
            Bora conversar!
          </motion.button>
        </motion.div>
      </a>

    </header>
  )
}
