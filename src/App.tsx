import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/technology/technologies";
import type { Itechnology } from "./types/technologyType";
import Footer from "./components/Footer";

const technologyFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data/technologies.json");
  const data = await res.json();

  return data;
};

function App() {
  const technologyPromise = technologyFetch();

  return (
    <>
      <Nav />

      <Banner />

      <Suspense fallback={<h2 className="text-center mt-10">Loading....</h2>}>
        <Technologies technologyPromise={technologyPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;