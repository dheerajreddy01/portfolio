
import AboutMe from "../Home/AboutMe";
import ContactMe from "../Home/ContactMe";
import Footer from "../Home/Footer";
import HeroSection from "../Home/HeroSection";
import MyPortfolio from "../Home/MyPortfolio";
import MySkills from "../Home/MySkills";
import Skills from "../Home/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills/>
      <AboutMe />
      <MyPortfolio />
      <Skills/>
      <ContactMe />
      <Footer />
    </>
  );
}