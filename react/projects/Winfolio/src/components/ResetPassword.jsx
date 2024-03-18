import { OuterHeader } from "./OuterHeader";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createClient } from "@supabase/supabase-js";
import { ANON_KEY, SUPABASE_URL } from "../Auth/keys";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const supabase = createClient(SUPABASE_URL, ANON_KEY);
  const [loading, isLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    // validate form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
  });

  const resetPasswordHandle = async (e) => {
    e.preventDefault();
    isLoading(true);
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      formik.values.email
    );

    if (error) {
      isLoading(false);
      toast.error(error.message);
    } else {
      isLoading(false);

      toast.success(
        `We've sent a password reset link to your email address. Please check your inbox (including spam folder) to complete the reset.`
      );
    }
  };
  return (
    <div>
      <div className="py-16">
        <OuterHeader></OuterHeader>
        <div className="flex items-center justify-center ">
          <div className="bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-md  border-2 text-left mx-4">
            <h2 className="text-2xl text-center font-bold mb-6">
              Reset Password
            </h2>
            <form id="registerhtmlForm" onSubmit={resetPasswordHandle}>
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

              <button
                disabled={loading}
                onClick={resetPasswordHandle}
                type="submit"
                className="bg-black 0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-end items-end"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ResetPassword;
