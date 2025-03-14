/* eslint-disable react/prop-types */
import Card from "./Card";

function Cards({ projectData }) {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-4 w-full">
      {projectData.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Cards;
