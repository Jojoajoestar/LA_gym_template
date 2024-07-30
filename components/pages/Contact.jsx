import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../common/Button";
import InputMask from "react-input-mask";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <Formik
          initialValues={{ name: '', email: '', number: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            number: Yup.string().required('Number is required'),
            message: Yup.string().required('Message is required')
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              toast.success("Form Submitted Successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              resetForm();
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full md:w-2/5 space-y-5">
              <h1 className="text-5xl font-semibold text-center">Contact Us</h1>
              <div className="flex flex-col">
                <label htmlFor="name">Your Name</label>
                <Field
                  className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Your Email</label>
                <Field
                  className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="number">Your Number</label>
                <Field name="number">
                  {({ field }) => (
                    <InputMask
                      {...field}
                      mask="(999) 999-9999"
                      maskChar=" "
                      className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
                      placeholder="(123) 456-7890"
                    />
                  )}
                </Field>
                <ErrorMessage name="number" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Your Message</label>
                <Field
                  as="textarea"
                  className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                />
                <ErrorMessage name="message" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-row justify-center space-x-4">
                <Button type="submit" title="Send Message" disabled={isSubmitting} />
                <Button title="Call Us" onClick={() => window.location.href="tel:+11234567890"} />
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex flex-row items-center w-full md:w-2/4 mt-10 md:mt-0">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2741876634!2d-118.69192067965364!3d34.0207304761497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbd1e265bccb%3A0xa0f67e7e626c84b0!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1624737329350!5m2!1sen!2sus"
            width="500"
            height="450"
            style={{ border: 0, margin: 'auto' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
