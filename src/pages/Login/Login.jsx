import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import "./Login.scss";
import { loginValidate } from "../../utils/loginValidate";

const Login = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="login">
      <div className="form">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidate}
          onSubmit={async (payload) => {
            try {
              const { data } = await axios.post(
                "https://reqres.in/api/login",
                payload,
              );
              localStorage.setItem("access_token", data.token);
              alert("Login successful");
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
              <h1 className="title">Login</h1>
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
            <Button title="Login" />
            <p>
              Don't have an account? <Link to="/register">Register</Link>
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

export default Login;
