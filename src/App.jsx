import { useState } from 'react'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';



import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  

  return (
    <Router>
      <>
        <Navbar />
        <Hero />
        
        <div className='container'>
          <Title subTitle='Our Services' title='what we offer'/>
          <Services />

          <About />

          <Title subTitle='Our Blog' title='Understand The Best Information About Our Culinary Pattern' />
          <Blog />

          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact />

        </div>

        <Footer />

      
      </>
    </Router>
  )
}

export default App
