import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { OuterHeader } from "./OuterHeader";
import { useFormik } from "formik";
import { SUPABASE_URL, ANON_KEY } from "../Auth/keys";
import * as Yup from "yup";
import { createClient } from "@supabase/supabase-js";

const ChangePassword = () => {
  const supabase = createClient(SUPABASE_URL, ANON_KEY);
  const [loading, isLoading] = useState(false);

  const [searchParams, setSearchParams] = useState(" ");
  useEffect(() => {
    const url = window.location.href;
    const params = new URLSearchParams(url.split("#")[1]);
    const accessToken = params.get("access_token");
    console.log(accessToken);
    setSearchParams(accessToken);
  }, [searchParams]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    // validate form
    validationSchema: Yup.object({
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

  const ChangePasswordHandle = async (e) => {
    e.preventDefault();
    isLoading(true);
    if (searchParams == null) {
      isLoading(false);

      toast.error("Your password link has been expired, Please try again");
      return false;
    }
    console.log("searhpara", searchParams);

    const { data, error } = await supabase.auth.refreshSession();

    if (error) {
      toast.error(error.message);
    }

    const { data: userData, error: userError } = await supabase.auth.updateUser(
      {
        email: formik.values.email,
        password: formik.values.confirmPassword,
      }
    );

    if (userError) {
      isLoading(false);

      toast.error(userError.message);
    } else {
      isLoading(false);

      toast.success("Password updated successfully!");
    }
  };
  return (
    <div className="py-16 ">
      <OuterHeader></OuterHeader>
      <div className="flex items-left justify-center  ">
        <div className="bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-md  border-2 text-left mx-4">
          <h2 className="text-2xl text-center font-bold mb-6">
            Change Password
          </h2>
          <form id="changePasswordForm" onSubmit={ChangePasswordHandle}>
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
                required
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
              onClick={ChangePasswordHandle}
              type="submit"
              id="submitButton"
              className="bg-black 0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-end items-end"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ChangePassword;
