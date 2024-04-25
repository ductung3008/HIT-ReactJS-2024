import React from "react";
import { useFormik, Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { registerValidate } from "../../utils/registerValidate";

const Register = () => {
  return (
    <>
      <Formik
        initialValues={{
          fullname: "",
          password: "",
          email: "",
        }}
        validationSchema={registerValidate}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <h1>Register</h1> <br />
            <label htmlFor="fullname">Fullname</label>
            <Field type="text" name="fullname" id="fullname" />
            {errors.fullname && touched.fullname && <p>{errors.fullname}</p>}
            <br /> <br />
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            {errors.password && touched.password && <p>{errors.password}</p>}
            <br /> <br />
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
            {errors.email && touched.email && <p>{errors.email}</p>}
            <br /> <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
