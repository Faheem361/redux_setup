import { ActionTypes } from "../types";

const INITIAL_STATE = {
  countUser: 0,
  resultUser: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_USER:
      return {
        ...state,
        countUser: state.countUser + 1,
        // result: action.payload
      };
    case ActionTypes.DECREMENT_USER:
      return {
        ...state,
        countUser: state.countUser - 1,
        resultUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
