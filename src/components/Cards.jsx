import Card from "./Card";

function Cards({ projectData }) { 
  
  return ( 
    <div className="md:grid md:grid-cols-2 md:gap-4 lg:max-w-5xl">
      {projectData.map(project => (
        <Card key={project.id} project={project} />
      ))}
    </div>
   );
}

export default Cards;


