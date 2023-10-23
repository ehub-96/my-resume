import React from 'react'
import Ehub from '../../assets/ehub.png'


const About = () => {
  return (
    <div className="row">
        <div className="col-sm-6">
            <div className="main-title">
                <img src={Ehub}/>
                <h2 className='title'>Erik Hub - Data Engineer</h2>
                <div class="btn-container text-center">

                  <div class="row">
                    <div class="col-md-6">
                     <a class="btn btn-vd bg-danger" href="../../../ErikHubResume-.pdf" download="ErikHubResume-.pdf" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Human-Friendly Resume">CV for Recruiters</a>

                    </div>
                    <div class="col-md-6">
                      <a class="btn btn-vd bg-danger" href="../../../ErikHubResumeATS.pdf" download="ErikHubResumeATS.pdf" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Machine-Friendly Resume">ATS Resume</a>


                    </div>
                  </div>

                  </div>
        
                                                        
            </div>
           
        </div>

        <div className="col">
            <p className="p-about">
              Hello World!! I'm Erik, Data Engineer.
              <br></br>
              During the past years I've had opportunity to work closely with small businesses and family-owned shops and stores around the United States, supporting their digital transformation. Through data analysis and logistics optimization, I've helped these businesses achieve efficiency, reduce costs, improve their bottom line and greater goals, I've also been able to develop effective campaigns that drive business growth and customer engagement. Create the environment for data-driven decision-making and implementing effective solutions is always the objective.
              <br></br> Now, Freelancing from Argentina.
            </p>
        </div>
    </div>
  )
}

export default About



