
import AboutMe from "../Home/AboutMe";
import ContactMe from "../Home/ContactMe";
import Footer from "../Home/Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../Home/MyPortfolio";
import MySkills from "../Home/MySkills";
import Testimonial from "../Home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills/>
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}