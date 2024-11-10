// /components/Skills.tsx
import React from "react";
import { skills } from "../data/constants";  // Correct relative path
import { SkillCategory } from "../type/type";    // Correct relative path

const Skills: React.FC = () => {
  return (
    <div id="skills" className="flex flex-col justify-center items-center relative z-10 my-20 px-8 md:px-16">
      <div className="relative flex flex-col items-center justify-between w-full max-w-5xl gap-8 md:gap-12 md:flex-col">
        <div className="text-2xl font-bold text-white md:text-4xl md:mt-3 mb-5 md:mb-0">
          Skills
        </div>
        <div className="w-full flex flex-wrap gap-8 justify-center md:flex-row">
          {skills.map((category: SkillCategory) => (
            <div
              key={category.title}
              className="w-full sm:max-w-xs md:max-w-sm bg-slate-900 border border-slate-700 text-white shadow-lg rounded-xl p-4 mx-4 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:translate-y-4"
              style={{ perspective: "1500px" }}
            >
              <div className="relative w-full h-full transition-all duration-300 transform-style preserve-3d">
                <h2 className="text-xl font-semibold text-white text-center mb-4">{category.title}</h2>
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="text-sm font-normal text-primary-light border border-primary-light rounded-xl px-3 py-2 flex items-center justify-center gap-2 sm:text-xs sm:px-2"
                    >
                      <img src={skill.image} alt={skill.name} className="w-5 h-5" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
