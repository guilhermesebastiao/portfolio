import { SURFACE_CLASSNAME } from "@/shared/lib/layout";
import { twMerge } from "tailwind-merge";

export { SURFACE_CLASSNAME };

export const CARD_CLASSNAME = twMerge(SURFACE_CLASSNAME, "p-5");
