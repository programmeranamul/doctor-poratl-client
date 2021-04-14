import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import loginImage from "../../../images/login.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Firebase.Config";
import { userContext } from "../../../App";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  

  const [creatNewAccount, setCreatNewAccount] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const [logedInUser, setLogedInUser] = useContext(userContext);
  console.log(logedInUser);

  const handelCheekBoxChange = () => {
    setCreatNewAccount(!creatNewAccount);
  };


  // const [newUserInfo, setNewUserInfo] = useState({})

  const onSubmit = (data) => {
    creatNewAccount
      ? firebase
          .auth()
          .createUserWithEmailAndPassword(data.email, data.password)
          .then((userCredential) => {
            const newUserInfo = { ...data };
            newUserInfo.error = "";
            newUserInfo.success = true;
            setLogedInUser(newUserInfo);
            history.replace(from);
          })
          .catch((error) => {
            const newUserInfo = { ...data };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setLogedInUser(newUserInfo);
          })
      : firebase
          .auth()
          .signInWithEmailAndPassword(data.email, data.password)
          .then((userCredential) => {
            const newUserInfo = { ...data };
            newUserInfo.error = "";
            newUserInfo.success = true;
            setLogedInUser(newUserInfo);
            history.replace(from);
          })
          .catch((error) => {
            const newUserInfo = { ...data };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setLogedInUser(newUserInfo);
          });
  };

  return (
    <section className="container">
      <div className="row d-flex align-content-center">
        <div className="col-md-5 my-auto shadow">
          <h4 className="text-center custom-color">Log In </h4>
          <form onSubmit={handleSubmit(onSubmit)} className="py-5">
            {creatNewAccount && (
              <div className="form-group">
                <input
                  placeholder="Name"
                  className="form-control"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors?.name?.type === "required" && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
            )}
            <div className="form-group">
              <input
                placeholder="Email"
                className="form-control"
                {...register("email", {
                  required: true,
                })}
              />
              {errors?.email?.type === "required" && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <div className="form-group">
              <input
                placeholder="Password"
                className="form-control"
                {...register("password", {
                  required: true,
                })}
              />
              {errors?.password?.type === "required" && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            {creatNewAccount && (
              <div className="form-group">
                <input
                  placeholder="Confarm Password"
                  className="form-control"
                  {...register("confarmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                {errors?.confarmPassword?.type === "required" && (
                  <p className="text-danger">This field is required</p>
                )}
                {errors?.confarmPassword?.type === "validate" && (
                  <p className="text-danger">
                    Password and Confarm Password not match!!
                  </p>
                )}
              </div>
            )}

            <input
              type="submit"
              className="btn custom-button text-white"
              value={creatNewAccount ? "Sing Up" : "Sing In"}
            />
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                onChange={handelCheekBoxChange}
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label custom-color font-weight-bold"
                htmlFor="flexCheckDefault"
              >
                Creat A New Account
              </label>
            </div>
          </form>         
         
        </div>
        <div className="col-md-7">
          <img src={loginImage} alt="Login image" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default LogIn;
