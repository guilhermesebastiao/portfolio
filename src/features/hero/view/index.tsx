import { ProfileImage } from "@/features/hero/components/profile-image";
import { Content } from "@/features/hero/components/content";

export const Hero = () => {
  return (
    <div
      data-container="0"
      className="flex min-h-[calc(100dvh-4rem)] w-full flex-col items-center justify-center gap-12 mt-16 py-20 md:flex-row md:gap-16 md:py-16 lg:gap-24"
    >
      <Content />
      <ProfileImage />
    </div>
  );
};
