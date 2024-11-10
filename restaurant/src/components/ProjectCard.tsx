import React from "react";

// Define the types for the props
interface ProjectCardProps {
  title: string;
  main: string;
  demoLink: string;
  sourceCodeLink: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  main,
  demoLink,
  sourceCodeLink,
  image,
}) => {
  return (
    <div className="w-80 max-w-lg bg-slate-900 border border-slate-900 text-white rounded-xl p-3 md:max-w-md md:p-6 sm:max-w-sm sm:p-3 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:translate-y-4">
    <img className="p-4" src={image} alt={title} />
   <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
   <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
   <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
     {/* Demo Button */}
     <a
       href={demoLink}
       target="_blank"
       rel="noopener noreferrer"
     >
       <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
         Demo
       </button>
     </a>

     {/* Source Code Button */}
     <a
       href={sourceCodeLink}
       target="_blank"
       rel="noopener noreferrer"
     >
       <button className="md:mt-10 w-50 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
         Source Code
       </button>
     </a>

   </div>
 </div>

  );
};

export default ProjectCard;
