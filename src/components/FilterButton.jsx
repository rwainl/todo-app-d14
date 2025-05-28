import React from "react";
import { useTheme } from "./ThemeContext";

function FilterButton({ setFilter }) {
  const { isDarkMode, _ } = useTheme();
  return (
    <>
      <div className="max-w-xl mx-auto border text-center rounded-xl">
        <p className="text-2xl font-bold py-4 text-center">Filter</p>
        <button
          onClick={() => setFilter("Semua")}
          className={`${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          } rounded-lg border py-1 px-2 mx-2 mb-4 transition duration-300 ease-in-out hover:scale-105 hover:bg-black hover:bg-opacity-80 hover:text-white`}
        >
          Semua
        </button>
        <button
          onClick={() => setFilter("Selesai")}
          className={`${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          } rounded-lg border py-1 px-2 mx-2 mb-4 transition duration-300 ease-in-out hover:scale-105 hover:bg-black hover:bg-opacity-80 hover:text-white`}
        >
          Selesai
        </button>
        <button
          onClick={() => setFilter("Belum Selesai")}
          className={`${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          } rounded-lg border py-1 px-2 mx-2 mb-4 transition duration-300 ease-in-out hover:scale-105 hover:bg-black hover:bg-opacity-80 hover:text-white`}
        >
          Belum Selesai
        </button>
      </div>
    </>
  );
}

export default FilterButton;
