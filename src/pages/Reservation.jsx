import React from "react"
import ContactForm from "../components/form/contactForm";
import Header from "../components/header"

function Reservation() {
  return (
    <div className="reservation">
      <Header background={false} className="border"/>
      <h2>Reservation</h2>
      <div className="d-flex">
        <div>
          <div className="section">
            <h3>Call us</h3>
            <p className="strong">+001 234 56 789</p>
            <p>From Tuesday to Sunday 10.30am to 13.00pm</p>
            <p>Friday and Saturday 18:30pm to 20:30pm</p>
          </div>
          <div className="section">
            <h3>Email</h3>
            <p>For job applications: hr@dream-theme.com</p>
          </div>
          <div className="section">
            <h3>Dress code</h3>
            <p>Our dress code is smart casual though we strongly recommend dressing up for the occasion. Gentlemen, we ask that you come dressed in trousers and appropriate footwear.</p>
          </div>
          <div className="section">
            <h3>Cancellations</h3>
            <p>To cancel your booking it is compulsory to write an email or call us at least 72 hours in advance.</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Reservation;