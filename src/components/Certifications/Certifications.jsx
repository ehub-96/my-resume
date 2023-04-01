import React, { Component } from "react";
import { MortarboardFill, Mortarboard} from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";





export class Certifications extends Component {
  render() {
    return (
      <div className='Certifications'>
        <div>
          <h1 className='s-title'>Certifications</h1>
          <p>(Click the academic cap/trencher to see diploma)</p>
        </div>

          <div className="row">
          <div class="accordion" id="accordionPanelsStayOpenExample">

          <div class="accordion-item">
              <h5 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  Data Engineering<div class="btn-container text-center"><a href="" target="_blank" rel="noopener noreferrer"><Mortarboard className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="Waiting for Diploma" /></a></div>
                </button>
              </h5>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                 <strong>2023 Cohort Data Engineering Zoomcamp</strong> by Data Talks Club. An intensive 14-week training program that provided a comprehensive and immersive learning experience with both pre recorded classes and live tutoring with Alexey Grigorev and other instructors focusing on real-world projects and industry-relevant tools and techniques: 
                  <div className="col">
                  <p className="p-about">
                  <li>Docker and containerization</li>
                  <li>Workflow Orchestration</li>
                  <li>Data Warehousing and Cloud Services</li>
                  <li>Analyitics Engineering</li>
                  <li>Batch Processing</li>
                  <li>Streaming</li>
                
                  </p>
                  </div>

                  </div>
                </div>
              </div>


            <div class="accordion-item">
              <h5 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Data Analysis & Visualization <div class="btn-container text-center"><a href="../../../DA.pdf" target="_blank" rel="noopener noreferrer"><MortarboardFill className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="See Diploma" /></a></div>
                </button>
              </h5>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <strong>2022 Python Data Analysis & Visualization Masterclass</strong> by Colt Steele in Udemy. A total of 20.5 hours. This course provides an in-depth understanding of the Pandas, Matplotlib, and Seaborn libraries, as well as other essential tools for data analysis using a wide range of real-world datasets to ensure hands-on experience, covering:
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
                <h5 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    MySQL <div class="btn-container text-center"><a href="../../../MySQL.pdf" target="_blank" rel="noopener noreferrer"><Mortarboard className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="See Diploma"/></a></div>
                  </button>
                </h5>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div class="accordion-body">
                    <strong>The Ultimate MySQL Bootcamp</strong> by Colt Steele in Udemy. A total of 37.5 hours. This course is a comprehensive introduction to databases and SQL syntax and complex queries.
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
                <h5 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    Python Bootcamp <div class="btn-container text-center"><a href="../../../Python.pdf" target="_blank" rel="noopener noreferrer"><MortarboardFill className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="See Diploma" /></a></div>
                  </button>
                </h5>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                  <div class="accordion-body">
                    <strong> Python essentials.</strong> by Colt Steele in Udemy. A total of 14.5 hours. This course explores everything from variables to data structures to object-oriented programming and modules, introducing to pandas, flask, scikitlearn and django:
                    <div className="col">
                    <p className="p-about">
                    <li>Variables</li>
                    <li>Strings and string methods</li>
                    <li>Booleans and boolean logic</li>
                    <li>Loops</li>
                    <li>Lists, Dictionaries and Tuples</li>
                    <li>PIP</li>
                    <li>Object Oriented Programming</li>
                    <li>Classes</li>
                    </p>
                    </div>
                   </div>
                </div>
              </div>
              <div class="accordion-item">
                <h5 class="accordion-header" id="panelsStayOpen-headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                  Business Management & Marketing<div class="btn-container text-center"><a href="../../../MKTN.pdf" target="_blank" rel="noopener noreferrer"><Mortarboard className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="See Diploma" /></a></div>
                  </button>
                </h5>
                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                  <div class="accordion-body">
                    <strong>Business Management and Marketing</strong> associate's from the Córdoba National University. With a total of 800 hours. This intensive accelerated bachelor's program offers comprehensive training in modern marketing, business strategy, and legal principles. The program places a strong emphasis on practical learning, with a focus on real-world scenarios and hands-on experience.
                    <div className="col">
                    <p className="p-about">
                    <li>Digital Marketing</li>
                    <li>Social Media Management</li>
                    <li>BI Tools</li>
                    <li>Business Operations</li>
                    </p>
                    </div>
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