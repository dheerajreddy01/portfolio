import { Link } from "react-scroll";

const STATS = [
  { value: "4+", label: "Years Experience" },
  { value: "Capital One", label: "Current Role" },
  { value: "AWS", label: "Certified Developer" },
  { value: "Patent", label: "Holder" },
];

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box hero--centered">
        <p className="section--title">Hey, I'm Dheeraj 👋</p>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">FULL-STACK</span> DEVELOPER
        </h1>
        <p className="hero--section-description">
          Software Engineer at Capital One building scalable backend services, REST APIs and data
          pipelines in Go, Java &amp; Python on AWS — with React on the front end.
        </p>

        <div className="hero--stats">
          {STATS.map((s, i) => (
            <div className="hero--stat" key={i}>
              <span className="hero--stat--value">{s.value}</span>
              <span className="hero--stat--label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hero--cta--row">
          <a href="./Dheerajreddy.pdf" download="Dheeraj_Reddy_Resume.pdf" className="btn btn-primary">
            ⬇ Download Résumé
          </a>
          <Link to="MyPortfolio" spy={true} smooth={true} offset={-70} duration={500} className="btn btn-outline-primary">
            View Projects
          </Link>
          <a href="mailto:reddydheeraj94@gmail.com" className="btn btn-ghost">
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
