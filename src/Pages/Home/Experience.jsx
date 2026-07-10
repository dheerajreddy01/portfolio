import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="experience--section" id="Experience">
      <div className="portfolio--container">
        <p className="section--title">Where I've Worked</p>
        <h2 className="skills--section--heading">Experience</h2>
      </div>

      <div className="timeline">
        {data?.experience?.map((job, index) => (
          <div key={index} className="timeline--item">
            <div className="timeline--marker" aria-hidden="true"></div>
            <div className="timeline--card">
              <div className="timeline--head">
                <h3 className="timeline--role">
                  {job.role} · <span className="timeline--company">{job.company}</span>
                </h3>
                <span className="timeline--period">{job.period}</span>
              </div>
              <p className="timeline--location">{job.location}</p>
              <ul className="timeline--highlights">
                {job.highlights?.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {data?.certifications?.length > 0 && (
        <div className="certs--row">
          {data.certifications.map((cert, i) => (
            <span key={i} className="cert--badge">
              📜 {cert}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
