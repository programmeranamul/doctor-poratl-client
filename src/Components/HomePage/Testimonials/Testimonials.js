import React from 'react';
import wilson from '../../../images/Ellipse 1.png'
import ema from '../../../images/Ellipse 2.png'
import aliza from '../../../images/Ellipse 3.png'
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'


const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonials = () => {
    return (
        <section className="container testimonial-container">
            <article>
                <h5 className="custom-color">TESTIMONIAL</h5>
                <h2 className="mt-3">What's Our Patients <br/> Says</h2>
            </article>
            <article>
                <div className="row my-5">
                    {
                        testimonialData.map(testimonial => <Testimonial key={testimonial.name} testimonial={testimonial}/>) 
                    }
                   
                </div>
            </article>
        </section>
    );
};

export default Testimonials;