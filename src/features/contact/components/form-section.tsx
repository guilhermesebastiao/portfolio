import { ContactFormProvider } from "@/features/contact/providers/contact-form-provider";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { ContactForm } from "@/features/contact/components/form";
import { SURFACE_CLASSNAME } from "@/shared/lib/layout";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const FormSection = () => {
  return (
    <motion.div
      {...motionVariantHelper(fadeSlide({ x: 80 }))}
      className={twMerge(SURFACE_CLASSNAME, "flex flex-1 flex-col p-5")}
    >
      <ContactFormProvider>
        <ContactForm />
      </ContactFormProvider>
    </motion.div>
  );
};
