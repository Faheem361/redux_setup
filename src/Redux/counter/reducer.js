import { ActionTypes } from '../types';

const INITIAL_STATE = {
    count: 0,
    result: [],
    acc: "Connect",
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CONNECT:
            return {
                ...state, acc: action.payload
            };
        case ActionTypes.INCREMENT:
            return {
                ...state, count: state.count + 1,
                // result: action.payload
            };
        case ActionTypes.DECREMENT:
            return {
                ...state, count: state.count - 1,
                result: action.payload
            };
        default: return state;
    }
};
export default reducer;