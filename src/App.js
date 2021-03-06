import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getItems,deleteItem } from "./Redux/List/action";
import React, { useEffect } from "react";
import ToDoList from "./Components/ToDoList";
import './Utils/i18n'
import { useTranslation } from 'react-i18next';

function App() {
  const { isLoading, list, error } = useSelector((state) => state.list);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  const handleDeleteItem = (id) => {
      dispatch(deleteItem({id:id}));
  };
  return (
    <div className="App">
      <ToDoList/>
      {isLoading ? (
        <div>....isLoading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="list">
          {list.slice(0,10 ).map((element) => (
            <div className="list_item"key={element.id}>{element.title}
                  <button onClick={()=>handleDeleteItem(element.id)}  className="delete_item">{t('delete')}</button>

            </div>
            
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
