import React from 'react';
import './contact.css'
import bg from './bg1.png'
import plane from './paper-plane-solid.png'

function Contact() {
    return (
        <div className="contact-form">
            <div className="contact-container">
                <div className="contact-main">
                    <div className="contact-content">
                        <h2>Contact Us</h2>
                        <form action="#" method="">
                            <input type="text" name="name" className="contact-input" placeholder="Enter Your Name" />
                            <input type="email" name="email" className="contact-input" placeholder="Enter Your Email" />
                            <textarea name="message" className="contact-textarea" placeholder="Your Message"></textarea>
                            <button type="submit" className="contact-button">Send <img style={{height:'20px'}} src={plane} alt="" /></button>
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
