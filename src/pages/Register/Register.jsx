import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import "./Register.scss";
import { registerValidate } from "../../utils/registerValidate";

const Register = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <div className="register">
      <div className="form">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={registerValidate}
          onSubmit={async (payload) => {
            try {
              const { data } = await axios.post(
                "https://reqres.in/api/register",
                payload,
              );
              localStorage.setItem("access_token", data.token);
              alert("Register successful");
              setTimeout(() => {
                navigate("/");
              }, 1000);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Form>
            <div>
              <h1 className="title">Register</h1>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              ></Field>
              <ErrorMessage
                component="div"
                name="email"
                render={(msg) => <div className="error-msg">{msg}</div>}
              />
            </div>
            <div>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              ></Field>
              <ErrorMessage
                component="div"
                name="password"
                render={(msg) => <div className="error-msg">{msg}</div>}
              />
            </div>
            <Button title="Register" />
            <p>
              You have an account? <Link to="/login">Login</Link>
            </p>
            <div className="close" onClick={handleClose}>
              <i className="fa-solid fa-x"></i>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
