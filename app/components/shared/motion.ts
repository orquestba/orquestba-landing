export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};
