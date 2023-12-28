import React from 'react';
import Ehub from '../../assets/ehub.png';

const About = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="main-title">
          <img src={Ehub} alt="Ehub Logo" />
          <h2 className="title">Data Analyst - Compliance Specialist</h2>
          <div className="btn-container text-center">
            <div className="row">
              <div className="col-md-4">
                <a
                  className="btn btn-vd bg-danger"
                  href="../../../ErikHubResume-.pdf"
                  download="ErikHubResume-.pdf"
                  target="_blank"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Human-Friendly Resume"
                >
                  CV for Recruiters
                </a>
              </div>
              <div className="col-md-4">
                {/* Your new button goes here */}
                <a
                  className="btn btn-vd bg-primary"
                  href="/your-new-link"
                  target="_blank"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Your New Button Tooltip"
                >
                  Your New Button
                </a>
              </div>
              <div className="col-md-4">
                <a
                  className="btn btn-vd bg-danger"
                  href="../../../ErikHubResumeATS.pdf"
                  download="ErikHubResumeATS.pdf"
                  target="_blank"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Machine & Printing Friendly Resume"
                >
                  ATS Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <p className="p-about">
          Hello World!! I'm Erik, a highly motivated professional in southern Sweden!. <br></br> With a background in Business Management & Marketing and Data Analysis, I've had the opportunity to work closely with small businesses and family-owned shops and stores around the United States and Argentina, supporting their digital transformation. Through data analysis and logistics optimization, I've helped these businesses achieve efficiency, reduce costs, improve their bottom line and greater goals, I've also been able to develop effective campaigns that drive business growth and customer engagement. Creating the environment for data-driven decision-making and implementing effective solutions is always the objective. My expertise includes Big Data Analytics, Data Pipelines, Backend development, Data Governance, and end-to-end pipeline development. I'm comfortable with Database Management and am dedicated to providing practical solutions that optimize data processes and systems. <br></br>
        </p>
      </div>
    </div>
  );
};

export default About;


