import React from 'react';
import Footer from '../../ShearedComponent/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import ExceptionalTerms from '../ExceptionalTerms/ExceptionalTerms';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <ExceptionalTerms />
            <Appointment />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Contact />
           <Footer />
        </div>
    );
};

export default Home;