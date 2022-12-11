import React, { Component } from "react";
import { Linkedin, Github, Twitter } from 'react-bootstrap-icons';
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



export class Mentorships extends Component {
  render() {
    return (
        <div className='Mentorships'>
            <h1 className='s-title'>Mentorships</h1>
            <div className="row">
            <div className="row">
              <p>This area is dedicated to my friends who convinced me to learn coding and pushed me to get a foot in the Tech Industry.</p>
            </div>

            
          
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card border-danger mb-3">
                  <img src="https://writedirection.com/website/wp-content/uploads/2016/09/blank-profile-picture-973460_960_720.png" class="card-img-top2" alt=""/>
                  <div class="card-body">
                    <h5 class="card-title">Gastón Gigena</h5>
                    <p class="card-text">QA engineer at Avature, Computer technician and Python freelance developer.</p>
                  </div>
                  <div class="card-footer">
                  <div className="col-sm text-center">
                    
                    <a href="https://www.linkedin.com/in/gaston-gigena/" target="_blank" rel="noopener noreferrer"><Linkedin className='card-icon2' /></a>
                    
                  </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border-danger mb-3">
                  <img src="https://writedirection.com/website/wp-content/uploads/2016/09/blank-profile-picture-973460_960_720.png" class="card-img-top2" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Erwin Arndt</h5>
                    <p class="card-text">Office IT Administrator - Operations Technician at Westpay AB.</p>
                  </div>
                  <div class="card-footer">
                  <div className="col-sm text-center">
                    
                    <a href="https://www.linkedin.com/in/erwinjohannarndt/" target="_blank" rel="noopener noreferrer"><Linkedin className='card-icon2' /></a>
                    
                  </div>
                  </div>
                </div>
              </div>
              {/* <div class="col">
                <div class="card border-danger mb-3">
                  <img src="https://writedirection.com/website/wp-content/uploads/2016/09/blank-profile-picture-973460_960_720.png" class="card-img-top2" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Lucas Maldonado</h5>
                    <p class="card-text">-
                    -</p>
                  </div>
                  <div class="card-footer">
                  <div className="col-sm text-center">
                    <a href="https://github.com/ehub-96" target="_blank" rel="noopener noreferrer"><Github className='card-icon2' /></a>
                    <a href="_blank" target="_blank" rel="noopener noreferrer"><Linkedin className='card-icon2' /></a>
                    <a href="https://twitter.com/ehub96?t=hQ_1F1a5bBjxX6k1RJCqQg&s=08" target="_blank" rel="noopener noreferrer"><Twitter className='card-icon2' /></a>
                  </div>
                  </div>
                </div>
              </div> */}
            </div>
          
            

            </div>
        </div>
      );
  }
}

export default Mentorships;
