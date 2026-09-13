import { use } from "react";
import type { Itechnology } from "../../types/technologyType";

interface Technologyprops {
  technologyPromise: Promise<Itechnology[]>;
}

const technologies = ({ technologyPromise }: Technologyprops) => {

  console.log(technologyPromise);

  const technologies = use(technologyPromise);

  console.log(technologies, "technologies");

  return (
    <div>
      
    </div>
  );
};

export default technologies;