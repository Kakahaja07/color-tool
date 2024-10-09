import { HexColorPicker } from "react-colorful";
import { Palette } from "lucide-react";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Custom Color</h2>
      <div className="flex items-center space-x-2 mb-4">
        <Palette size={24} />
        <input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="flex-grow border rounded px-2 py-1"
        />
      </div>
      <div className="flex-grow">
        <HexColorPicker color={color} onChange={onChange} className="w-full h-full" />
      </div>
    </div>
  );
}