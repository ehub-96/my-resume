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
              <p>LOREM IMPSUM LOREM IMPSUM LOREM IPSUM HAIL CEASAR</p>
            </div>

            
          
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card border-danger mb-3">
                  <img src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F658%2F936%2F411.jpg" class="card-img-top2" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  </div>
                  <div class="card-footer">
                  <div className="col-sm text-center">
                    <a href="https://github.com/ehub-96" target="_blank" rel="noopener noreferrer"><Github className='card-icon2' /></a>
                    <a href="https://www.linkedin.com/in/erik-hub-0346001b6/" target="_blank" rel="noopener noreferrer"><Linkedin className='card-icon2' /></a>
                    <a href="https://twitter.com/ehub96?t=hQ_1F1a5bBjxX6k1RJCqQg&s=08" target="_blank" rel="noopener noreferrer"><Twitter className='card-icon2' /></a>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border-danger mb-3">
                  <img src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F658%2F936%2F411.jpg" class="card-img-top2" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  </div>
                  <div class="card-footer">
                  <div className="col-sm text-center">
                    <a href="https://github.com/ehub-96" target="_blank" rel="noopener noreferrer"><Github className='card-icon2' /></a>
                    <a href="https://www.linkedin.com/in/erik-hub-0346001b6/" target="_blank" rel="noopener noreferrer"><Linkedin className='card-icon2' /></a>
                    <a href="https://twitter.com/ehub96?t=hQ_1F1a5bBjxX6k1RJCqQg&s=08" target="_blank" rel="noopener noreferrer"><Twitter className='card-icon2' /></a>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border-danger mb-3">
                  <img src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F658%2F936%2F411.jpg" class="card-img-top2" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  </div>
                  <div class="card-footer">
                  <div className="col-sm text-center">
                    <a href="https://github.com/ehub-96" target="_blank" rel="noopener noreferrer"><Github className='card-icon2' /></a>
                    <a href="https://www.linkedin.com/in/erik-hub-0346001b6/" target="_blank" rel="noopener noreferrer"><Linkedin className='card-icon2' /></a>
                    <a href="https://twitter.com/ehub96?t=hQ_1F1a5bBjxX6k1RJCqQg&s=08" target="_blank" rel="noopener noreferrer"><Twitter className='card-icon2' /></a>
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

export default Mentorships;
