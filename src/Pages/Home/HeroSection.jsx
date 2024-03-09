

export default function HeroSection() {

    const navigateToEmail=()=>{
        var email="reddydheeraj94@gmail.com";
        window.location.href="mailto:"+email;
    }

    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Dheeraj</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">FULL-STACK</span>{" "}
              <br />
              DEVELOPER
            </h1>
            <p className="hero--section-description">
                        Dedicated computer science graduate skilled in full-stack development
              <br /> AWS cloud solutions, committed to delivering scalable and secure software solutions
            </p>
          </div>
          <button className="btn btn-primary" onClick={navigateToEmail}>Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }