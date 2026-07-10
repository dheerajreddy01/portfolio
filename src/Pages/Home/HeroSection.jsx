import { Link } from "react-scroll";

export default function HeroSection() {
  const navigateToEmail = () => {
    window.location.href = "mailto:reddydheeraj94@gmail.com";
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box hero--centered">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Dheeraj 👋</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">FULL-STACK</span> DEVELOPER
          </h1>
          <p className="hero--section-description">
            Software Engineer at Capital One with 4+ years building scalable backend services,
            REST APIs and data pipelines in Go, Java &amp; Python on AWS — with React on the front end.
            AWS Certified Developer and patent holder.
          </p>
        </div>
        <div className="hero--cta--row">
          <button className="btn btn-primary" onClick={navigateToEmail}>
            Get In Touch
          </button>
          <Link
            to="MyPortfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-outline-primary"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
