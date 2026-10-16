import { BADGE_CLASSNAME } from "@/shared/lib/layout";
import { type Stack } from "@/assets/data/stacks";

type StackComponentProps = {
  stack: Stack;
};

export const StackComponent = ({ stack }: StackComponentProps) => {
  const Icon = stack.icon;

  return (
    <div className={BADGE_CLASSNAME}>
      <Icon className="size-4 text-foreground/80" />
      <span className="text-[13px] text-foreground/80 font-medium">{stack.name}</span>
    </div>
  );
};
