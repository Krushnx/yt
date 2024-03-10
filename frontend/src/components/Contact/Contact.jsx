
import './contact.css'
import bg from './bg1.png'
import plane from './paper-plane-solid.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

function Contact()
{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7nl9mse', 'template_7l4tuqd', form.current, {
        publicKey: '9-Cp-g7n9wJZAPinR',
      })
      .then(
        () => {
          Swal.fire({
            title: "Send!",
            text: "Your mail send successfully !!!",
            icon: "success"
          });
          form.current.reset();

          console.log('SUCCESS!');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
   
    
<div className="contact-form">
             <div className="contact-container">
                 <div className="contact-main">
                     <div className="contact-content">
                         <h2>Contact Us</h2>
                         <form ref={form} onSubmit={sendEmail}>
                           <input type="text" name="user_name" className="contact-input" placeholder="Enter Your Name" />
                             <input type="email" name="user_email" className="contact-input" placeholder="Enter Your Email" />
                             <input type="subject" name="from_name" className="contact-input" placeholder="Enter Your subject" />
                             <textarea name="message"  className="contact-textarea" placeholder="Your Message"  ></textarea>
                             <button type="submit" className="contact-button" >Send <img style={{height:'20px'}} src={plane} alt="" /></button>

                         </form>
      
      
                     </div>
                     <div className="contact-form-img">
                         <img src={bg} alt="" />
                     </div>
                 </div>
             </div>
         </div>

    
  );
}
export default Contact;
