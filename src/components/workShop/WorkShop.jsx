import React from 'react'
import workShop_data from '../data/workShop.json'
import Card from './Card'
const PersonalProjects = () => {
  return (
    <div className='row'>
      <h1 className='s-title'>Personal Projects</h1>
        {
          workShop_data.map(e=>{return <Card props={e}/>})
        }
        
    </div>
  )
}

export default PersonalProjects