import React, { Component } from "react";
import { MortarboardFill, Mortarboard} from 'react-bootstrap-icons';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export class Certifications extends Component {
    render() {
      return (
        <div className='Certifications'>
            <h1 className='s-title'>Certifications</h1>
            <div className="row">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h5 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    Data Analysis & Visualization <div class="btn-container text-center"><a href="../../../DA.pdf" target="_blank" rel="noopener noreferrer"><MortarboardFill className='card-icon2' /></a></div>
                  </button>
                </h5>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    <strong>2022 Python Data Analysis & Visualization Masterclass</strong> by Colt Steele in Udemy. 201 lectures with a total of 20.5 hours. This course deeply explores Pandas, Matplotlib, Seaborn while working with Jupyter Notebooks, accomplishing:
                    <div className="col">
                    <p className="p-about">
                    <li>Read and manipulate Datasets</li>
                    <li>DataFrames and Series objects</li>
                    <li>Organize, filter, clean, aggregate, and analyze DataFrames</li>
                    <li>Extract and manipulate date, time, and textual information from data</li>
                    <li>Hierarchical Indexing</li>
                    <li>Merge Datasets</li>
                    <li>Create complex visualizations</li>
                    </p>
                    </div>

                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h1 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    MySQL <div class="btn-container text-center"><a href="../../../MySQL.pdf" target="_blank" rel="noopener noreferrer"><Mortarboard className='card-icon2' /></a></div>
                  </button>
                </h1>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                    <strong>The Ultimate MySQL Bootcamp</strong> by Colt Steele in Udemy. 651 lectures with a total of 37.5 hours. This course is a gentle but comprehensive introduction to MySQL:
                    <div className="col">
                    <p className="p-about">
                    <li>SQL syntax</li>
                    <li>Reports</li>
                    <li>Aggregate Functions</li>
                    <li>SQL joins</li>
                    <li>MySQL 8.x Window Functions</li>
                    <li>MySQL database views and virtual tables</li>
                    <li>Design and implement complex database schemas</li>
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h1 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Accordion Item #3 <div class="btn-container text-center"><a href="../../../ErikHubResume.pdf" target="_blank" rel="noopener noreferrer"><MortarboardFill className='card-icon2' /></a></div>
                  </button>
                </h1>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                   </div>
                </div>
              </div>
              <div class="accordion-item">
                <h1 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    Accordion Item #4 <div class="btn-container text-center"><a href="../../../ErikHubResume.pdf" target="_blank" rel="noopener noreferrer"><Mortarboard className='card-icon2' /></a></div>
                  </button>
                </h1>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                  <div class="accordion-body">
                    <strong>This is the fourth item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        );
    }
}

export default Certifications;