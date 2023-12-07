import { FETCH_RANDOM_GREETING } from './actions';

const initialState = {
  randomGreeting: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING:
      return { ...state, randomGreeting: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
