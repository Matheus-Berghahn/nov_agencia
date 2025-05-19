'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const leftText = [
  'A NOV',
  'nasceu assim:',
  'no susto, com',
  'espumante',
  'e coragem.'
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 px-8 sm:px-16 lg:px-20 2xl:px-40 bg-[#f5f7ff] flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-32 lg:gap-5"
    >
      {/* Coluna da esquerda */}
      <div className="flex-2 text-[#0D2C7C] font-extrabold  leading-tight text-4xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        {leftText.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            className={line.includes('espumante') ? 'underline' : ''}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Coluna da direita */}
      <motion.div
        className="flex-1 max-w-2xl text-[#0D2C7C] font-semibold leading-relaxed space-y-6 text-xl lg:text-sm xl:text-lg 2xl:text-xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: leftText.length * 0.2 + 0.2 }}
      >
        <p>
          A gente já carregava informação de sobra, criatividade transbordando…
          só faltava aquele empurrãozinho (que, claro, veio).
        </p>
        <p>
          O resto foi a vontade genuína de fazer um marketing que conecta de
          verdade. Com intenção, emoção e pessoas por trás de cada post.
        </p>
        <p>
          Hoje, depois de muitos roteiros, gravações, briefings, brindes e “e se
          a gente testasse essa ideia?”, a gente entendeu: Nosso trabalho é
          contar histórias com verdade.
        </p>
      </motion.div>
    </section>
  )
}
