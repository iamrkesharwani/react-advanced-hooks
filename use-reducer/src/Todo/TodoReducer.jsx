export const INITIAL_STATE = {
  todos: [],
};

export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      const text = action.payload;

      const newItem = {
        id: crypto.randomUUID(),
        name: text,
        completed: false,
      };

      return {
        ...state,
        todos: [...state.todos, newItem],
      };
    }
    case ACTIONS.TOGGLE_TODO: {
      const id = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    }
    case ACTIONS.DELETE_TODO: {
      const id = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    }
    default:
      return state;
  }
};
