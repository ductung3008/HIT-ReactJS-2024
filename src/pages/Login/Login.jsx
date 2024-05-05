import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginValidate } from "../../utils/loginValidate";
import Button from "../../components/Button/Button";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-form">
      <h1 className="title">Sign In</h1>
      <Formik
        initialValues={{
          username: "",
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
            <label htmlFor="username">Username</label>
            <br />
            <Field type="text" name="username" id="username"></Field>
            <ErrorMessage
              component="div"
              name="username"
              render={(msg) => <div className="error-msg">{msg}</div>}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <Field type="text" name="password" id="password"></Field>
            <ErrorMessage
              component="div"
              name="password"
              render={(msg) => <div className="error-msg">{msg}</div>}
            />
          </div>
          <Button title="Sign In" width="413px" height="53px" />
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
