'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Dados dos cards
const cards = [
  {
    title: 'Gerenciamento de redes sociais',
    description: 'A gente posta, mas antes: pesquisa, pensa e planeja tudinho.',
    icon: '/icon_card_01.svg',
  },
  {
    title: 'Identidade visual',
    description: 'Mais do que bonito: precisa ser a sua cara.',
    icon: '/icon_card_02.svg',
  },
  {
    title: 'Foto e vídeo',
    description: 'A gente capta com olhar de quem quer mostrar o que você tem de mais especial.',
    icon: '/icon_card_03.svg',
  },
  {
    title: 'Tráfego pago',
    description: 'A gente estuda, testa e melhora com estratégia.',
    icon: '/icon_card_04.svg',
  },
  {
    title: 'Campanhas e artes',
    description: 'Estamos sempre online. Sério. Às vezes até demais.',
    icon: '/icon_card_05.svg',
  },
]

// Componente individual do card
function ServiceCard({ card, index }: { card: (typeof cards)[0]; index: number }) {
  const cardRef = useRef(null)
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isCardInView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        delay: 0.2 + index * 0.2,
        duration: 0.4,
        type: 'spring',
        stiffness: 200,
      }}
      className="bg-white text-[#0D2C7C] rounded-xl shadow-[6px_6px_0px_0px_#001A5C] p-8 flex flex-col items-center text-center h-[240px] w-[85%] md:w-[60%] lg:w-[30%] lg:h-[270px] xl:w-[25%] xl:h-[250px]"
    >
      <img src={card.icon} alt={card.title} className="w-10 h-10 mb-6" />
      <h3 className="font-bold text-xl mb-3">{card.title}</h3>
      <p className="text-base">{card.description}</p>
    </motion.div>
  )
}

// Componente principal
export default function WhatWeDo() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 })

  return (
    <section
      id="whatwedo"
      className="relative bg-white text-white pb-8 sm:pb-24 overflow-hidden overflow-x-hidden"
    >
      <div className="relative z-50 py-32 md:py-60 flex flex-col items-center px-4 text-center justify-items-center bg-[url('/bg-parallax.jpg')] bg-cover bg-center bg-no-repeat top-0 left-1/2 transform -translate-x-1/2 w-[350%] rounded-t-[50%] md:w-[250%] lg:w-[150%]">
        
        {/* Título com ref separado */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white">
            O que a gente faz
          </h2>
          <p className="text-xl sm:text-3xl lg:text-5xl font-normal text-white/80 mt-2 mb-10">(e ama fazer):</p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10 w-screen px-0 lg:px-[5%] pb-0 sm:pb-20">
          {cards.map((card, index) => (
            <ServiceCard key={card.title} card={card} index={index} />
          ))}
        </div>

        {/* Segunda parte */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-32 px-4 w-screen"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white">
            O que falam da gente
          </h2>
          <p className="text-xl sm:text-3xl lg:text-5xl font-normal text-white/80 mt-2 mb-0 md:mb-10">(e a gente fica toda boba):</p>
        </motion.div>

        {/* Cards de depoimento */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-6 px-4 md:px-10 mt-20 w-screen">
          {[
            'Eu falo uma coisa solta e elas transformam em conteúdo sensacional.”',
            'Elas entendem a gente como ninguém.”',
            'Depois que a NOV entrou, minha marca finalmente tem uma cara.”',
          ].map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.3 }}
              className="relative bg-[#001A5C] text-white rounded-br-4xl w-[90%] max-w-[480px] min-h-[180px] flex-grow p-6 pb-10 shadow-md"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3 + index * 0.3, duration: 0.4 }}
                className="absolute top-[-60px] left-2 text-[16rem] text-[#FF7A00] leading-none montserrat"
              >
                “
              </motion.span>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.4 + index * 0.3, duration: 0.4 }}
                className="text-white text-lg font-medium mt-10"
              >
                {quote}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
