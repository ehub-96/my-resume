import React from 'react'
import plotlydash from '../../assets/card-image/plotlydashlogo.png'

import { EyeFill } from 'react-bootstrap-icons';

const Card = ({props}) => {

  const images = {
    'plotlydash':{
      img: plotlydash
    }
  }
    
  
 
  return (
    <div className="col-sm-6" >
        <div className='card-mb3 custom-card' key={props.title+'-key'}>
        <div className="card-header text-center">
                <h5 rel="noopener noreferrer" target="_blank" className="card-title2"> {props.title}</h5 >
            </div>
            <img className="card-img-top" src={images[props.title.split(' ').join('').toLowerCase()].img}/>
            <div className="card-body">
                {/* <h5 className="card-title">{props.title}</h5> */}
                <p className="text-center">{props.desc}</p>
                {/* <button className='btn-vd'> */}
                  {/* <EyeFill className='card-icon'/> */}
                  <div class="btn-container text-center">
                  <a href={props.link} target="_blank" rel="noopener noreferrer" className='btn btn-vd bg-danger'>Demo</a>
                  
                {/* </button> */}
                <a href={props.git} target="_blank" rel="noopener noreferrer" className="card-text link">Github</a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Card