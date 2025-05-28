import { useState, useEffect } from "react";

const useTodoList = (showToast) => {
    const [todoList, setTodoList] = useState(() => {
        const localSaved = localStorage.getItem("todoList");
        return localSaved ? JSON.parse(localSaved) : [];
      });
    useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addHandler = (item, priority) => {
    setTodoList([
      ...todoList,
      {
        id: +new Date(),
        item,
        completed: false,
        priority,
      },
    ]);
    showToast("Berhasil Ditambahkan");
  };
  
  const statusHandler = (id) => {
    const newTodoList = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoList(newTodoList);
  };

  const deleteHandler = (id) => {
    const newTodoList = todoList.filter((items) => items.id !== id);
    setTodoList(newTodoList);
    showToast("Berhasil Dihapus");
  };

  const editHandler = (id, newText) => {
    if (newText.trim() === "") {
      alert("Teks tidak boleh kosong");
      return;
    }
    const updatedText = todoList.map((items) =>
      items.id === id ? { ...items, item: newText } : items
    );
    setTodoList(updatedText);
    showToast("Berhasil Diubah");
  };
  
  return {
      todoList,
      addHandler,
      statusHandler,
      deleteHandler,
      editHandler,
  }
}


export default useTodoList;