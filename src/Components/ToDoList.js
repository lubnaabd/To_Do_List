import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../Redux/List/action";
const ToDoList = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e) => setValue(e.target.value);
  const handleAddItem = () => {
    if (!value) return;
    dispatch(
      addItem({
        title: value,
        id: Math.random() * 1000,
      })
    );
    setValue("");
  };

  
  return (
    <div>
      <input className="input_to_list" type={"text"} onChange={handleInputChange} value={value}></input>
      <button onClick={handleAddItem} className="add_item">Add Item</button>
    </div>
  );
};

export default ToDoList;
