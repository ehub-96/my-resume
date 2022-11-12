import React from 'react'

const list = ({props}) => {
  return (
    <li className="nav-item" role="presentation" key={props.title.replace(' ','')+'-key'}>
        <button className={`nav-link ${props.active? 'active' : null} `} id={`pills-${props.title.replace(' ','')}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${props.title.replace(' ','')}`} type="button" role="tabIndex" aria-controls="pills-home" aria-selected={props.active?'true' : 'false'}>
            {props.title}
        </button>
    </li>
  )
}

export default list