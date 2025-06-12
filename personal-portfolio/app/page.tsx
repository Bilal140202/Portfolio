import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ProjectsShowcase from '../components/ProjectsShowcase';
import ResumeExperience from '../components/ResumeExperience';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer'; // Import Footer

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProjectsShowcase />
      <ResumeExperience />
      <ContactSection />
      <Footer />
    </>
  );
}
