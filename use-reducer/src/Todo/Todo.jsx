import { useReducer, useState } from 'react';
import Item from './Item';
import { Plus } from 'lucide-react';
import { ACTIONS, INITIAL_STATE, reducer } from './TodoReducer';

const Todo = () => {
  const [text, setText] = useState('');
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE, undefined);

  function addItem() {
    if (!text.trim()) return;
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: text,
    });
    setText('');
  }

  const totalCount = state.todos.length;
  const completedCount = state.todos.filter((todo) => todo.completed).length;

  return (
    <div className="h-screen bg-gradient-to-br from-cyan-900 via-cyan-800 to-teal-900 flex justify-center items-center p-6">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl h-[90vh] w-full max-w-2xl p-8 flex flex-col">
        <div className="mb-8 flex-shrink-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Tasks</h1>
        </div>

        <div className="mb-6 flex-shrink-0">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="What needs to be done?"
              className="flex-1 px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200 text-lg transition-all"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="px-6 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
              onClick={addItem}
            >
              <Plus size={24} />
              Add
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 space-y-2 min-h-0">
          {state.todos.map((item) => (
            <Item item={item} key={item.id} dispatch={dispatch} />
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 flex-shrink-0">
          <div className="flex justify-between text-sm text-gray-600">
            <span className="font-medium">Total: {totalCount} tasks</span>
            <span className="font-medium">
              Completed: {completedCount} tasks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
