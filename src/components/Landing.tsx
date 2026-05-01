import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              Sarim
              <br />
              <span>Baloch</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>WEB DESIGNER & DEVELOPER</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">WordPress</div>
              <div className="landing-h2-2">React.js</div>
            </h2>
            <h2>
              <div className="landing-h2-info">UI/UX Design</div>
              <div className="landing-h2-info-1">Landing Pages</div>
            </h2>
            <div className="landing-buttons">
              <a
                href="https://www.freelancer.com/u/sarimbaloch"
                target="_blank"
                rel="noreferrer"
                className="landing-btn"
              >
                Freelancer
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-sarim-baloch-4b3362246/"
                target="_blank"
                rel="noreferrer"
                className="landing-btn landing-btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
