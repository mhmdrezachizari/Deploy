import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Errorcomponent from "./Errorcomponent";
import styles from "./LoginAski.module.css";
import { useRouter } from "next/router";

const MyForm = () => {
    const router = useRouter()
    const [massage1, setmassage1] = useState()
  const singup = (values) => {
    fetch("https://6612ae9c53b0d5d80f6628ce.mockapi.io/api/project1/Login", {
      method: "post",
      body: JSON.stringify({
        username: values.name,
        lastname: values.lastname,
        password: values.password,
        email: values.email,
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
    setmassage1('')
    router.push('/')
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("enter name please"),
    lastname: Yup.string().required("enter lastname please"),
    email: Yup.string().email("your email is not correct").nullable(),
    password: Yup.string().required("enter password please"),
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
              <label className={styles.c123}>name</label>
              <Field type="text" name="name" className="form-control" value={massage1} />
              <ErrorMessage name="name" component={Errorcomponent} />
            </div>
            <div className={styles.divdakhel}>
              <label className={styles.c123}>lastname</label>
              <Field type="text" name="lastname" className="form-control" value={massage1} />
              <ErrorMessage name="lastname" component={Errorcomponent} />
            </div>
            <div className={styles.divdakhel}>
              <label className={styles.c123}>email</label>
              <Field type="text" name="email" className="form-control" value={massage1} />
              <ErrorMessage name="email" component={Errorcomponent}/>
            </div>
            <div className={styles.divdakhel}>
              <label className={styles.c123}>password</label>
              <Field type="password" name="password" className="form-control" value={massage1} />
              <ErrorMessage name="password" component={Errorcomponent}/>
            </div>
            <button className="btn btn-primary mt-3" type="submit">
              signUp
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
