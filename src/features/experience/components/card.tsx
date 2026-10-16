import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { SURFACE_CLASSNAME } from "@/shared/lib/layout";
import { motion, type Variants } from "motion/react";
import { type LucideProps } from "lucide-react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  icon: React.ElementType<LucideProps>;
  title: string;
  children: React.ReactNode;
  variants?: Variants;
};

export const Card = ({ icon: Icon, title, children, variants }: CardProps) => (
  <motion.div
    className={twMerge(SURFACE_CLASSNAME, "w-full space-y-5 p-5")}
    {...motionVariantHelper(variants ?? {})}
  >
    <div className="flex items-center gap-2">
      <Icon className="text-foreground/90" />
      <h2 className="text-lg font-semibold text-foreground/90">{title}</h2>
    </div>
    {children}
  </motion.div>
);
