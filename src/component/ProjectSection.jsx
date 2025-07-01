import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HandyGO",
    description: "A mobile app that connects users with nearby handymen based on job type and location, integrated with an AI chatbot for job classification.",
    image: "/projects/HandyGO.png", // Replace with your actual image path
    tags: ["Flutter", "Node.js", "Firebase", "Rasa", "Python", "REST API", "GitHub"],
    demoUrl: "https://drive.google.com/file/d/1Rv0HYFYwFrvGH8e9Dh0OfzWbifY9VGr8/view?usp=sharing", // Replace with real demo link if available
    githubUrl: "https://github.com/naimfitri/HandyGO_Source.git", // Replace with GitHub repo link
  },
  {
    id: 2,
    title: "Forest Management Simulator",
    description: "A web-based simulation tool to model forest growth and evaluate tree harvesting strategies with visual dashboards and data analysis.",
    image: "/projects/forest.png", // Replace with your actual image path
    tags: ["PHP", "JavaScript", "HTML", "MySQL"],
    demoUrl: "#", // Replace with real demo link if available
    githubUrl: "https://github.com/naimfitri/The_Forest.git", // Replace with GitHub repo link
  },
  {
    id: 3,
    title: "KTM eTicketing System",
    description: "A web application for KTM Malaysia that allows users to purchase train tickets online, featuring a user-friendly interface and secure payment processing.",
    image: "/projects/KTM.png",
    tags: ["MVC", "MySQL", "ASP.NET", "C#"],
    // demoUrl: "#",
    githubUrl: "https://github.com/naimfitri/KTM_Website.git",
  },
]

export const ProjectSection = () => {

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2>
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my 
          skills and interests. Each project is a unique solution 
          to a real-world problem, demonstrating my ability to design, 
          develop, and deploy applications effectively.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2 "
            target="_blank"
            href="https://github.com/naimfitri"
          >
            Check My Github <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  )
};