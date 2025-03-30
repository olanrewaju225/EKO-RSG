import React from 'react';
import Typewriter from 'typewriter-effect';
import './Hero.css';

 

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>
                  <Typewriter
                   options={{
                    strings: [
                      'Get The Best Taste',
                      'Closer To You Than You Think'
                    ],
                    autoStart: true,
                    loop: true
                  }}

                  />
                  
                
                       
                </h1>
                    
                
                <p>Deliciously Roasted Guinea Fowl - Fresh, Flavorful and Healthy!</p>
                <button className='btn'>
                Contact Us<i className='ri-shopping-cart-line'></i>
               </button>
            </div>
            
            
        </div>
    );
}

export default Hero;
