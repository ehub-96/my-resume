import React from 'react'

const list = ({props}) => {
  return (
    <li className="nav-item" role="presentation" key={props.id+'-key'}>
        <button className={`nav-link ${props.active? 'active' : null} `} id={`pills-${props.id}-tab`}
         data-bs-toggle="pill" data-bs-target={`#pills-${props.id}`} type="button" role="tabIndex" aria-controls="pills-home" aria-selected={props.active?'true' : 'false'}>
            {props.title}
        </button>
    </li>
  )
}

export default list