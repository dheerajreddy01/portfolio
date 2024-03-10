

import data from "../../data/index.json";

export default function Skills() {
  return (
    <section className="Skills--section" id="Skills">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title"></p>
          <h2 className="sections--heading"> My Skills</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.Skills?.map((item, index) => (
          <div key={index} className="Skills--section--card">
            <div className="Skills--section--card--review">

            </div>
            <p className="text-md">{item.description}</p>
            <div className="Skills--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md Skills--author--name">
                  {item.author_name}
                </p>
                <p className="text-md Skills--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}