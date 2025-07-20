import { AboutMe } from "../components/AboutMe";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/NavBar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle*/}
        <ThemeToggle />
        {/*BG Effects*/}
        <StarBackground />

        {/*Navbar*/}
        <Navbar />
        {/*Main content*/}
        <main>
            <HeroSection />
            <AboutMe />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
        {/*Footer*/}
        <Footer />

    </div>);

}