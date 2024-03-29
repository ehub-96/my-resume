import React from 'react'

const content = ({props}) => {
  return (
    <div className={`tab-pane fade ${props.active ? 'show active' : ''}`} id={`pills-${props.id}`} role="tabpanel" aria-labelledby={`pills-${props.id}-tab`}>
        <p>{props.desc}</p>
          <ul className='ul-list'>
           { props.data.map(e=>{
                return <li className='li-list' key={e.replace(' ','')+'-key-content'}>{e}</li>
            })}
          </ul>
    </div>
  )
}

export default content