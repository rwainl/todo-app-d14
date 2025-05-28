import React from "react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

function ToDoItem({ item, itemid, onStatus, onDelete, onEdit }) {
  const { isDarkMode, _ } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.item);

  const saveHandler = (event) => {
    event.preventDefault();
    onEdit(item.id, newText);
    setIsEditing(false);
  };
  return (
    <>
      <li
        key={itemid}
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
        className="list-none py-2 transition-all duration-300 ease-in-out transform hover:scale-[1.01]"
      >
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onStatus(item.id)}
          className=""
        />
        <span className="mx-2 text-lg font-semibold">{item.item}</span>
        <span
          className={`text-xs font-bold px-2 py-1 rounded mr-2 ${
            item.priority === "High"
              ? "bg-red-500 text-white"
              : item.priority === "Medium"
              ? "bg-yellow-400 text-black"
              : "bg-green-400 text-black"
          }`}
        >
          {item.priority}
        </span>
        {isEditing ? (
          <>
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="bg-white rounded-lg px-2 py-1 mr-2 border"
            />
            <button
              onClick={saveHandler}
              className={`${isDarkMode ? "bg-white text-black" : "bg-black text-white"} rounded-lg border mr-2 px-2 py-1 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:bg-opacity-80 hover:text-white`}
            >
              Save
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className={`${
              isDarkMode ? "bg-white text-black" : "bg-black text-white"
            } rounded-lg border mr-2 px-2 py-1 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:bg-opacity-80 hover:text-white`}
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(item.id)}
          className={`${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          } rounded-lg border px-2 py-1 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:bg-opacity-80 hover:text-white`}
        >
          Hapus
        </button>
      </li>
      {newText.trim() === "" ? (
        <>
          error
          <p className="text-sm text-red-600 ml-5">teks tidak boleh kosong</p>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default ToDoItem;
