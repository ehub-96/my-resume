import React from 'react'
import Ehub from '../../assets/ehub.png'


const About = () => {
  return (
    <div className="row">
        <div className="col-sm-6">
            <div className="main-title">
                <img src={Ehub}/>
                <h2 className='title'>Erik Hub - Data TAZO</h2>
                <div class="btn-container text-center">

                  <div class="row">
                    <div class="col-md-6">
                     <a class="btn btn-vd bg-danger" href="../../../ErikHubResume-.pdf" download="ErikHubResume-.pdf" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Human-Friendly Resume">Recruiter CV</a>

                    </div>
                    <div class="col-md-6">
                      <a class="btn btn-vd bg-danger" href="../../../ErikHubResumeATS.pdf" download="ErikHubResumeATS.pdf" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Machine-Friendly Resume">ATS CV</a>


                    </div>
                  </div>

                  </div>
        
                                                        
            </div>
           
        </div>

        <div className="col">
            <p className="p-about">
              Hello World!! I'm Erik, junior Data Professional, with a solid marketing background.
              <br></br>
              As logistics & SCM turned into marketing (Business Management and Marketing) from the Córdoba National University. I'm freelancing for a variety of local small businesses.
              <br></br> Now, I'm working towards a full-time career in the Data field.
            </p>
        </div>
    </div>
  )
}

export default About



