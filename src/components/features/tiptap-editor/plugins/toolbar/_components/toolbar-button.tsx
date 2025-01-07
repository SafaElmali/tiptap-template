import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { FC } from "react";

type ToolbarButtonProps = {
  icon: React.ReactNode;
  label: string;
  command: () => void;
  isActive: boolean;
  disabled?: boolean;
};

const ToolbarButton: FC<ToolbarButtonProps> = ({
  icon,
  label,
  isActive,
  command,
  disabled,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle
          size="sm"
          type="button"
          pressed={isActive}
          onPressedChange={command}
          aria-label={label}
          disabled={disabled}
          className={cn(
            "bg-transparent hover:bg-transparent hover:text-foreground",
            isActive && "bg-accent text-muted-foreground hover:bg-accent"
          )}
        >
          {icon}
        </Toggle>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={4}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
};

export { ToolbarButton };
