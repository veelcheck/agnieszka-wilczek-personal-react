import Cards from "./Cards";
import FilterButtons from "./FilterButtons";
import { useState, useEffect } from "react";
import projectsData from "../data/projectsData.json";
import { debounce } from "lodash";

const currentTags = [
  "JavaScript",
  "TypeScript",
  "React",
  "CSS",
  "RestAPI",
  "Tailwind",
  "Redux",
  "iCodeThis",
];

function Portfolio() {
  // Title sliding from left to right.
  const [move, setMove] = useState(false);
  const triggerAnimation = debounce(() => setMove(true), 100);

  // Sets a delay. I originally used setTimeout and clearTimeout.
  useEffect(() => {
    triggerAnimation();
    return triggerAnimation.cancel; //Cleanup on unmount.
  }, []);

  const [projectData, setProjectData] = useState(projectsData);

  const filterProjects = (allProjects, selectedTag) => {
    return allProjects.filter((singleProject) =>
      singleProject.tags.includes(selectedTag)
    );
  };

  const resetProjects = () => setProjectData(projectsData);

  const handleFiltering = (selectedTag) => {
    const filteredProjects = filterProjects(projectsData, selectedTag);
    setProjectData(filteredProjects);
  };

  return (
    <section className="mx-auto px-4 py-2 flex flex-col items-center md:mt-4">
      <h1
        className={`${move ? "translate-x-0" : "translate-x-24"} transition-transform duration-700 ease-in-out font-amatic text-3xl text-transform: uppercase font-bold md:mb-20 md:text-6xl`}>
        What do we have here?
      </h1>
      <div className="relative w-full pb-[56.25%] bg-black rounded-xl overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full "
          src="https://www.youtube.com/embed/7nZvS-dib9g?start=4320"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
      <div>
        <FilterButtons
          currentTags={currentTags}
          handleFiltering={handleFiltering}
          setProjectData={setProjectData}
          resetProjects={resetProjects}
        />
        <div className="grid grid-cols-auto-fit-custom ">
          <Cards projectData={projectData} />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
