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
};

const ToolbarButton: FC<ToolbarButtonProps> = ({
  icon,
  label,
  isActive,
  command,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle
          size="sm"
          pressed={isActive}
          onPressedChange={command}
          aria-label={label}
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
