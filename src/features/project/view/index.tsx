import { ProjectCard } from "@/features/project/components/project-card";
import { DiaTextReveal } from "@/shared/components/ui/dia-text-reveal";
import { PROJECTS } from "@/assets/data/projects";
import { useTranslation } from "react-i18next";
import { SECTION_CLASSNAME } from "@/shared/lib/layout";
import { SECTION_TITLE_CLASSNAME } from "@/shared/lib/layout";

export const Project = () => {
  const { t } = useTranslation("project");

  return (
    <div data-container="2" className={SECTION_CLASSNAME}>
      <DiaTextReveal className={SECTION_TITLE_CLASSNAME} duration={1.5} text={t("title")} />
      <div className="grid w-full grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
