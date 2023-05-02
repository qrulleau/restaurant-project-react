import React from 'react';
import Input from '../input.jsx'

function ContactForm (){
  return (
    <form>
      <h3>Online reservation form</h3>
      <div className="d-flex">
        <div className="d-flex direction-column">
          <label htmlFor="">Name</label>
          <Input type="text" name="name" placeholder="name" />
        </div>
        <div className="d-flex direction-column">
          <label htmlFor="">Surname</label>
          <Input type="text" name="surname" placeholder="surname" />
        </div>
      </div>
      <div className="d-flex">
        <div className="d-flex direction-column">
          <label htmlFor="">Email</label>
          <Input type="email" name="name" placeholder="test@test.fr" />
        </div>
        <div className="d-flex direction-column">
          <label htmlFor="">Phone number</label>
          <Input type="number" name="surname" placeholder="+33 672568440" />
        </div>
      </div>
      <div className="d-flex">
        <div className="d-flex direction-column">
          <label htmlFor="">Number of guests</label>
          <Input type="number" name="surname" placeholder="1" />
        </div>
        <div className="d-flex direction-column">
          <label htmlFor="">Children</label>
          <Input type="number" name="surname" placeholder="0" />
        </div>
      </div>
      <div className="d-flex">
        <div className="d-flex direction-column">
          <label htmlFor="">Time</label>
          <Input type="number" name="time" placeholder="1" />
        </div>
        <div className="d-flex direction-column">
          <label htmlFor="">Date</label>
          <Input type="date" name="date" placeholder="10-04-2016"/>
        </div>
      </div>
      <div className='allerie'>
        <label htmlFor="">Alleries & intolerances</label>
        <textarea name="" id=""></textarea>
      </div>
      <div className="d-flex justify-start">
        <input type="checkbox" name="" id="" />
        <p>I have read and agree to the above terms and conditions.</p>
      </div>
      <input type="submit" value="Submit reservation request" />
    </form>
  );
}

export default ContactForm;