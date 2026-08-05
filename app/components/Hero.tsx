"use client";
import Button from "./shared/Button";
import HeroDots from "./HeroDots";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// TODO: Cuando tengamos la demo linkear boton de "Ver como funciona" a esta demo

export default function Hero() {
  return (
    <section className="bg-navy relative overflow-hidden min-h-[80vh] lg:min-h-[calc(100vh-68px)] flex items-center">
      {/* Signature motif — subtle copper dot grid that lights up near the
          cursor. Interactive but restrained: the hero still holds its
          weight through type and negative space, not motion. */}
      <HeroDots />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-220 mx-auto py-16 px-5 md:py-20 md:px-8 lg:py-25 relative z-2"
      >
        <motion.h1
          variants={item}
          className="text-[48px] md:text-[48px] lg:text-[60px] leading-[1.1] text-white mb-5"
        >
          <span className="block">Tu empresa tiene datos.</span>
          <span className="block">
            Lo que necesita es{" "}
            <span className="text-copper-light">claridad</span>
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg lg:text-xl font-normal text-white/60 leading-[1.65] max-w-full lg:max-w-xl mb-6 lg:mb-8"
        >
          Conectamos{" "}
          <strong className="font-medium text-white/85">
            Finanzas, Operaciones y Ventas
          </strong>{" "}
          bajo la misma lectura. Traducimos el dato en dirección de negocio.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5"
        >
          <Button href="#contacto" icon={<ArrowRight size={16} />}>
            Iniciar Diagnóstico
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
