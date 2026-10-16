import type { Variants, MotionProps } from "motion/react";

type MotionVariantHelper = (
  variants: Variants,
) => Pick<MotionProps, "variants" | "initial" | "whileInView" | "exit" | "viewport">;

export const motionVariantHelper: MotionVariantHelper = (variants) => ({
  variants,
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    amount: 0.2,
    margin: "0px 0px -10% 0px",
    once: false,
  },
});
