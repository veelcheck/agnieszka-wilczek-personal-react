const buttonBase = "px-2 rounded-md md:px-6 py-2 md:font-bold bg-nice-green";
const buttonShine ="md:before:absolute md:before:h-[80px] md:before:w-[20px] md:before:bg-nice-nude md:before:top-[-10px] md:before:shadow-[1px_-1px_10px_2px_#fff] md:before:blur-sm md:before:opacity-95 md:before:duration-[0.7s] md:before:rotate-[-30deg] md:before:translate-x-[-70px]";
const buttonHover = "hover:bg-nice-nude md:hover:bg-nice-green md:hover:text-nice-nude hover:text-nice-green md:hover:before:translate-x-[120px] md:hover:before:translate-y-[-40px]";

const buttonFocus = "focus:bg-nice-nude  md:focus-bg-nice-green  md:focus:text-[#001524] focus:text-nice-green"

const customClassName = `${buttonBase} ${buttonShine} ${buttonHover} ${buttonFocus}`;

function FilterButtons({ currentTags, handleFiltering, resetProjects }) {
  return ( 
    <div className="relative flex flex-wrap justify-center gap-2 md:gap-8 py-8 md:mb-8">
      {currentTags.map((tag) => (
        <div key={tag} className='relative overflow-hidden rounded-md'>
          <button 
            className={customClassName}
            key={tag}
            onClick=
                {() => {
                  handleFiltering(tag);
                }} 
          >{tag}</button>
        </div>
      ))}
        <div key='all' className='relative overflow-hidden rounded-md'>
          <button 
            className={customClassName}
            onClick={() =>
              resetProjects()}
          >All</button>
        </div>
    </div>
   );
}

export default FilterButtons;

