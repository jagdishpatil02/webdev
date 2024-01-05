import { useFormik } from "formik";
import "./App.css";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "India",
      termsOfService: "",
      password: "",
      confirm_password: "",
    },

    // validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 character or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      termsOfService: Yup.string().required("Terms if service is required"),
      password: Yup.string().required("enter your password"),
      confirm_password: Yup.string()
        .required("enter confirm password")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),

    // submit form

    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          id="name"
          type="text"
          placeholder="enter name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name}
        <br />
        <br />
        <label>Email</label>
        <input
          id="email"
          type="text"
          placeholder="enter email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email}
        <br />
        <br />
        <label>Password</label>
        <input
          id="password"
          type="password"
          placeholder="enter password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password}
        <br />
        <br />
        <label>Password</label>
        <input
          id="confirm_password"
          type="password"
          placeholder="enter confirm password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirm_password && formik.errors.confirm_password}
        <br />
        <br />
        <label>Select Country</label>
        <select
          id="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        >
          <option>Canada</option>
          <option>India</option>
        </select>
        <p>Terms of service</p>
        <input
          type="checkbox"
          id="termsOfService"
          value="true"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.termsOfService && formik.errors.termsOfService}
        I agree terms
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
