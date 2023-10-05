import React from 'react'
import './Programs.css'
import {programsData} from '../../datos/programsData'
import RightArrow from '../../image/rightArrow.png'

const programs = () => {
  return (
    <div className="programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
        
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default programs