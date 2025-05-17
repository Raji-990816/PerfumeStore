import { useFormik } from 'formik';
import * as Yup from 'yup';
import { images } from "../assets/products";
import { useState } from 'react';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");  

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Submitted:', values);

      setSuccessMessage("Your message has been sent successfully!");
      setTimeout(() => {
        setSuccessMessage(""); 
      }, 2000);

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    },
  });

  return (
    <div className="flex flex-col  bg-gray-100 m-0">
      <main className='flex-1'>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${images.img11})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-4">Let’s Connect</h1>
            <p className="text-sm md:text-lg text-center mb-8">
              Have questions or need help? Our fragrance experts are here for you.
            </p>
          </div>
        </div>

        <div className="flex flex-col min-h-screen justify-center items-center ">
          <form
            onSubmit={formik.handleSubmit}
            className="w-9/12 md:w-3/6 lg:w-2/6 bg-white p-6 rounded-lg shadow-lg space-y-4  "
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-900">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full py-2 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-xs">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm text-gray-900">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full py-2 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm text-gray-900">Message</label>
              <textarea
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full py-2 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-xs">{formik.errors.message}</div>
              ) : null}
            </div>

            {successMessage && (
              <div className="text-green-500 text-center text-xs mt-4">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full text-sm bg-[#1F3357] text-white py-2 rounded-md hover:bg-[#152B4F] focus:outline-none focus:ring-2 focus:ring-[#1F2937]"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
