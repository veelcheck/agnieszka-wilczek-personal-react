import { Link } from 'react-router-dom';

function Card({ project }) {
  const { id, title, shortDescription } = project;
  return (
    <Link to={`/portfolio/${id}`}>
      <div className='p-2 border border-nice-nude flex flex-col justify-center rounded-md min-h-40 mb-4 text-center hover:border-4 md:hover:border md:hover:shadow-card'>
        <h2 className='font-bold md:mb-2 '>{title}</h2>
        <div>{shortDescription}</div>
      </div>
    </Link>
  );
}

export default Card;
