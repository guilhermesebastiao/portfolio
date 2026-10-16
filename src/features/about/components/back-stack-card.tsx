import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { StackComponent } from "@/features/about/components/stack";
import { CARD_HEADER_CLASSNAME } from "@/shared/lib/layout";
import { SURFACE_CLASSNAME } from "@/shared/lib/layout";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { DEV_STACKS } from "@/assets/data/stacks";
import { useTranslation } from "react-i18next";
import { HardDrive } from "lucide-react";
import { motion } from "motion/react";

export const BackStackCard = () => {
  const { t } = useTranslation("about");

  const { stacks } = DEV_STACKS.filter((stack) => stack.type === "backend")[0];

  return (
    <motion.div {...motionVariantHelper(fadeSlide({ x: 50 }))} className={SURFACE_CLASSNAME}>
      <div className={CARD_HEADER_CLASSNAME}>
        <HardDrive className="size-4.5 text-foreground/85" />
        <h1 className="text-[15px] font-medium tracking-wide text-foreground/85">
          {t("card-backend.title")}
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-1.5">
        {stacks.map((stack, index) => (
          <StackComponent key={index} stack={stack} />
        ))}
      </div>
    </motion.div>
  );
};
