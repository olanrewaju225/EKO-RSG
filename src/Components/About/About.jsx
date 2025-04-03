import React from 'react'
import './About.css'
import about_img from '../../assets/bg7.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left' data-aos="zoom-in" data-aos-duration="1500">
            <img src={about_img} alt=''className='about-img'/>

        </div>

        <div className="about-right" data-aos="fade-left" data-aos-duration="2000">
            <h3>ABOUT US</h3>
            <h2>
              Get the Best Culinary Experience
            </h2>
            <p>Welcome to <strong>EKO-RSG</strong>, where we bring you the finest, most flavorful roasted guinea fowl straight from the farm to your plate. Our mission is to provide you with a delicious and healthy alternative to traditional meats, crafted with love and care. We take pride in offering you guinea fowl that’s not only rich in taste but also packed with essential nutrients.

            At EKO-RSG, we are committed to bringing you an organic product that’s grown and raised without chemicals or harmful additives. We believe in sustainable farming practices that nurture the land and provide you with healthy, nutritious food. Whether you're a health-conscious eater or simply someone who loves good food, our guinea fowl is perfect for you!</p>


            {/* <p>About Us
Welcome to [Business Name], where we bring you the finest, most flavorful roasted guinea fowl straight from the farm to your plate. Our mission is to provide you with a delicious and healthy alternative to traditional meats, crafted with love and care. We take pride in offering you guinea fowl that’s not only rich in taste but also packed with essential nutrients.

At [Business Name], we are committed to bringing you an organic product that’s grown and raised without chemicals or harmful additives. We believe in sustainable farming practices that nurture the land and provide you with healthy, nutritious food. Whether you're a health-conscious eater or simply someone who loves good food, our guinea fowl is perfect for you!

Why Choose Our Roasted Guinea Fowl?
1. Organic and Healthy
We believe in the power of natural food. Our guinea fowl are raised in a healthy, organic environment where they are free to roam and forage, as nature intended. This means they are not exposed to harmful pesticides, hormones, or antibiotics. By choosing our roasted guinea fowl, you’re ensuring that your meal is free from chemicals and packed with natural goodness. Our commitment to organic farming practices ensures that what you’re eating is both safe and nourishing for your body.

2. Rich in Essential Vitamins
Guinea fowl is an excellent source of essential vitamins that are vital for your overall health and well-being. They are particularly high in vitamins B6 and B12, which play a crucial role in energy production and the health of your nervous system. The meat is also rich in niacin (Vitamin B3), which helps support the digestive and skin health, along with folate (Vitamin B9), necessary for cell growth and repair.

Eating guinea fowl regularly can help you maintain healthy skin, energy levels, and cognitive function. Plus, it’s a fantastic way to ensure that you're getting the vitamins your body needs for daily function without the excess fat found in other meats.

3. Lean Meat
When it comes to choosing meat, lean cuts are an excellent option for those looking to maintain a healthy diet. Guinea fowl meat is naturally lean, making it an ideal protein choice for anyone who is watching their calorie intake or aiming to reduce body fat. Compared to other poultry, guinea fowl has less fat and fewer calories, making it a perfect choice for those pursuing a weight-conscious or low-fat lifestyle.

The lean meat is tender and flavorful, making it a great addition to various dishes without compromising taste. You can enjoy a hearty meal without the guilt of consuming excess fats.

4. Not Fed with Chemicals
One of the most significant concerns with modern meat production is the use of chemicals and additives in animal feed. At [Business Name], we are proud to say that our guinea fowl are raised naturally and are never fed with any chemical-based feed or growth-promoting additives. We believe in a more holistic approach to farming, where the health of the animal comes first.

Our guinea fowl are fed a natural diet that enhances their flavor and nutritional content, giving you peace of mind knowing that your food is free from harmful substances. Our commitment to ethical farming practices ensures that every bird is raised in a safe, healthy environment, and that quality comes first in everything we do.

5. Lower Cholesterol
For those who are conscious of their cholesterol levels, guinea fowl is a wonderful option. Compared to other meats like beef or pork, guinea fowl is much lower in saturated fat and cholesterol. This makes it a heart-healthy choice for individuals looking to maintain healthy cholesterol levels and reduce their risk of cardiovascular diseases.

Research has shown that consuming lean poultry like guinea fowl can help lower overall cholesterol levels, especially when incorporated into a balanced diet. So, by choosing our roasted guinea fowl, you’re not just making a tasty choice – you’re making a heart-smart decision.

We hope that you enjoy the many benefits of our roasted guinea fowl. Whether you're looking for a healthy, lean protein or simply a unique and flavorful meal, we are here to provide you with a product that’s both nourishing and delicious. Join us in celebrating the joy of eating healthy and sustainable food, and experience the difference that organic, naturally raised guinea fowl can make in your diet.

Thank you for choosing [Business Name]!

This draft covers all the key points you mentioned in detail, highlighting the organic, healthy, and nutritious aspects of your product, while also positioning your guinea fowl as a sustainable and ethical choice for consumers.</p> */}
        </div>
      
    </div>
  )
}

export default About
