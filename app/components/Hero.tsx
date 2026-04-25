"use client";
import Button from "./shared/Button";
import HeroVisual from "./HeroVisual";
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

export default function Hero() {
  return (
    <section className="bg-navy grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden min-h-[80vh] lg:min-h-[calc(100vh-68px)]">
      {/* Left — content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-center py-16 px-5 md:py-20 md:px-8 lg:py-25 lg:pr-15 relative z-2"
        style={{ paddingLeft: "max(20px, calc((100vw - 1380px) / 2 + 60px))" }}
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/12 rounded-[20px] py-1.5 pr-3.5 pl-2.5 mb-8 lg:mb-10 w-fit"
        >
          <div className="w-1.5 h-1.5 bg-copper-light rounded-full" />
          <span className="text-[11px] md:text-xs font-medium text-white/60 tracking-[0.08em]">
            Integrated Business Planning · IBP
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-[38px] md:text-[52px] lg:text-[68px] leading-[1.05] text-white mb-5"
        >
          <span className="block">Tu empresa tiene datos.</span>
          <span className="block">
            Lo que necesita es{" "}
            <span className="text-copper-light italic">claridad.</span>
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base lg:text-lg font-light text-white/60 leading-[1.65] max-w-full lg:max-w-120 mb-8 lg:mb-12"
        >
          Orquesta conecta{" "}
          <strong className="font-medium text-white/85">
            finanzas, operaciones y ventas
          </strong>{" "}
          en un sistema de planificación integrado — para que cada área trabaje
          con la misma información y cada decisión llegue a tiempo.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-10 lg:mb-18"
        >
          <Button href="#diagnostico" icon={<ArrowRight size={16} />}>
            Agendar diagnóstico gratuito
          </Button>
          <Button variant="ghost" href="#metodo">
            Ver cómo funciona
          </Button>
        </motion.div>
      </motion.div>

      {/* Right — visualization (desktop only) */}
      <HeroVisual />
    </section>
  );
}
