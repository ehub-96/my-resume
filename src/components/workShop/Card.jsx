import React from 'react'
import image_bands from '../../assets/card-image/Bands.png'
import image_slider from '../../assets/card-image/Slider.png'
import bands_report from '../../assets/card-image/BandsReportPowerBI.png'
import tableu_report from '../../assets/card-image/bandstableu.png'
import { EyeFill } from 'react-bootstrap-icons';

const Card = ({props}) => {

  const images = {
    'myfavoritebandsdashboard':{
      img: image_bands
    },
    'swedishbandssliderdashboard':{
      img: image_slider
    },
    'bandsoriginandspotifylisteners':{
      img: bands_report
    },
    'bandsbyyearandnumberofalbums':{
      img: tableu_report
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
                  <a href={props.link} target="_blank" rel="noopener noreferrer" className='btn btn-vd bg-danger'>View Demo</a>
                  
                {/* </button> */}
                <a href={props.git} target="_blank" rel="noopener noreferrer" className="btn btn-vd bg-danger">Github</a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Card