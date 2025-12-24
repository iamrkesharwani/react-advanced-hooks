export const INITIAL_STATE = {
  count: 0,
};

export const ACTIONS = {
  INCREASE: 'INCREASE',
  RESET: 'RESET',
  DECREASE: 'DECREASE',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE:
      if (state.count === 10) return state;
      return { count: state.count + 1 };
    case ACTIONS.DECREASE:
      if (state.count === 0) return state;
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
};
