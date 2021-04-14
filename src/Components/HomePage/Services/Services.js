import React from "react";
import fluoride from "../../../images/fluoritaing.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServicesDetails from "../ServiceDetails/ServicesDetails";

const serviceData = [
  {
    name: "Fluoride Treatment",
    image: fluoride,
  },
  {
    name: "Cavity Filling",
    image: cavity,
  },
  {
    name: "Teath Whitening",
    image: whitening,
  },
];

const Services = () => {
  return (
    <section className="my-5">
      <article className="text-center">
        <h5 className="custom-color">Our Services</h5>
        <h2 className="font-weight-bolder">Services We Provide</h2>
      </article>
      <article className="d-flex justify-content-center">
        <div className="row w-75 mt-4">
          {serviceData.map((service, index) => (
            <ServicesDetails key={index} service={service} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Services;
