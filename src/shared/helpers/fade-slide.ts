import type { Variants } from "motion/react";

type FadeSlideProps = {
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
  delay?: number;
};

export const fadeSlide = ({
  x = 0,
  y = 0,
  scale = 1,
  rotate = 0,
  delay = 0,
}: FadeSlideProps): Variants => ({
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
    x,
    y,
    scale,
    rotate,
    z: 0,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    z: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});
