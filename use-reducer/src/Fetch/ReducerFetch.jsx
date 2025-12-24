export const INITIAL_STATE = {
  status: 'idle',
  data: null,
};

export const ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  RETRY: 'RETRY',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      if (state.status === 'loading') return state;
      return {
        status: 'loading',
        data: null,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        status: 'success',
        data: action.payload,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        status: 'error',
        data: null,
      };
    default:
      return state;
  }
};
