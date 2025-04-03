// import React from 'react'

// import './Contact.css'
// import msg_icon from '../../assets/msg-icon.png'
// import mail_icon from '../../assets/mail-icon.png'
// import phone_icon from '../../assets/phone-icon.png'
// import location_icon from '../../assets/location-icon.png'
// import white_arrow from '../../assets/white-arrow.png'
// import { useState } from 'react'
// import axios from 'axios'
// const Contact  = () => {
//   const [message , setMessage] = useState("")
//   const [name , setName] = useState("")
//   const [email , setEmail] = useState("")
//   const [loading , setLoading] = useState(false)
    
// const baseurl = "https://sendspear.onrender.com/api/message"


// const handleSubmit = async (e) => {
//     e.preventDefault()
//    setLoading(true)


//    const params =  new URLSearchParams({
//     userMail:"taofeekolatunji49@gmail.com",
//     userName:"Taofeek"
//    })

//    try{
//     const response = await axios.post(`${baseurl}?${params}` , {email , message , name})
//    } catch(error){
//       console.log(error)
//    }
//    finally{
//     setLoading(false)
//    }
// } 


//   return (
//     <div className='contact'>
//         <div className="contact-col" data-aos="zoom-in-up">
            
//             <h3>Send us a Message <i className="ri-mail-line"></i></h3>
//             <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our clients.</p>
//             <ul>
//                 <li><i className="ri-mail-line"></i> Contact@eko-rsg.city</li>
//                 <li><i className="ri-phone-line"></i> +2348037263182</li>
//                 <li><i className="ri-phone-line"></i> +2348037213336</li>
//                 <li><i className="ri-map-pin-line"></i>Block 41 flat, 1 Iponri Estate Rd, Surulere, Lagos.</li>

//             </ul>
            
            
//             <h3>Our Socials</h3>
//             <ul className='socials'>
//                 <li><a href='/' target="_blank"><i className="ri-instagram-line"></i></a></li>
//                 <li><a href='/' target="_blank"><i className="ri-facebook-fill"></i></a></li>
//                 <li><a href='/' target="_blank"><i className="ri-whatsapp-line"></i></a></li>
//                 <li><a href='/' target="_blank"><i className="ri-tiktok-line"></i></a></li>
//             </ul>
            
            
//         </div>

//         <div className="contact-col" data-aos="zoom-in-down">
//             <form onSubmit={handleSubmit}>
//                 <label>Your Name</label>
//                 <input onChange={(e) => setName(e.target.value)} value={name}  type="text" name="name" placeholder='Enter your name' required/>
                

//                 <label>Phone Number</label>
//                 <input type='tel' name='phone' placeholder='Enter your mobile number' required />
//                 <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' name='email' placeholder='email' required />
                
//                 <label>Write your message here</label>
//                 <textarea name='message' onChange={(e) => setMessage(e.target.value)} value={message}  rows='6' placeholder='Enter your message' required></textarea>
                
//                 <button type='submit' className='btn dark-btn' >Submit now <i class="ri-arrow-right-line"></i></button>
//             </form>
            
//         </div>
      
//     </div>
//   )
// }

// export default Contact 


import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const baseurl = 'https://sendspear.onrender.com/api/message';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const params = new URLSearchParams({
      userMail: 'taofeekolatunji49@gmail.com',
      userName: 'Taofeek',
    });

    try {
      const response = await axios.post(
        `${baseurl}?${params}`,
        { email, message, name, phone }
      );

      if (response.status === 200) {
        setSuccess('Message sent successfully!');
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (error) {
      setError('Error occurred. Please try again.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col" data-aos="zoom-in-up">
        <h3>
          Send us a Message <i className="ri-mail-line"></i>
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          clients.
        </p>
        <ul>
          <li>
            <i className="ri-mail-line"></i> ekorsg@2025.gmail.com
          </li>
          <li>
            <i className="ri-phone-line"></i> +2348037263182
          </li>
          <li>
            <i className="ri-phone-line"></i> +2348037213336
          </li>
          <li>
            <i className="ri-map-pin-line"></i>Block 41 flat, 1 Iponri Estate
            Rd, Surulere, Lagos.
          </li>
        </ul>

        <h3>Our Socials</h3>
        <ul className="socials">
          <li>
            <a href="https://www.instagram.com/ekoroastedsmoked_guinea_fowl?igsh=MTE5d2dyNmlmd2l3cg==" target="_blank">
              <i className="ri-instagram-line"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/AwoEko?mibextid=ZbWKwL" target="_blank">
              <i className="ri-facebook-fill"></i>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=08037263182" target="_blank">
              <i className="ri-whatsapp-line"></i>
            </a>
          </li>
          <li>
            <a href="https://tiktok.com/@bukkylovesgod" target="_blank">
              <i className="ri-tiktok-line"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-col" data-aos="zoom-in-down">
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}

          <button type="submit" className="btn dark-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Submit now'}{' '}
            <i className="ri-arrow-right-line"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
