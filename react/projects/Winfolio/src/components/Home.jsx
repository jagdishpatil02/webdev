import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { SUPABASE_URL, ANON_KEY } from "../Auth/keys";
import { useFormik } from "formik";
import * as Yup from "yup";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const supabase = createClient(SUPABASE_URL, ANON_KEY);
  const [loading, isLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      achievements: "",
    },

    // validate form
    validationSchema: Yup.object({
      achievements: Yup.string().required("Enter your achievement"),
    }),
  });

  const achievementsHandle = async (e) => {
    e.preventDefault();
    console.log(formik.errors);
    if (
      Object.keys(formik.errors).length == 0 &&
      formik.values.achievements != ""
    ) {
      isLoading(true);
      const userId = localStorage.getItem("userId");
      const achievementData = {
        achievement_name: formik.values.achievements,
      };
      const { data, error } = await supabase
        .from("achievements")
        .insert([{ user_id: userId, ...achievementData }], {
          returning: "minimal",
        });

      if (error) {
        isLoading(false);
        console.log("Insert operation failed with error: ", error.message);
      } else {
        isLoading(false);
        toast.success("Achievement added successfully");
      }
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="xl:w-8/12 w-full">
          <div>
            <div className="flex items-left justify-center  ">
              <div className="bg-white px-8 py-6 rounded-lg shadow-md w-full mx-4  border-2 text-left mt-4">
                <form onSubmit={achievementsHandle}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-bold mb-2 text-left"
                    >
                      Add your achievement
                    </label>
                    <input
                      name="achievements"
                      value={formik.values.achievements}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span id="emailError" className="text-red-500 text-sm ">
                      {formik.touched.achievements &&
                        formik.errors.achievements}
                    </span>
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    id="submitButton"
                    className="bg-black 0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-end items-end"
                  >
                    Add Achievements
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
