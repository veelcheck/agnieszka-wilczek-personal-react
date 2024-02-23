import { useState, useEffect } from "react";
import { debounce } from 'lodash';

import skillSet from "../data/skillsData.json";

function Skills() {
  // Title sliding from left to right.
  const [move, setMove] = useState(false);
  const triggerAnimation = debounce(() => setMove(true), 100);

  // Sets a delay instead of setTimeout.
  useEffect(() => {
    triggerAnimation();
    return triggerAnimation.cancel; //Cleanup on unmount.
  }, []);

  const [skills, setSkills] = useState(skillSet);
  
  return (
    <section className="mx-auto px-10 py-2 flex flex-col justify-center items-center  md:gap-4 md:mt-4">
       <h1 className={`${move ? 'translate-x-0' : 'translate-x-[-100px]'} transition-transform duration-700 ease-in-out font-amatic text-3xl text-transform: uppercase font-bold md:mb-20 md:text-6xl`}>Skill set</h1> 
      <div className="md:w-4/6 lg:w-full pt-4">
        <ul className="border-l pl-8 space-y-8">
          {skills.map(skill => (
            <li key={skill.name} className="relative"><span className="font-bold pr-2 before:absolute before:h-[8px] before:w-[8px] before:bg-nice-nude before:top-[0.5em] before:left-[-2.3em] before:shadow-[1px_-1px_1px_6px_#fff] before:blur-sm before:rounded-full before:opacity-95" >{skill.name} -</span>{skill.text}</li>
          ))}
            <li className="relative line-through"><span className="font-bold pr-2 before:absolute before:h-[8px] before:w-[8px] before:bg-nice-nude before:top-[0.5em] before:left-[-2.3em] before:shadow-[1px_-1px_1px_6px_#fff]  before:blur-sm before:rounded-full before:opacity-95" >Redux:</span> I've had my fair share of wrestling with state management.</li>
          </ul> 
        <p className="py-20">So, there you have it – a mix of skills, a dash of enthusiasm, and a sprinkle of code magic.</p>
      </div>
    </section>
    
    );
}

export default Skills;