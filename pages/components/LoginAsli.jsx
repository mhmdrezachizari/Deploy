import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Errorcomponent from "./Errorcomponent";
import styles from "./LoginAski.module.css";

const MyForm = () => {
  const singup = (values) => {
    fetch("https://6612ae9c53b0d5d80f6628ce.mockapi.io/api/project1/Login", {
      method: "post",
      body: JSON.stringify({
        username: values.name,
        password: values.lastname,
      }),
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((receivedData) => {
        console.log(receivedData);
      });
  };

  const formFields = {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };
  const submitHandler = (values) => {
    singup(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("enter name !!!"),
    lastname: Yup.string().required("enter lastname !!!"),
    email: Yup.string().email("your email is not correct").nullable(),
    password: Yup.string().required("enter password !!!"),
    nationalCode: Yup.string().matches(
      "kjghjdgfksdf@!#$adsfa",
      "national code in not coorect"
    ),
  });
  return (
    <div>
      <Formik
        validateOnBlur={false}
        validateOnChange={true}
        onSubmit={submitHandler}
        initialValues={formFields}
        validationSchema={validationSchema}
      >
        <Form className="container">
          <div className={styles.div1}>
            <div className={styles.divdakhel}>
              <label>name</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component={Errorcomponent} />
            </div>
            <div className={styles.divdakhel}>
              <label>lastname</label>
              <Field type="text" name="lastname" className="form-control" />
              <ErrorMessage name="lastname" />
            </div>
            <div className={styles.divdakhel}>
              <label>email</label>
              <Field type="text" name="email" className="form-control" />
              <ErrorMessage name="email" />
            </div>
            <div className={styles.divdakhel}>
              <label>password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" />
            </div>
            <button className="btn btn-primary" type="submit">
              signUp
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
