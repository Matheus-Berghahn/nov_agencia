'use client'

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const textItems = [
  'Vai até o teu espaço (já de olho nos melhores ângulos).',
  'Cria, revisa, manda pro cliente, ajusta se precisar.',
  'Conversa contigo pelo Whats mesmo.',
  'E vibra quando o conteúdo engaja de verdade quando tem comentário, compartilhamento, identificação real.'
];

const lineTexts = [
  'marketing bom é aquele',
  'que toca.',
  'Que chega.',
  'Que fica.'
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  return (
    <section
      
      id="work"
      className=" overflow-x-hidden xl:overflow-x-visible relative w-full flex flex-col xl:flex-row items-center justify-center md:justify-between px-8 sm:px-16 md:px-0 lg:px-20 2xl:px-40 py-20 xl:py-28 2xl:py-60 gap-12"
    >
      {/* Texto da esquerda */}
      <div className="w-full xl:w-[55%] z-10 pr-0 ">
        <motion.div
          className="w-full font-bold mb-8 md:mb-16 2xl:mb-16 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-5xl text-[#0D2C7C] text-center xl:text-left leading-tight mr-0 md:mr-40 "
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
        >
          A gente entra tanto no<br />
          clima da tua marca que<br />
          vira quase da família:
        </motion.div>

        <div 
        ref={ref}
        className="space-y-6 w-full lg:w-full 2xl:w-full pl-0 md:pl-10 xl:pl-0">
          {textItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              transition={{ delay: index * 0.3, duration: 0.6, ease: 'easeOut' }}
              variants={{ visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 text-[#0D2C7C]"
            >
              <div className="w-3 h-3 min-w-3 min-h-3 mt-1 rounded-full bg-orange-500"></div>
              <p className="text-sm md:text-lg lg:text-2xl xl:text-xl leading-snug ">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lado direito responsivo */}
      <div
        className="w-full xl:w-[42%] 2xl:w-[45%] h-[500px] sm:h-[700px] md:h-[900px] lg:h-[1200px] xl:h-[138%] 2xl:h-[130%] bg-cover bg-right bg-no-repeat relative mt-0 xl:mt-0 xl:absolute xl:top-0 xl:right-0 z-50"
        style={{ backgroundImage: "url('/work_image.png')" }}
      >
        <div className="absolute inset-0 flex flex-col justify-start items-end gap-2 lg:gap-5 xl:gap-4 pr-6 md:pr-10 pt-4 lg:pt-16 xl:pt-20">
          {lineTexts.map((text, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: {},
                visible: {},
              }}
              transition={{ delay: 1.2 + i * 0.5 }}
            >
              <motion.div
                className="absolute right-0 top-0 bottom-0 bg-orange-500 z-0"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { width: '0%' },
                  visible: { width: '100%' },
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.5,
                  ease: 'easeInOut',
                }}
                style={{ paddingRight: '0.5rem', paddingLeft: '0.5rem' }}
              />

              <motion.span
                className="relative z-10 text-white text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-2xl 2xl:text-4xl px-4 py-5 whitespace-nowrap"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + i * 0.5,
                  ease: 'easeOut',
                }}
              >
                {text}
              </motion.span>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
