import { Code, Briefcase, Server, BotMessageSquare } from "lucide-react";

export const AboutSection = () => {
  return <section id="about" className="py-24 px-24 relative">
    {" "}
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About <span className="text-primary"> Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Software Developer | AI Explorer</h3>

          <p className="text-muted-foreground text-justify">
            With 3 years of experience in software engineering education, 
            I specialize in full stack development, 
            AI-powered applications, 
            and building scalable mobile and web solutions.
          </p>

          <p className="text-muted-foreground text-justify">
            I have a strong interest in machine learning and artificial 
            intelligence, especially in applying intelligent systems to 
            solve real-world problems. I enjoy breaking down complex 
            challenges into simple, effective solutions that improve 
            user experience and system efficiency.
          </p>

          <p className="text-muted-foreground text-justify">
            I’m currently focused on expanding my expertise in both frontend 
            and backend development while exploring advanced topics in AI. 
            My goal is to contribute to innovative, impactful projects as a 
            Full Stack Developer or Machine Learning Engineer.
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              {""}
              Get In Touch
            </a> 

             <a href="" className="px-6 py-2 rounded-full border border primary text-primary hover:bg-primary/10 transition-colors duration-300">
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive and user-friendly web applications 
                  with a focus on performance and usability.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <BotMessageSquare className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">AI Development</h4>
                <p className="text-muted-foreground">
                  Creating intelligent systems through AI development, 
                  with a focus on machine learning and natural language 
                  processing to solve real-world problems.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Server className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Backend Development</h4>
                <p className="text-muted-foreground">
                  Skilled in backend development, focusing on building 
                  server-side logic, managing databases, and creating secure, 
                  efficient APIs to support application functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Project Management</h4>
                <p className="text-muted-foreground">
                  Creating structured project plans and applying development 
                  methodologies to ensure smooth execution and strict 
                  adherence to project timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}