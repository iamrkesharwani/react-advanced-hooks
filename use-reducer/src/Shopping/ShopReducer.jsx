import { itemsList } from './Array';

export const INITIAL_STATE = {
  items: itemsList,
  cart: [],
};

export const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  CLEAR_CART: 'CLEAR_CART',
};

export function shopReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const product = action.payload;
      const foundItem = state.cart.find((item) => item.id === product.id);
      let updatedCart;

      if (foundItem) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case ACTIONS.REMOVE_FROM_CART: {
      const id = action.payload;
      return { ...state, cart: state.cart.filter((item) => item.id !== id) };
    }

    case ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };

    case ACTIONS.INCREMENT: {
      const id = action.payload;
      const incrementQuan = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { ...state, cart: incrementQuan };
    }

    case ACTIONS.DECREMENT: {
      const id = action.payload;

      const updatedCart = state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

      return { ...state, cart: updatedCart };
    }

    default:
      return state;
  }
}
