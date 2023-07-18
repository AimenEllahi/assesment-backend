import React from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { login } from "@/Api/Login";
import { useDispatch } from "react-redux";
import { login as reduxLogin } from "@/Store/Slice/TokenSlice";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleFormSubmit = (values, actions) => {
    // Handle form submission logic here
    console.log(values);

    login(values)
      .then((res) => {
        console.log(res.data);
        dispatch(reduxLogin(res.data.token));
        toast("Login Successful", { type: "success" });
        //redirect to dashboard
        router.push("/appointments");
      })
      .catch((err) => {
        console.log(err);
        toast("Login Failed", { type: "error" });
      });

    actions.setSubmitting(false);
  };

  return (
    <div className='flex bg-white justify-center items-center h-screen bg-white-100'>
      <div className='w-full max-w-sm'>
        <div className='flex justify-center mb-4'>
          <img
            src='/assets/ccript_logo.png'
            alt='Logo'
            className='w-24 h-24 object-contain'
          />
        </div>
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Username is required";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }
            return errors;
          }}
          onSubmit={handleFormSubmit}
        >
          <Form>
            <div className='mb-4'>
              <label htmlFor='username' className='block font-medium mb-1'>
                Username
              </label>
              <Field
                type='text'
                id='username'
                name='username'
                placeholder='Enter your username'
                className='w-full p-2 border-b-2 border-black rounded-b focus:border-green-600 focus:outline-none'
             
              />
              <ErrorMessage
                name='username'
                component='div'
                className='text-red-500'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='password' className='block font-medium mb-1'>
                Password
              </label>
              <Field
                type='password'
                id='password'
                name='password'
                placeholder='Enter your password'
                className='w-full p-2 border-b-2 border-black rounded-b focus:border-green-600 focus:outline-none'
              />
              <ErrorMessage
                name='password'
                component='div'
                className='text-red-500'
              />
            </div>

            <button
              type='submit'
              className='w-full text-white py-2 px-4 rounded-lg hover:bg-green-700 bg-[#0AA36E]'
            >
              Sign In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
