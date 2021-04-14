import React, { useEffect, useState } from "react";
import doctor from "../../../images/doctor.png";
import Doctor from "../Doctor/Doctor";

const doctorData = [
  {
    name: "Dr. Coudi",
    phone: "+880-188-934789",
    img: doctor,
  },
  {
    name: "Dr. Coudi",
    phone: "+880-188-934789",
    img: doctor,
  },
  {
    name: "Dr. Coudi",
    phone: "+880-188-934789",
    img: doctor,
  },
];





const Doctors = () => {


  const[doctors, setDoctors] = useState([])

useEffect(()=>{
  fetch('https://lit-river-87243.herokuapp.com/doctors')
  .then(res => res.json())
  .then(doctor => setDoctors(doctor)) 
},[])

console.log(doctors)
  return (
    <section className="container">
      <h5 className="custom-color text-center">Our Doctors</h5>
      <article className=" mt-5">
        <div className="row mt-3 mb-5">
          {doctors.map((doctor, index) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Doctors;
