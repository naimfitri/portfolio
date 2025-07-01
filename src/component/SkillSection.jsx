import React, { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
  // Frontend
  { name: "HTML", level: 85, category: "frontend" },
  { name: "CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React.js", level: 65, category: "frontend" },
  { name: "Flutter", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "PHP", level: 90, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "Laravel", level: 60, category: "backend" },

  // Database
  { name: "Firebase", level: 85, category: "database" },
  { name: "Firestore", level: 80, category: "database" },
  { name: "Realtime DB", level: 80, category: "database" },
  { name: "MySQL", level: 85, category: "database" },
  { name: "SQL", level: 85, category: "database" },

  // Machine Learning
  { name: "Rasa", level: 85, category: "Machine Learning" },
  { name: "NLP", level: 75, category: "Machine Learning" },

  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Figma", level: 50, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Android Studio", level: 75, category: "tools" },
  { name: "XAMPP", level: 80, category: "tools" },
  { name: "Linux", level: 75, category: "tools" },

  // Programming Languages
  { name: "JavaScript", level: 80, category: "language" },
  { name: "Dart", level: 80, category: "language" },
  { name: "Python", level: 75, category: "language" },
  { name: "PHP", level: 90, category: "language" },
  { name: "HTML", level: 85, category: "language" },
  { name: "CSS", level: 80, category: "language" },
  { name: "Java", level: 80, category: "language" },
  { name: "C/C++", level: 75, category: "language" }
];

const categories = ["all", "frontend", "backend", "database", "Machine Learning", "tools", "language"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}         
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}% 
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};