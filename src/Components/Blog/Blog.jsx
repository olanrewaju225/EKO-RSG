import React from 'react'
import './Blog.css'

import gallery_1 from '../../assets/bg9.jpg'
import gallery_2 from '../../assets/bg8.jpg'
import Title from '../Title/Title'
import gallery_3 from '../../assets/bg7.jpg'
import gallery_4 from '../../assets/BG1.jpg'
import gallery_5 from '../../assets/BG2.jpg'

import gallery_6 from '../../assets/BG5.jpg'





const Blog = () => {
  return (
    <div className='blog'>
        <div className='dyk'>
            <div className='dyk-left' data-aos="zoom-out">
                <img src={gallery_1} className='dyk-img' />
                
                

            </div>

            <div className='dyk-right' data-aos="fade-right">
                
                <h3>Featured.</h3>
                <h2>Why Choose Our Roasted Guinea Fowl?</h2>
                <p>We believe in the power of natural food. Our guinea fowl are raised in a healthy, organic environment where they are free to roam and forage, as nature intended. This means they are not exposed to harmful pesticides, hormones, or antibiotics. By choosing our roasted guinea fowl, you’re ensuring that your meal is free from chemicals and packed with natural goodness. Our commitment to organic farming practices ensures that what you’re eating is both safe and nourishing for your body</p>
                
                

            </div>

        </div>

        <div className='ft'>
            <div className='ft-left' data-aos="fade-down-right">
                <img src={gallery_2} className='ft-img'/>

            </div>
            <div className="ft-right" data-aos="fade-up-left">
                <h3>Featured</h3>
                <h2>Lean Meat - A Weight Conscious, Low-Fat Lifestyle</h2>
                <p>When it comes to choosing meat, lean cuts are an excellent option for those looking to maintain a healthy diet. Guinea fowl meat is naturally lean, making it an ideal protein choice for anyone who is watching their calorie intake or aiming to reduce body fat. Compared to other poultry, guinea fowl has less fat and fewer calories, making it a perfect choice for those pursuing a weight-conscious or low-fat lifestyle.
                The lean meat is tender and flavorful, making it a great addition to various dishes without compromising taste. You can enjoy a hearty meal without the guilt of consuming excess fats.

                </p>
            </div>

        </div>

        <Title subTitle='Upcoming'/>
        <section className='upcoming-article'>

            <div className='upcoming-content'>


                <div className="article-card" data-aos="fade-right">
                    <img src={gallery_4} className='article-image'/>
                    <h3 className='article-title'>
                        Guinea Fowl : An Excellent Source of Essential Vitamins. 
                    </h3>
                    <p className='article-description'>Guinea fowl is an excellent source of essential vitamins that are vital for your overall health and well-being. They are particularly high...</p>
                    <p className="article-date">Coming on: April 15, 2025</p>
                    <a href="#" class="read-more">Read more</a>
                </div>


            </div>

            <div className='upcoming-content tall'>
                <div className="article-card" data-aos="fade-up">
                    <img src={gallery_5} className='article-image'/>
                    <h3 className='article-title'>
                        LifeStyle Medicine: integrating Food With Health
                    </h3>
                    <p className='article-description'> Join us in celebrating the joy of eating healthy and sustainable food, and experience the difference that organic, naturally raised guinea fowl can make in your diet.</p>
                    <p className="article-date">Coming on: April 05, 2025</p>
                    <a href="#" class="read-more">Read more</a>
                </div>


            </div>

            <div className='upcoming-content'>
                <div className="article-card" data-aos="fade-left">
                    <img src={gallery_6} className='article-image'/>
                    <h3 className='article-title'>
                        Lowering Cholesterol : Cardiovascular Diseases
                    </h3>
                    <p className='article-description'>For those who are conscious of their cholesterol levels, guinea fowl is a wonderful option. Compared to other meats like beef or pork, guinea fowl is...</p>
                    <p className="article-date">Coming on: july 25, 2025</p>
                    <a href="#" class="read-more">Read more</a>
                </div>


            </div>



        </section>

    </div>
  )
}

export default Blog
