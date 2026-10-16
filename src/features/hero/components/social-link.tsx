import { SOCIAL_LINK_CLASSNAME } from "@/shared/lib/layout";
import { twMerge } from "tailwind-merge";

type SocialLinkProps = {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
};

export const SocialLink = ({ href, onClick, children }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    onClick={onClick}
    className={twMerge(SOCIAL_LINK_CLASSNAME, "p-2.5")}
  >
    {children}
  </a>
);
