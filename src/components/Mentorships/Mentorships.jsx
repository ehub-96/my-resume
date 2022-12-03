import React, { Component } from "react";
import { Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Ehub from '../../assets/ehub.png'

export class Mentorships extends Component {
    render() {
      return (
                <div className='Mentorships'>
                    <h1 className='s-title'>Mentorships</h1>
                    <div className="row">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card border-danger mb-3">
      <img src="Ehub" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-danger mb-3">
      <img src="Ehub" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-danger mb-3">
      <img src="Ehub" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-danger mb-3">
      <img src="Ehub" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
        );
    }
}

export default Mentorships;
