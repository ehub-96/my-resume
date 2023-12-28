import React from 'react'
import Skills_data from '../data/skills.json'
import List from './list'
import Content from './content'
const Skills = () => {
  return (
    <div>
        <h1 className='s-title'>Skills, Expertise & Stack</h1>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {
                Skills_data.map(e=>{
                    return <List props={e}/>
                })
            }
        </ul>
        <div className="tab-content" id="pills-tabContent">
            {
                Skills_data.map(e=>{
                    return <Content props={e}/>
                })
            }
        </div>
    </div>
  )
}

export default Skills