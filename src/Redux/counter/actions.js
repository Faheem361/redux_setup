import { ActionTypes } from "../types";
import axios from "axios";
import { loadWeb3 } from "../../Components/Api/Api";

export const metaMaskConnect = () => {
  return async (dispatch) => {
    let acc = await loadWeb3();
    // console.log("ACC=", acc)
    let myAcc;
    if (acc === "No Wallet") {
      myAcc = "No Wallet";
    } else if (acc === "Wrong Network") {
      myAcc = "Wrong Network";
    } else {
      myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
    }
    dispatch({ type: ActionTypes.CONNECT, payload: myAcc });
  };
};
export const increaseCounter = () => {
  return async (dispatch) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: ActionTypes.INCREMENT, payload: res.data });
  };
};
export const decreaseCounter = () => {
  return async (dispatch) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log("res in action", res?.data)
    dispatch({ type: ActionTypes.DECREMENT, payload: res.data });
  };
};
