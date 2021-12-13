import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../Redux/List/action";
import { useTranslation } from "react-i18next";
import changeLanguage from "../Utils/ChangeLanguage"
const ToDoList = () => {
  const { t, i18n } = useTranslation();

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
  const handleChangeLanguage=()=>{
    changeLanguage(i18n.language==='ar'?"en":'ar' ,i18n)
  }
  return (
    <div>
      <h1>{t("toDolist")}</h1>
      <button onClick={handleChangeLanguage} className="add_item">
        {t("language")}
      </button>

      <input
        className="input_to_list"
        type={"text"}
        onChange={handleInputChange}
        value={value}
      ></input>
      <button onClick={handleAddItem} className="add_item">
        {t("add")}
      </button>
    </div>
  );
};

export default ToDoList;
