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
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <strong>BRUH </strong> BRUH BRUH BRUH <code>CHAD</code>GIGA BRUH
                      <div class="accordion" id="accordionPanelsStayOpenExample">


                        <div class="accordion accordion-flush">
                          <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#nestedpanelsStayOpen-collapseOne" aria-expanded="false" aria-controls="nestedpanelsStayOpen-collapseOne">
                              Nested Accordion Item #1
                            </button>
                          </h2>
                          <div id="nestedpanelsStayOpen-collapseOne" class="accordion-collapse collapse">
                            <div class="accordion-body">
                              <strong>BRUH </strong> BRUH BRUH BRUH <code>CHAD</code>GIGA BRUH
                            </div>
                          </div>
                        </div>
                        <div class="accordion accordion-flush">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nestedpanelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="nestedpanelsStayOpen-collapseTwo">
                            Nested Accordion Item #2
                            </button>
                          </h2>
                          <div id="nestedpanelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                              <strong>This is the second item's accordion body.</strong>BRUH BRUH<code>CHAD</code>GIGA BRUH
                            </div>
                          </div>
                        </div>
                        <div class="accordion accordion-flush">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nestedpanelsStayOpen-collapseThree" aria-expanded="false" aria-controls="nestedpanelsStayOpen-collapseThree">
                            Nested Accordion Item #3
                            </button>
                          </h2>
                          <div id="nestedpanelsStayOpen-collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body">
                              <strong>BRUH.</strong>BRUH BRUH<code>CHAD</code>GIGA BRUH
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
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>BRUH BRUH<code>CHAD</code>GIGA BRUH
                            <div class="accordion accordion-flush">
                                <h2 class="accordion-header">
                                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#nestedpanelsStayOpen1-collapseOne" aria-expanded="false" aria-controls="nestedpanelsStayOpen1-collapseOne">
                                    Nested Accordion Item #1
                                  </button>
                                </h2>
                                <div id="nestedpanelsStayOpen1-collapseOne" class="accordion-collapse collapse">
                                  <div class="accordion-body">
                                    <strong>BRUH </strong> BRUH BRUH BRUH <code>CHAD</code>GIGA BRUH
                                  </div>
                                </div>
                              </div>
                              <div class="accordion accordion-flush">
                                <h2 class="accordion-header">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nestedpanelsStayOpen1-collapseTwo" aria-expanded="false" aria-controls="nestedpanelsStayOpen1-collapseTwo">
                                  Nested Accordion Item #2
                                  </button>
                                </h2>
                                <div id="nestedpanelsStayOpen1-collapseTwo" class="accordion-collapse collapse">
                                  <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong>BRUH BRUH<code>CHAD</code>GIGA BRUH
                                  </div>
                                </div>
                              </div>
                              <div class="accordion accordion-flush">
                                <h2 class="accordion-header">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nestedpanelsStayOpen1-collapseThree" aria-expanded="false" aria-controls="nestedpanelsStayOpen1-collapseThree">
                                  Nested Accordion Item #3
                                  </button>
                                </h2>
                                <div id="nestedpanelsStayOpen1-collapseThree" class="accordion-collapse collapse">
                                  <div class="accordion-body">
                                    <strong>BRUH.</strong>BRUH BRUH<code>CHAD</code>GIGA BRUH
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
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <strong>BRUH.</strong>BRUH BRUH<code>CHAD</code>GIGA BRUH
                    </div>
                  </div>
              </div>
            </div>
          </div>




            
        
        
        );
    }
}

export default Certifications;