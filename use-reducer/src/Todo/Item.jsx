import { Trash2 } from 'lucide-react';
import { ACTIONS } from './TodoReducer';

const Item = ({ item, dispatch }) => {
  return (
    <div className="group bg-white rounded-xl p-4 mb-3 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-md border-2 border-gray-300 text-cyan-600 cursor-pointer transition-all"
          checked={item.completed}
          onChange={() =>
            dispatch({
              type: ACTIONS.TOGGLE_TODO,
              payload: item.id,
            })
          }
        />
        <h1 className="flex-1 text-gray-800 text-lg font-medium">
          {item.name}
        </h1>
        <button
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-600"
          onClick={() =>
            dispatch({
              type: ACTIONS.DELETE_TODO,
              payload: item.id,
            })
          }
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default Item;
