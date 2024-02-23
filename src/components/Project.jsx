import { useParams } from "react-router-dom";
import projectsData from "../data/projectsData.json";
import { useEffect, useState } from "react";
import { debounce } from "lodash";


const customClassName="bg-nice-green w-[60px] py-2 rounded-md font-bold hover:bg-nice-nude hover:text-nice-green focus:bg-nice-nude focus:text-nice-green";

function Project() {
  const { projectId } = useParams();

  const project = projectsData.find(projectData => projectData.id === parseInt(projectId, 10));

  if (!project) {
    return <div className="flex flex-col gap-2 items-center pt-8">Project not found.</div>
  }

  const {title, fullDescription, urlSite, urlCode } = project;

  // Title sliding from left to right.
  const [move, setMove] = useState(false);
  const triggerAnimation = debounce(() => setMove(true), 100);

  // Sets a delay. I originally used setTimeout and clearTimeout.
  useEffect(() => {
    triggerAnimation();
    return triggerAnimation.cancel; //Cleanup on unmount.
  }, []);

  return ( 
    <article className="mx-auto px-4 py-2 flex flex-col md:justify-center items-center md:items-start md:flex-row md:gap-4 md:mt-4">
      <div className="text-center mt-6 md:text-left md:w-5/6">
        <h1 className={`${move ? 'translate-x-0' : 'translate-x-[-100px]'} transition-transform duration-700 ease-in-out font-amatic text-3xl font-bold mb-6 md:text-6xl`}>{title}</h1>
        <p>{fullDescription}</p>
        <div className="flex flex-row gap-4 justify-center md:justify-start w-full mt-6">
          {urlSite && <a href={urlSite} target="_blank" rel="noopener noreferrer">
            <button className={customClassName}>SITE</button>
            </a>}
          {urlCode && <a href={urlCode} target="_blank" rel="noopener noreferrer">
            <button className={customClassName}>CODE</button>
            </a>}
        </div>
      </div>
    </article>
   );
}

export default Project;