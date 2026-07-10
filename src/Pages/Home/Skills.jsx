import data from "../../data/index.json";

export default function Skills() {
  return (
    <section className="techstack--section" id="Skills">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Tech Stack</p>
          <h2 className="sections--heading">Technologies I Work With</h2>
        </div>
      </div>
      <div className="techstack--badges">
        {data?.techStack?.map((tech, index) => (
          <span key={index} className="techstack--badge">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
