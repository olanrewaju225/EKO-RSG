import React from 'react'
import './About.css'
import about_img from '../../assets/bg7.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt=''className='about-img'/>

        </div>

        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>
              Get the Best Culinary Experience
            </h2>
            <p>Welcome to <strong>EKO-RSG</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat, rem quibusdam libero, facere eum cumque neque iusto quae harum at repellendus itaque illum, quisquam id eos corrupti quidem? Quam, laudantium.</p>

            <p>Our Mission, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolorum adipisci facere quidem, iusto odit aliquam nihil repellat quo, officia doloremque dignissimos tenetur nobis dicta.</p>
            <p>At EKO-RSG Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nam quibusdam doloremque quasi, ad consequuntur exercitationem ex sequi delectus earum quis blanditiis fugit aut praesentium?.</p>

            <p>Check out our collection of tatsty flavored roasted guinea foel recipes</p>
        </div>
      
    </div>
  )
}

export default About
