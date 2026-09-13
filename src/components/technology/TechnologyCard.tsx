import type { Itechnology } from "../../types/technologyType";

interface TechnologyCardProps {
  technology: Itechnology;
  isSelected: boolean;
  onAddToStack: (technology: Itechnology) => void;
}

const TechnologyCard = ({technology, isSelected,onAddToStack,}: TechnologyCardProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white">

      {/* Top */}
      <div className="flex items-start justify-between">
        <img src={technology.icon} alt={technology.name} className="w-10 h-10 object-contain"/>
        <span className="text-xs bg-blue-50 text-blue-500 px-3 py-1 rounded-full">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="font-bold text-lg mt-3 text-slate-900">{technology.name}</h3>

      {/* Description */}
      <p className="text-xs text-gray-500 mt-2 leading-5 min-h-[60px]">{technology.description}</p>

      {/* Information */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{technology.category}</span>
        <span className="text-xs text-gray-500">{technology.difficulty}</span>
        <span className="text-xs text-gray-600">⭐ {technology.rating}</span>
      </div>

      {/* Add Button */}
      <button onClick={() => onAddToStack(technology)} disabled={isSelected}className={`btn btn-sm w-full mt-4 border-none ${isSelected ? "bg-green-500 text-white" : "bg-slate-950 text-white hover:bg-slate-800"}`}>
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;