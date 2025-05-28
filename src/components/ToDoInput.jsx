import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "./ThemeContext";

function ToDoInput({ onAdd }) {
  const [priority, setPriority] = useState("low");
  const { isDarkMode,_ } = useTheme();

  const formik = useFormik({
    initialValues: {
      item: "",
      priority,
    },
    validationSchema: Yup.object({
      item: Yup.string()
        .trim()
        .required("Isi tidak boleh kosong")
        .min(3, "Jumlah Karakter Minimal 3"),
    }),
    onSubmit: (values, { resetForm }) => {
      onAdd(values.item, priority);
      resetForm();
    },
  });

  return (
    <>
      <div className="max-w-xl mx-auto px-4 py-6 border rounded-xl flex flex-col items-center">
        <p className="text-2xl font-bold mb-4 text-center">Masukkan List</p>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="item"
            type="text"
            placeholder="Input List"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.item}
            className="border rounded mr-4 w-xs bg-white p-2"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={`rounded-lg mr-2 p-2 ${isDarkMode ? "bg-white text-black" : "bg-black text-white"} transition duration-300 ease-in-out`}
          >
            <option value="Low">Rendah</option>
            <option value="Medium">Sedang</option>
            <option value="High">Tinggi</option>
          </select>
          <button
            type="submit"
            className={`${isDarkMode ? "bg-white text-black" : "bg-black text-white"} p-2 rounded-lg border transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80`}
            disabled={!formik.isValid && formik.dirty || formik.isSubmitting}
          >
            Tambah
          </button>
          {formik.touched.item && formik.errors.item ? (
            <>
              <div className="bg-white p-1 mt-2 pl-4 rounded-lg">
                <p className="text-red-500 text-sm">{formik.errors.item}</p>
              </div>
            </>
          ) : null}
        </form>
      </div>
    </>
  );
}

export default ToDoInput;
