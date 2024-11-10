// /types/types.ts
export interface SkillItem {
    name: string;
    image: string;
  }
  
  export interface SkillCategory {
    title: string;
    skills: SkillItem[];
  }
  