import { use, useState } from "react";
import type { Itechnology } from "../../types/technologyType";
import DisplayTechnologys from "./DisplayTechnologys";
import YourStack from "./YourStack";

interface Technologyprops {
  technologyPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologyPromise }: Technologyprops) => {
  const technologies = use(technologyPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<Itechnology[]>([]);

  const handleAddToStack = (technology: Itechnology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );
    if (alreadyAdded) {
      return;
    }
    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);
  };

  const handleRemoveFromStack = (id: string) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id
    );
    setSelectedTechnologies(remainingTechnologies);
  };

  const totalStock =
    technologies.length - selectedTechnologies.length;

  return (
    <section className="max-w-6xl mx-auto mt-8 mb-10 px-6 py-8">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900">Explore the{" "}
          <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <DisplayTechnologys technologies={technologies} selectedTechnologies={selectedTechnologies} onAddToStack={handleAddToStack}/>
        </div>
        <div>
          <YourStack selectedTechnologies={selectedTechnologies} onRemove={handleRemoveFromStack} totalStock={totalStock}/>
        </div>

      </div>
    </section>
  );
};

export default Technologies;