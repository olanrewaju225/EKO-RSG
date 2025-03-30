import React from 'react'
import './Services.css'

import health from '../../assets/bg7.jpg'
import taste from '../../assets/bg8.jpg'
import cost from '../../assets/bg9.jpg'


import devicee from '../../assets/healthy.png'
import tool from '../../assets/tools.png'
import sales from '../../assets/sales.png'


const Services = () => {
  return (
    <div className='services'>
        <div className='service'>
            <img src={health} alt=''/>
            <div className='caption'>
                <img src={devicee} alt=''/>
                <p>Mouth-Watering Guinea Fowl </p>
                


            </div>

        </div>
        <div className='service'>
            <img src={taste} alt=''/>
            <div className='caption'>
                <img src={tool} alt=''/>
                <p>Healthy Recipe and Ingredients </p>


            </div>

        </div>

        <div className='service'>
            <img src={cost} alt=''/>
            <div className='caption'>
                <img src={sales} alt=''/>
                <p>Cost Effective and Friendly</p>


            </div>

        </div>
      
    </div>
  )
}

export default Services

