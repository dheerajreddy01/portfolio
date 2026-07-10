import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <a href="https://github.com/dheerajreddy01" className="btn btn-github" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 33 33" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM16.3333 2.52684C22.9797 2.52684 28.6667 8.21396 28.6667 16.1667C28.6667 22.9998 24.0296 28.748 17.791 30.4986V25.6C17.791 24.3 17.35 23.2 16.55 22.4C20.4 22 24.4 20.5 24.4 14.1C24.4 12.3 23.75 10.85 22.7 9.7C22.9 9.25 23.45 7.55 22.5 5.3C22.5 5.3 21.15 4.85 18.05 6.95C16.75 6.6 15.35 6.4 13.95 6.4C12.55 6.4 11.15 6.6 9.85 6.95C6.75 4.85 5.4 5.3 5.4 5.3C4.45 7.55 5 9.25 5.2 9.7C4.15 10.85 3.5 12.3 3.5 14.1C3.5 20.5 7.5 22 11.35 22.4C10.65 23.05 10.2 24 10.05 25.3C9.25 25.7 7.05 26.35 5.75 24C5.75 24 4.95 22.55 3.45 22.45C3.45 22.45 1.95 22.4 3.35 23.4C3.35 23.4 4.35 23.85 5.05 25.65C5.05 25.65 5.95 28.5 10 27.6V30.4986C3.7626 28.748 -0.666748 22.9998 -0.666748 16.1667C-0.666748 8.21396 5.68694 2.52684 16.3333 2.52684Z"
                fill="currentColor"
              />
            </svg>
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--card--content">
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md portfolio--card--desc">{item.description}</p>
              <div className="portfolio--tags">
                {item.tags?.map((tag, i) => (
                  <span key={i} className="portfolio--tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="portfolio--card--links">
              {item.live && (
                <a href={item.live} className="portfolio--link" target="_blank" rel="noreferrer">
                  🔴 Live Demo →
                </a>
              )}
              {item.github && (
                <a href={item.github} className="portfolio--link" target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
