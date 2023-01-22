import React from 'react'
import Ehub from '../../assets/ehub.png'


const About = () => {
  return (
    <div className="row">
        <div className="col-sm-6">
            <div className="main-title">
                <img src={Ehub}/>
                <h2 className='title'>Erik Hub - Data Analyst</h2>
                <div class="btn-container text-center"><a href="../../../ErikHubResume.pdf" download="ErikHubResume.pdf" class="btn btn-vd bg-danger">Download CV</a></div>
                
                
                
              
                          
            </div>
           
        </div>

        <div className="col">
            <p className="p-about">
              Hello World!! I'm Erik, a 27 year old junior pythonista that is developing his skills in Data Science. With a solid marketing background and some logistics experience, now I'm looking for a new formal start in the tech industry.
              <br></br>
              A logistics & SCM dropout turned marketer (Businesses Management and Marketing) from the Córdoba National University. I'm freelancing for a variety of local small business.
              <br></br> Now, I'm working towards a full-time career in DA, and looking for moving back to Europe, but this time with my partner.
            </p>
        </div>
    </div>
  )
}

export default About



