const initState = 0;

const number = (state = initState, action) => {
  switch (action.type) {
    case 'PLUS':
      return state + action.payload;
    case 'MINUS':
      return state - action.payload;
    default:
      return state;
  }
};

export default number;
