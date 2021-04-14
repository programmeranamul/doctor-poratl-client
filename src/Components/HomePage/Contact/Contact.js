import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="conaict-section py-5">
           <div className="container">
               <article className="col-7 mx-auto text-center">
                   <h6 className="custom-color">CONTACT US</h6>
                   <h1 className="text-white">Always Connect with us</h1>
               </article>
               <article className="col-md-8 mx-auto mt-5">
                    <form >
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="te8xt" placeholder="Subject" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Your Message" rows="8"></textarea>
                        </div>
                    </form>
               </article>
           </div> 
        </section>
    );
};

export default Contact;