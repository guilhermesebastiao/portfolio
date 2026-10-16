import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { CARD_HEADER_CLASSNAME } from "@/shared/lib/layout";
import { SURFACE_CLASSNAME } from "@/shared/lib/layout";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { useTranslation } from "react-i18next";
import { Joystick } from "lucide-react";
import { motion } from "motion/react";

export const AboutMeCard = () => {
  const { t } = useTranslation("about");

  return (
    <motion.div {...motionVariantHelper(fadeSlide({ y: -50 }))} className={SURFACE_CLASSNAME}>
      <div className={CARD_HEADER_CLASSNAME}>
        <Joystick className="size-4.5 text-foreground/90" />
        <h3 className="text-center text-base font-semibold text-foreground/90">
          {t("card-me.title")}
        </h3>
      </div>
      <p className="text-sm font-light leading-relaxed tracking-wide text-foreground/85">
        {t("card-me.description")}
      </p>
    </motion.div>
  );
};
