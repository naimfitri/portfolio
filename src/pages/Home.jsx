import { ThemeToggle } from "@/component/ThemeToggle";
import { StarBackground } from "@/component/StarBackground";
import { NavBar } from "@/component/NavBar";
import { HeroSection } from "@/component/HeroSection";
import { AboutSection } from "@/component/AboutSection";
import { SkillSection } from "@/component/SkillSection";
import { ProjectSection } from "@/component/ProjectSection";
import { ContactSection } from "@/component/ContactSection";


export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
    <ThemeToggle />
    {/* Background Effects */}
    <StarBackground />

    {/* NavBar */}
    <NavBar />
    {/* Main Content */}
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
    {/* {Footer} */}
  </div> 
};