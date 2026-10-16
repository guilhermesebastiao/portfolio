import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { useTrackEvents } from "@/features/project/hooks/use-track-events";
import { BaseImage } from "@/shared/components/base-image";
import { SURFACE_CLASSNAME } from "@/shared/lib/layout";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { type Project } from "@/assets/data/projects";
import { BADGE_CLASSNAME } from "@/shared/lib/layout";
import { useTranslation } from "react-i18next";
import { MoveUpRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation("project");

  const { redirectedToGithub } = useTrackEvents();

  const handleRedirect = () => {
    redirectedToGithub(project.name);
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className={twMerge("group cursor-pointer", SURFACE_CLASSNAME)}
      onClick={handleRedirect}
      {...motionVariantHelper(fadeSlide({ scale: 0.9 }))}
      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow: "0 18px 45px -24px rgb(0 0 0 / 0.45)",
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
      whileTap={{ scale: 0.985 }}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
        <span className="invisible pointer-events-none absolute top-2 right-2 z-10 flex size-8.5 items-center justify-center gap-1 rounded-md transition-[background-color,opacity,visibility] duration-250 group-hover:pointer-events-auto group-hover:visible group-hover:bg-background">
          <MoveUpRight className="size-4" />
        </span>
        <BaseImage
          src={project.cover}
          alt={project.name}
          className="rounded-t-lg grayscale-90 transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
        />
      </div>
      <div className="space-y-2 pt-4">
        <h3 className="text-xl font-medium">{project.name}</h3>
        <p className="text-[13px] text-muted-foreground">{t(project.description)}</p>
        <div className="flex w-full flex-wrap mt-2.5 gap-2">
          {project.stacks.map((stack, index) => (
            <div key={index} className={twMerge(BADGE_CLASSNAME, "select-none px-2 py-0.5")}>
              <span className="text-xs text-foreground/80">{stack}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
