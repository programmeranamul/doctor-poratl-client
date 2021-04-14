import React from "react";
import terms from "../../../images/terms.png";
import './ExceptionalTerms.css'

const ExceptionalTerms = () => {
  return (
    <section className="container exceptionalTerms">
      <div className="row">
        <div className="col-md-5">
          <img src={terms} alt="terms image" className="img-fluid" />
        </div>
        <div className="col-md-7 d-flex flex-column custom-justify-evenly ">
          <h1>
            Exceptional Dental <br /> Care, on Your Team
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, at
            sint! Quia deleniti unde a fugit quas doloremque velit aliquam
            expedita perferendis? Sequi fugiat expedita consectetur facilis
            tempore dignissimos. Doloribus deleniti rerum, velit ullam quibusdam
            repellat voluptates quasi sunt aperiam beatae, eos sit, architecto
            voluptatibus rem ratione consectetur commodi at praesentium sequi
            eligendi impedit error possimus! Placeat magnam vitae illo officiis
            optio sequi quia laudantium.
          </p>
          <button className="btn custom-button text-white terms-button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default ExceptionalTerms;
