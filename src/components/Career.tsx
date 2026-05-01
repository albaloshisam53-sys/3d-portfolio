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
                <h4>Business Development Associate</h4>
                <h5>Skyword Labz</h5>
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              Conducted cold calls, managed social media for 3+ brands, CRM updates and prospect research.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Manager</h4>
                <h5>State of Designs</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Managed end-to-end delivery of a mobile app. Daily standups, sprint management, and client communication between dev team and stakeholders.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Manager</h4>
                <h5>Cynical Labs · Ebooknests · Maxcure </h5>
              </div>
              <h3>2022-24</h3>
            </div>
            <p>
              Managed concurrent social campaigns for 3 clients. Grew average engagement by 35%. Produced 20+ content pieces/week using Canva.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Store Manager</h4>
                <h5>S Abdul Khaliq</h5>
              </div>
              <h3>2020-21</h3>
            </div>
            <p>
              Managed daily operations, inventory, cash flow, and staff for a retail outlet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
