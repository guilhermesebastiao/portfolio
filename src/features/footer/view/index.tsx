import { SITE_CONTAINER_CLASSNAME } from "@/shared/lib/layout";
import { SocialLink } from "../components/social-link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="w-full border-t bg-background/60 backdrop-blur supports-backdrop-filter:bg-background/50">
      <div className={twMerge("flex items-center justify-between py-6", SITE_CONTAINER_CLASSNAME)}>
        <div className="space-y-1.5">
          <h3 className="text-sm font-medium text-foreground/85">Guilherme Sebastião</h3>
          <p className="text-left text-[11px] text-muted-foreground">
            <strong>
              &copy; {new Date().getFullYear()} {t("copyright")}
            </strong>{" "}
            - {t("location")}
          </p>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-end gap-2">
            <SocialLink href="https://github.com/guilhermesebastiao" aria-label="GitHub">
              <FaGithub className="size-4 text-muted-foreground" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/guilhermesebastiao" aria-label="LinkedIn">
              <FaLinkedin className="size-4 text-muted-foreground" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
