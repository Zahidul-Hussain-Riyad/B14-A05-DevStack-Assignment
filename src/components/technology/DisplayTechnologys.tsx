import type { Itechnology } from "../../types/technologyType";
import TechnologyCard from "./TechnologyCard";

interface DisplayTechnologysProps {
  technologies: Itechnology[];
  selectedTechnologies: Itechnology[];
  onAddToStack: (technology: Itechnology) => void;
}

const DisplayTechnologys = ({ technologies, selectedTechnologies, onAddToStack, }: DisplayTechnologysProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {technologies.map((technology) => {
        const isSelected = selectedTechnologies.some(
          (item) => item.id === technology.id
        );
        return (
          <TechnologyCard key={technology.id} technology={technology} isSelected={isSelected} onAddToStack={onAddToStack} />
        );
      })}

    </div>
  );
};

export default DisplayTechnologys;