import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppointmentForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    padding: "40px 20px",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ closeModal, modalIsOpen, subject,selectedDate }) => {
  console.log(selectedDate)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.appointment = selectedDate
    data.creatOn = new Date()

    fetch("https://lit-river-87243.herokuapp.com/addAppointment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appointment created successfully.");
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5 className="text-center custom-color">{subject}</h5>
        <h6 className="text-center custom-color">on {selectedDate.toDateString()}</h6>
        <form onSubmit={handleSubmit(onSubmit)}>          
          <div className="form-group">
            <input
              placeholder="Your Name"
              className="form-control"
              {...register("name", {
                required: true,
              })}
            />
            {errors?.name?.type === "required" && (
              <p className="text-danger">Thisfd field is required</p>
            )}
          </div>
          <div className="form-group">
            <input
              placeholder="Your Name"
              className="form-control"
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="text-danger">Thisfd field is required</p>
            )}
          </div>
          <div className="form-group">
            <input
              placeholder="Phone Number"
              className="form-control"
              {...register("phone", {
                required: true,
              })}
            />
            {errors?.phone?.type === "required" && (
              <p className="text-danger">Thisfd field is required</p>
            )}
          </div>

          <div className="form-group row">
            <div className="col-4">
              <select
                className="form-control"
                {...register("gender", {
                  required: true,
                })}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors?.gender?.type === "required" && (
                <p className="text-danger">Thisfd field is required</p>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("number", {
                  required: true,
                })}
                className="form-control"
                placeholder="Your Age"
                type="number"
              />
              {errors?.number?.type === "required" && (
                <p className="text-danger">Thisfd field is required</p>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("weight", {
                  required: true,
                })}
                className="form-control"
                placeholder="Weight"
                type="number"
              />
              {errors?.weight?.type === "required" && (
                <p className="text-danger">Thisfd field is required</p>
              )}
            </div>
          </div>

          <input type="submit" className="btn custom-button mr-3" />
          <button onClick={closeModal} className="btn btn-danger">
            close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
