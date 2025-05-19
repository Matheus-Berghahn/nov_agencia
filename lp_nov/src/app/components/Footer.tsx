'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import celular from '../../../public/celular.png'
import logo from '../../../public/logo_azul.png'

export default function Footer() {
  return (
    <footer className="relative bg-white w-full py-10 sm:py-16 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative flex flex-col-reverse sm:flex-row items-center justify-center gap-0 lg:gap-10 max-w-7xl ">

        {/* CTA com animação forçada */}
        <div className="relative sm:absolute sm:top-3/6 md:top-3/6 lg:top-3/5 right-0 sm:right-5 w-[90%] overflow-x-hidden mt-6 flex items-center justify-center sm:justify-end cursor-pointer">
          <motion.div
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full rounded-full bg-[#002D9B] py-5 sm:py-10 px-8 sm:px-4 relative cursor-pointer z-20 hover:bg-[#EF7714]"
          >
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href="https://wa.me/555193318332"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-center sm:text-right pr-0 sm:pr-16 cursor-pointer"
            >
              Bora conversar no Whats!
            </motion.a>
          </motion.div>
        </div>

        {/* Imagem do celular */}
        <div className="relative z-30 w-[200px] sm:w-[450px] md:w-[500px]">
          <Image src={celular} alt="Celular" className="w-full h-auto" />
        </div>

        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center lg:items-start text-center sm:text-left max-w-2xl pb-5 sm:pb-40"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#001A5C] leading-tight w-[98%]">
            Tá esperando o quê pra fazer sua <strong>marca</strong> finalmente sair do <strong>fluxo</strong>?
          </p>
        </motion.div>
      </div>

      {/* Logo no rodapé */}
      <div className="mt-16">
        <Image src={logo} alt="Logo NOV Agência" className="w-40 h-auto" />
      </div>
    </footer>
  )
}
