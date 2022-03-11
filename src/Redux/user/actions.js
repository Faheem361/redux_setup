import { ActionTypes } from "../types";
import axios from "axios";

export const increaseUserCounter = () => {
  return async (dispatch) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: ActionTypes.INCREMENT_USER, payload: res.data });
  };
};
export const decreaseUserCounter = () => {
  return async (dispatch) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log("res in action", res?.data)
    dispatch({ type: ActionTypes.DECREMENT_USER, payload: res.data });
  };
};
