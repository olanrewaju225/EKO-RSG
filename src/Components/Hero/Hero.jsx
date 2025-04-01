import React, { useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

 

const Hero = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);


    return (
        <div className='hero container'>
            <div className='hero-text' data-aos="fade-up">
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
                <Link className='btn' to='contact' smooth={true} offset={-260} duration={500}  data-aos-delay="500">
                          Shop now <i className="ri-shopping-cart-line"></i>
                </Link>
            </div>
            
            
        </div>
    );
}

export default Hero;