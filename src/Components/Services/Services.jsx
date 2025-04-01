import React from 'react'
import './Services.css'

import health from '../../assets/bg7.jpg'
import taste from '../../assets/bg8.jpg'
import cost from '../../assets/bg9.jpg'


import healthy from '../../assets/healthyheart.png'
import tasty from '../../assets/deliciousfood.png'
import costly from '../../assets/sales.png'


const Services = () => {
  return (
    <div className='services'>
        <div className='service' data-aos="flip-left" data-aos-duration="1000">
            <img src={taste} alt=''/>
            <div className='caption'>
                <img src={tasty} alt=''/>
                <p>Mouth-Watering Guinea Fowl </p>
                


            </div>

        </div>
        <div className='service' data-aos="flip-right" data-aos-duration="1000">
            <img src={health} alt=''/>
            <div className='caption'>
                <img src={healthy} alt=''/>
                <p>Healthy Recipe and Ingredients </p>


            </div>

        </div>

        <div className='service' data-aos="flip-left" data-aos-duration="1000">
            <img src={cost} alt=''/>
            <div className='caption'>
                <img src={costly} alt=''/>
                <p>Cost Effective and Friendly</p>


            </div>

        </div>
      
    </div>
  )
}

export default Services

