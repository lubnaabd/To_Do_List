import {
  GET_ITEMS_START,
  GET_ITEMS_SUCESS,
  GET_ITEMS_FAIL,
  ADD_ITEM,
  DELETE_ITEM,
} from "./constant";

export const listReducer = (
  initialState = { isLoading: false, list: [], error: "" },
  action
) => {
  switch (action.type) {
    case GET_ITEMS_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case GET_ITEMS_SUCESS:
      return {
        ...initialState,
        isLoading: false,
        list: action.payload,
      };

    case GET_ITEMS_FAIL:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };
    case ADD_ITEM:
      return {
        ...initialState,
        isLoading: false,
        list: [action.payload, ...initialState.list],
      };
    case DELETE_ITEM:
      return {
        ...initialState,
        isLoading: false,
        list: initialState.list.filter(
          (elemnt) => elemnt.id !== action.payload.id
        ),
      };
    default:
      return initialState;
  }
};
