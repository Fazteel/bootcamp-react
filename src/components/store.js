import { createStore } from "redux";

const initialState = {
  count: 0,
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({
  type: INCREMENT,
})

const decrement = () => ({
  type: DECREMENT,
})

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(countReducer);
export { store, increment, decrement };