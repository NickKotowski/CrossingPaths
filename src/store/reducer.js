const INITIAL_STATE = {
  userName: '',
  counter: 0,
};

export default function reducer(state = INITIAL_STATE, action) {
  // console.log('AppReducer:', action);
  switch (action.type) {
    case 'SET_USERNAME': {
      return {
        ...state,
        userName: action.payload,
      };
    }
    case 'INCREASE_COUNT': {
      const newCount = state.counter + 1;
      return {
        ...state,
        counter: newCount,
      };
    }
    default:
      return state;
  }
}
