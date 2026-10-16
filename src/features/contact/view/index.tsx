import { FormSection } from "@/features/contact/components/form-section";
import { CardSection } from "@/features/contact/components/card-section";
import { DiaTextReveal } from "@/shared/components/ui/dia-text-reveal";
import { useTranslation } from "react-i18next";
import { SECTION_CLASSNAME } from "@/shared/lib/layout";
import { SECTION_TITLE_CLASSNAME } from "@/shared/lib/layout";

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <div data-container="4" className={SECTION_CLASSNAME}>
      <DiaTextReveal className={SECTION_TITLE_CLASSNAME} duration={1.5} text={t("title")} />
      <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <CardSection />
        <FormSection />
      </div>
    </div>
  );
};
