import { useCallback, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Button } from "@/components/ui/button";
import { Undo } from "lucide-react";

const themeColors = [
  "#9333EA", // Purple
  "#E00000", // Red
  "#2563EB", // Blue
  "#008A00", // Green
  "#FFA500", // Orange
  "#BA4081", // Pink
  "#A8A29E", // Gray
];

type ColorPickerProps = {
  color?: string;
  onChange?: (color: string) => void;
  onClear?: () => void;
};

export const ColorPicker = ({ color, onChange, onClear }: ColorPickerProps) => {
  const [colorInputValue, setColorInputValue] = useState(color || "");

  const handleColorUpdate = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setColorInputValue(event.target.value);
    },
    []
  );

  const handleColorChange = useCallback(() => {
    const isCorrectColor = /^#([0-9A-F]{3}){1,2}$/i.test(colorInputValue);

    if (!isCorrectColor) {
      onChange?.("");
      return;
    }

    onChange?.(colorInputValue);
  }, [colorInputValue, onChange]);

  return (
    <div className="flex flex-col gap-2 p-2">
      <HexColorPicker
        className="w-full"
        color={color || ""}
        onChange={onChange}
      />
      <input
        type="text"
        className="w-full p-2 text-foreground bg-background border rounded border-input focus:outline-none focus:ring-1 focus:ring-ring"
        placeholder="#000000"
        value={colorInputValue}
        onChange={handleColorUpdate}
        onBlur={handleColorChange}
      />
      <div className="flex flex-wrap items-center gap-1">
        {themeColors.map((currentColor) => (
          <button
            key={currentColor}
            className="h-6 w-6 rounded-md border border-input focus:outline-none focus:ring-1 focus:ring-ring"
            style={{
              backgroundColor: currentColor,
              outline: currentColor === color ? "2px solid hsl(var(--ring))" : "none",
              outlineOffset: "2px",
            }}
            onClick={() => onChange?.(currentColor)}
          />
        ))}
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={onClear}
          title="Reset color to default"
        >
          <Undo className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}; 