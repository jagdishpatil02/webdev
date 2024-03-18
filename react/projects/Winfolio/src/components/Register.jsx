import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, ANON_KEY } from "../Auth/keys";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { OuterHeader } from "./OuterHeader";
import { Link } from "react-router-dom";

const Register = () => {
  const supabase = createClient(SUPABASE_URL, ANON_KEY);
  const [loading, isLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    // validate form
    validationSchema: Yup.object({
      first_name: Yup.string().required("First Name is required"),
      last_name: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Enter your password"),
      confirmPassword: Yup.string()
        .required("Enter confirm password")
        .oneOf(
          [Yup.ref("password"), null],
          "Password and Confirm Password must match"
        ),
    }),
  });

  const registerHandle = async (e) => {
    e.preventDefault();

    if (Object.keys(formik.errors).length == 0) {
      isLoading(true);
      try {
        const { data, error } = await supabase.auth.signUp({
          email: formik.values.email,
          password: formik.values.password,
          options: {
            data: {
              first_name: formik.values.first_name,
              last_name: formik.values.last_name,
            },
          },
        });
        if (error) {
          toast.error(error.message);
        }
        if (data?.user?.aud) {
          toast.success(
            "Account Created Sucesssfully, Please check mailbox to verify email your address"
          );
        }
      } catch (error) {
        isLoading(false);
        toast.error(error);
      } finally {
        isLoading(false);
      }
    }
  };

  console.log(formik.errors);

  return (
    <div className="py-16 ">
      <OuterHeader></OuterHeader>
      <div className="flex items-left justify-center  ">
        <div className="bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-md  border-2 text-left mx-4">
          <h2 className="text-2xl text-center font-bold mb-6">Signup</h2>
          <form id="registerhtmlForm" onSubmit={registerHandle}>
            <div className="mb-4">
              <label
                htmlFor="first_name"
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <span id="emailError" className="text-red-500 text-sm ">
                {formik.touched.first_name && formik.errors.first_name}
              </span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="last_name"
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <span id="emailError" className="text-red-500 text-sm ">
                {formik.touched.last_name && formik.errors.last_name}
              </span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <span id="emailError" className="text-red-500 text-sm ">
                {formik.touched.email && formik.errors.email}
              </span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
              >
                Password
              </label>
              <input
                value={formik.values.password}
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <span id="passwordError" className="text-red-500 text-sm ">
                {" "}
                {formik.touched.password && formik.errors.password}
              </span>
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <span id="confirmPasswordError" className="text-red-500 text-sm ">
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword}
              </span>
            </div>

            <button
              disabled={loading}
              type="submit"
              id="submitButton"
              className="bg-black 0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-end items-end"
            >
              Register
            </button>
            <p className="mt-2">
              Already have an account?
              <Link
                to="/login"
                className="pl-2 text-blue-500 underline cursor-pointer "
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
