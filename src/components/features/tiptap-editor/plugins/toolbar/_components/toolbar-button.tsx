import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
