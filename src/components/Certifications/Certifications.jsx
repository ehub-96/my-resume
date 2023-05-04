import React, { Component } from "react";
import { MortarboardFill, Mortarboard} from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";





export class Certifications extends Component {
  render() {
    return (
      <div className='Certifications'>
            <h1 className='s-title'>Certifications</h1>
            <div className="row">

            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    Data Engineering
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    
                      <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">


                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              Data Talks Club Data Engineering <div class="btn-container text-center"><a href="../../../DTC-DE-2023.pdf" target="_blank" rel="noopener noreferrer"><Mortarboard className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="See Diploma" /></a></div>
                            </button>
                          </h2>
                          <div id="flush-collapseOne" class="accordion-collapse collapse">
                          <strong>2023 Cohort</strong> by Data Talks Club. An intensive 14-week training program that provided a comprehensive and immersive learning experience with both pre recorded classes and live tutoring with Alexey Grigorev and other instructors focusing on real-world projects and industry-relevant tools and techniques: 
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
                                <div>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Data Analysis
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    
                      <div class="accordion accordion-flush" id="accordionFlushExample1">
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
                                Google Data Analytics Certificate<div class="btn-container text-center"><a href="../../../GDA.pdf" target="_blank" rel="noopener noreferrer"><MortarboardFill className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="See Diploma" /></a></div>
                              </button>
                            </h2>
                            <div id="flush-collapseOne1" class="accordion-collapse collapse">
                              <div class="accordion-body">Data Analytics Specialization <strong>By Google</strong>, a comprehensive 6 months program of 8 courses, with deep understanding of industry practices and key role skills. </div>
                              <div className="col">
                                      <p className="p-about">
                                      <li>The Role of Data</li>
                                      <li>Data-Driven Decisions</li>
                                      <li>Data Exploratio & Data Cleaning</li>
                                      <li>Data Visualization</li>
                                      <li>Data & R</li>                                      
                                      </p>
                                      </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo1" aria-expanded="false" aria-controls="flush-collapseTwo1">
                              Data Analysis & Visualization <div class="btn-container text-center"><a href="../../../DA.pdf" target="_blank" rel="noopener noreferrer"><Mortarboard className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="See Diploma" /></a></div>
                              </button>
                            </h2>
                            <div id="flush-collapseTwo1" class="accordion-collapse collapse">
                              <div class="accordion-body"><strong>2022 Python Data Analysis & Visualization Masterclass</strong> by Colt Steele in Udemy. This course provides an in-depth understanding of the Pandas, Matplotlib, and Seaborn libraries, as well as other essential tools for data analysis using a wide range of real-world datasets to ensure hands-on experience, covering:</div>
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
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree1" aria-expanded="false" aria-controls="flush-collapseThree1">
                              MySQL <div class="btn-container text-center"><a href="../../../MySQL.pdf" target="_blank" rel="noopener noreferrer"><MortarboardFill className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="See Diploma"/></a></div>
                              </button>
                            </h2>
                            <div id="flush-collapseThree1" class="accordion-collapse collapse">
                              <div class="accordion-body"><strong>The Ultimate MySQL Bootcamp</strong> by Colt Steele in Udemy. This course is a comprehensive introduction to databases and SQL syntax and complex queries.</div>
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



                  </div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Bachelors & Others
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    
                    <div class="accordion accordion-flush" id="accordionFlushExample2">
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
                               Bachelor's <div class="btn-container text-center"><a href="../../../MKTN.pdf" target="_blank" rel="noopener noreferrer"><Mortarboard className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="See Diploma" /></a></div>
                  
                              </button>
                            </h2>
                            <div id="flush-collapseOne2" class="accordion-collapse collapse">
                              <div class="accordion-body"><strong>Business Management and Marketing</strong> bachelors from the Córdoba National University. This bachelor's program offers comprehensive training in modern marketing, business strategy, and legal principles. The program places a strong emphasis on practical learning, with a focus on real-world scenarios and hands-on experience.</div>
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
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo2">
                              Python Bootcamp <div class="btn-container text-center"><a href="../../../Python.pdf" target="_blank" rel="noopener noreferrer"><MortarboardFill className='card-icon2' data-bs-toggle="tooltip" data-bs-placement="top" title="See Diploma" /></a></div>
                              </button>
                            </h2>
                            <div id="flush-collapseTwo2" class="accordion-collapse collapse">
                              <div class="accordion-body"><strong> Python essentials.</strong> by Colt Steele in Udemy. This course explores everything from variables to data structures to object-oriented programming and modules, introducing to pandas, flask, scikitlearn and django:</div>
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