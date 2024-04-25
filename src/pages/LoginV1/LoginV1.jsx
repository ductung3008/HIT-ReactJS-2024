import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import "./LoginV1.scss";
import { loginValidate } from "../../utils/loginValidate";

const Login = () => {
  return (
    <div className="login">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={loginValidate}
        onSubmit={(data) => console.log(data)}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="username"
                className={errors.username && touched.username && "error-input"}
              />
              {errors.username && touched.username && (
                <p className="error-msg">{errors.username}</p>
              )}
            </div>
            <div>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className={errors.password && touched.password && "error-input"}
              />
              {errors.password && touched.password && (
                <p className="error-msg">{errors.password}</p>
              )}
            </div>
            <button type="submit">LOGIN</button>
            <p>
              Not registered? <a href="#">Create an account</a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
