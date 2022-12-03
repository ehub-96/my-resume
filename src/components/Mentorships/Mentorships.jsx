import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import cheems from '../../assets/card-image/cheems.jpg'

export class Mentorships {
    render() {
      return (
        <div className='Mentorships'>
            <h1 className='s-title'>Mentorships</h1>
            <div className="row">
                
                    <div class="card-group">
                        <div class="card border-danger mb-3" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Mentorships;
