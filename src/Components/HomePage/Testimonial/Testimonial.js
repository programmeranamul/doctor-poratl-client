import React from "react";
import { Card } from "react-bootstrap";
import "./Testimonial.css";

const Testimonial = (props) => {
  const { quote, name, from, img } = props.testimonial;
  return (
    <div className="col-md-4 px-4">
      {/* <Card className="shadow-sm">
        <Card.Body>
          <Card.Text>{quote}</Card.Text>
        </Card.Body>
        <Card.Footer className=" bg-white d-flex">
          <Card.Img src={img} className="testimonial-image mr-3" />
          <div>
            <h5 className="custom-color">{name}</h5>
            <p className="m-0"> {from}</p>
          </div>
        </Card.Footer>
      </Card> */}
      <div className="card shadow-sm">
        <div className="card-body">
          <p className="card-text">{quote}</p>
        </div>
        <div className="card-footer d-flex bg-white">
          <img src={img} alt="Card Image" className="testimonial-image mr-3" />
          <div>
            <h5 className="custom-color">{name}</h5>
            <p className="m-0"> {from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
