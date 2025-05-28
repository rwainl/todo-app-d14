import React from "react";
import { useUser } from "../components/UserContext";
import { useFormik } from "formik";
import * as Yup from "yup";

const Profil = () => {
  const { user, setUser } = useUser();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required("Nama tidak boleh kosong")
        .min(3, "Jumlah karakter minimal 3"),
      email: Yup.string()
        .email("Email tidak valid")
        .required("Email tidak boleh kosong"),
    }),
    onSubmit: (values, { resetForm }) => {
      setUser({ name: values.name, email: values.email });
      resetForm();
    },
  });

  return (
    <>
      <p className="text-center">ini halaman Profil</p>
      <div className="max-w-xl mx-auto border rounded-xl py-2 flex flex-col items-center">
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <input
            name="name"
            className="border rounded-lg p-2 mb-2"
            type="text"
            placeholder="Nama"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <>
              <div className="">
                <p className="text-red-500">{formik.errors.name}</p>
              </div>
            </>
          ) : null}
          <input
            name="email"
            className="border rounded-lg p-2 mb-2"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <>
              <div className="">
                <p className="text-red-500">{formik.errors.email}</p>
              </div>
            </>
          ) : null}
          <button
            type="submit"
            className="border rounded-lg p-2 my-2"
            disabled={(!formik.isValid && formik.dirty) || formik.isSubmitting}
          >
            Kirim
          </button>
        </form>
      </div>
      <p className="text-center">{user.name}</p>
      <p className="text-center">{user.email}</p>
    </>
  );
};

export default Profil;
