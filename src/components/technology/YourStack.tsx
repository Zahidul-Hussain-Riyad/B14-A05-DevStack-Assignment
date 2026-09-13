import type { Itechnology } from "../../types/technologyType";

interface YourStackProps {
  selectedTechnologies: Itechnology[];
  onRemove: (id: string) => void;
  totalStock: number;
}

const YourStack = ({selectedTechnologies, onRemove, totalStock}: YourStackProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-2xl text-slate-900">Your Stack</h3>
        <span className="text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
          {selectedTechnologies.length}
        </span>
      </div>

      {/* Empty Message */}
      {selectedTechnologies.length === 0 ? (
        <>
          <p className="text-base text-gray-400 mb-5">No technologies selected yet.</p>
          <div className="border border-dashed border-gray-300 rounded-xl p-10 text-center">
            <p className="text-base text-gray-400">Your stack is empty.</p>
          </div>
        </>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="space-y-3 mt-5">
            {selectedTechnologies.map((technology) => (
              <div key={technology.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                {/* Technology Info */}
                <div className="flex items-center gap-3">
                  <img src={technology.icon} alt={technology.name} className="w-8 h-8 object-contain"/>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{technology.name}</p>
                    <p className="text-xs text-gray-400">{technology.category}</p>
                  </div>
                </div>

                {/* Remove Button */}
                <button onClick={() => onRemove(technology.id)} className="text-red-500 hover:text-red-700 font-bold text-xl">
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Total Stock */}
          <div className="mt-5 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">Total Stock</p>
            <p className="text-xl font-bold text-slate-900">{totalStock}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default YourStack;