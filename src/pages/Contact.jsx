import React from 'react';
import Header from '../components/header';
import Presentation from '../assets/presentation.png';
import LogoInstagram from '../assets/icon/instagram.png';
import LogoYoutube from '../assets/icon/youtube.png';
import LogoFacebook from '../assets/icon/facebook.png';

function Contact() {
  return (
    <div className='contact'>
      <Header className="border" background={false} />
      <div className="content">
        <h2>CONTACT</h2>
        <div className="d-flex">
          <div>
            <section>
              <h3>Contact info</h3>
              <p>Address: 1 121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
              <p>Phone: +001 234 56 789</p>
              <p>For all press enquiries: media@dream-theme.com</p>
              <p>For job applications: hr@dream-theme.com</p>
            </section>
            <section>
            <h3>Opening hours</h3> 
            <p>Lunch: 12:00 / closed 16:00</p>
            <p>Dinner: 19:00 / closed 00:30</p>
            <p>Weekly closed: Sunday (all day), Monday (all day)</p>
            <div className="d-flex justify-start">
              <img src={LogoFacebook} alt="" />
              <img src={LogoInstagram} alt="" />
              <img src={LogoYoutube} alt="" />
            </div>
            </section>
          </div>
          <div>
            <img src={Presentation} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;