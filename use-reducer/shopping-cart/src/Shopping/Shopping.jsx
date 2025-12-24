import { useReducer } from 'react';
import Item from './Item';
import Summary from './Summary';
import { INITIAL_STATE, shopReducer } from './ShopReducer';

const Shopping = () => {
  const [state, dispatch] = useReducer(shopReducer, INITIAL_STATE, undefined);

  const itemsCount = state.cart.reduce((prev, curr) => prev + curr.quantity, 0);

  return (
    <div className="bg-gray-50 h-screen w-full flex flex-col">
      <div className="bg-white shadow-sm px-6 py-4 border-b flex justify-between items-center text-2xl font-bold text-gray-800">
        <h1>Shopping Cart</h1>
        <h1>Items: {itemsCount}</h1>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <Item items={state.items} dispatch={dispatch} />
        </div>

        <div className="w-96 border-l bg-white">
          <Summary cart={state.cart} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};

export default Shopping;
