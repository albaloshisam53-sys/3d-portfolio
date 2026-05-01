import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Solutions Consultant</h4>
                <h5>Skyword Labz</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Delivering digital marketing strategy and web solutions for clients. Handling social media management, SEO, and client-facing digital campaigns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>State of Designs</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and developed client websites from scratch — custom WordPress builds, landing pages, and responsive web applications for a USA-based digital agency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Designer & Developer</h4>
                <h5>Freelancer — Self Employed</h5>
              </div>
              <h3>2022 – Present</h3>
            </div>
            <p>
              Building and deploying full stack web applications using React.js, Node.js, PHP, and WordPress. Specialized in custom theme development and conversion-focused websites for small to mid-sized businesses.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Manager</h4>
                <h5>Cynical Labs · Ebooknests · Maxcure</h5>
              </div>
              <h3>2022 – 2024</h3>
            </div>
            <p>
              Managed concurrent social campaigns for 3 clients. Grew average engagement by 35%. Produced 20+ content pieces per week using Canva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
