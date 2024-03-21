export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about-me.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
                Driven by a passion for technology and innovation, I am a Software Developer with a Master's in 
                Computer Science from the University of Central Missouri, holding expertise in front-end and back-end 
                development, database optimization, and cloud technologies. My professional journey includes impactful roles at Rakuten India and NCR Corporation, 
                where I delivered significant improvements in application responsiveness, database efficiency, and user engagement. I have a proven track record of 
                employing React, Python, and SQL to enhance user experiences and streamline operations.
            </p>
            <p className="hero--section-description">
                I thrive in collaborative environments that challenge me to solve complex problems 
                and am always eager to apply my skills and creativity to contribute to the success of dynamic teams and innovative projects.
            </p>
          </div>
        </div>
      </section>
    );
  }