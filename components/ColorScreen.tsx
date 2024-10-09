interface ColorScreenProps {
  name: string;
  color: string;
  onClick: () => void;
  isSelected: boolean;
}

export default function ColorScreen({ name, color, onClick, isSelected }: ColorScreenProps) {
  return (
    <button
      className={`w-full text-left flex items-center space-x-2 p-2 rounded transition-colors duration-300 ${
        isSelected ? 'bg-gray-200' : 'hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <div
        className="w-8 h-8 rounded-full border-2 border-gray-300"
        style={{ backgroundColor: color }}
      ></div>
      <span className={isSelected ? 'font-semibold' : ''}>{name}</span>
    </button>
  );
}