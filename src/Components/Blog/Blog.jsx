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
                
                <h3>Lorem, ipsum dolor.</h3>
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, facere obcaecati.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nisi magni dicta <br />
                
                incidunt dolor, in soluta accusantium consequatur obcaecati tempore pariatur rem culpa unde veniam corporis possimus vitae natus mollitia. Assumenda repellat et recusandae rem quibusdam architecto ullam reprehenderit soluta quisquam, iure ea ex magni provident repudiandae corporis quam consectetur!</p>

                
                

            </div>

        </div>

        <div className='ft'>
            <div className='ft-left' data-aos="fade-down-right">
                <img src={gallery_2} className='ft-img'/>

            </div>
            <div className="ft-right" data-aos="fade-up-left">
                <h3>Featured</h3>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur atque consectetur ex maiores excepturi natus numquam doloribus amet sint? Recusandae iusto consequuntur consectetur officiis facilis accusamus natus soluta tempore obcaecati ut neque, expedita ducimus consequatur reiciendis. Eligendi pariatur obcaecati repellat natus ipsum quod molestiae blanditiis veniam ea hic, tenetur nisi dicta quis distinctio, tempora magnam rerum cum optio sequi? Nam cum quos optio consectetur recusandae doloremque porro laudantium similique.</p>
            </div>

        </div>

        <Title subTitle='Upcoming'/>
        <section className='upcoming-article'>

            <div className='upcoming-content'>


                <div className="article-card" data-aos="fade-right">
                    <img src={gallery_4} className='article-image'/>
                    <h3 className='article-title'>
                        The Future Recipe_ The secret Ingredients
                    </h3>
                    <p className='article-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, nesciunt? consectetur adipisicing elit. Obcaecati, nesciunt?</p>
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
                    <p className='article-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, nesciunt? consectetur adipisicing elit. Obcaecati, nesciunt?</p>
                    <p className="article-date">Coming on: April 05, 2025</p>
                    <a href="#" class="read-more">Read more</a>
                </div>


            </div>

            <div className='upcoming-content'>
                <div className="article-card" data-aos="fade-left">
                    <img src={gallery_6} className='article-image'/>
                    <h3 className='article-title'>
                        The Top Notch Culinary Experience
                    </h3>
                    <p className='article-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, nesciunt? consectetur adipisicing elit. Obcaecati, nesciunt?</p>
                    <p className="article-date">Coming on: july 25, 2025</p>
                    <a href="#" class="read-more">Read more</a>
                </div>


            </div>



        </section>

    </div>
  )
}

export default Blog
