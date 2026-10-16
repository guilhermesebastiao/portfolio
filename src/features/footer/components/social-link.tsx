import { SOCIAL_LINK_CLASSNAME } from "@/shared/lib/layout";
import { twMerge } from "tailwind-merge";

interface SocialLinkProps extends React.AnchorHTMLAttributes<
  HTMLAnchorElement | Omit<"target", "rel">
> {
  href: string;
  children: React.ReactNode;
}

export const SocialLink = ({ children, ...props }: SocialLinkProps) => (
  <a {...props} target="_blank" rel="noreferrer" className={twMerge(SOCIAL_LINK_CLASSNAME, "p-2")}>
    {children}
  </a>
);
