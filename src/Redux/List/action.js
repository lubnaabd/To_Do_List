import {
  GET_ITEMS_START,
  GET_ITEMS_SUCESS,
  GET_ITEMS_FAIL,
  ADD_ITEM,
  DELETE_ITEM
} from "./constant";
import axios from "axios";

export const getItems = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ITEMS_START });

    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({ type: GET_ITEMS_SUCESS, payload: result.data });
  } catch (e) {
    dispatch({ type: GET_ITEMS_FAIL, payload: e.message });
  }
};

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

export const deleteItem = (payload) => {
    return {
      type: DELETE_ITEM,
      payload
    };
  };