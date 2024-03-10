import data from "../../data/index.json";

export default function Skills() {
  return (
    <section className="Experience--section" id="Skills">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Experience</h2>
          <p className="sub--title">Here are the technologies I've worked with.</p>
        </div>
      </div>
      <div className="Experience--section--container">
        {data?.Experience?.map((item, index) => (
          <div key={index} className="Experience-section--card--content">
            <img src={item.src} alt="Avatar" className="experience-image" />
          </div>
        ))}
      </div>
    </section>
  );
}
