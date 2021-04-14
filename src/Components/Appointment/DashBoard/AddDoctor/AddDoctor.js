import React from 'react';
import SideBar from '../SideBar/Sidebar'
import { useForm } from "react-hook-form";

const AddDoctor = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data.name, data.email,data.image[0] )

        const formData = new FormData()
          formData.append('file', data.image[0])
          formData.append('name', data.name)
          formData.append('email', data.email)
          formData.append('number', data.number)

          fetch('https://lit-river-87243.herokuapp.com/addDoctor', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.error(error)
          })


    }; // your form submit function which will invoke after successful validation

    const handelUpload = (e) => {
        console.log(e.target.files[0]);
    }



    // const formData = new FormData()
    //   formData.append('myFile', files[0])

    //   fetch('/saveImage', {
    //     method: 'POST',
    //     body: formData
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })

    return (
        <div className="row">
            <SideBar />
            {/* <div className="col-md-2"></div> */}
            <section className="col-md-10 position-absolute" style={{ right: "0" }} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" {...register("name", {
                            required: true
                        })} />
                        {errors?.name?.type === "required" && <p>This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="File" {...register("email", {
                            required: true
                        })}/>
                        {errors?.email?.type === "required" && <p>This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Number</label>
                        <input type="text" className="form-control" id="number" placeholder="Number" {...register("number", {
                            required: true
                        })}/>
                        {errors?.number?.type === "required" && <p>This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Uplaod Image</label>
                        <input type="file" id="image" placeholder="File" className="form-control pb-3" {...register("image", {
                            required: true
                        })} onChange={handelUpload} />
                        {errors?.image?.type === "required" && <p>This field is required</p>}
                    </div>
                    <input type="submit" value="Submit" className="btn custom-button" />

                </form>
            </section>
        </div>
    );
};

export default AddDoctor;