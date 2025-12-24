import { ACTIONS } from './ShopReducer';

const Item = ({ items, dispatch }) => {
  return (
    <div className="grid grid-cols-4 gap-3 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white border rounded-md p-2 flex flex-col hover:shadow-sm transition"
        >
          {/* Image */}
          <div className="w-full h-[5rem] overflow-hidden rounded mb-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <p className="text-xs font-medium truncate">{item.name}</p>

          {/* Price */}
          <p className="text-xs text-gray-700 mb-2">
            ₹ {item.price.toLocaleString()}
          </p>

          {/* Button */}
          <div className="mt-auto flex items-center gap-1">
            <button
              className="flex-1 text-xs bg-blue-600 text-white py-1 rounded hover:bg-blue-700 active:scale-95 transition"
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_TO_CART, payload: item })
              }
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
