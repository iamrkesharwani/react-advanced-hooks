import { useReducer } from 'react';
import { ACTIONS, INITIAL_STATE, reducer } from './CountReducer';

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE, undefined);
  return (
    <div className="h-screen bg-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border-2">
        <div className="text-9xl text-slate-200 mb-10">{state.count}</div>
        <div className="flex gap-5">
          <button
            className="bg-red-400 px-5 py-2 rounded-md font-semibold active:scale-95 transition"
            onClick={() => dispatch({ type: ACTIONS.DECREASE })}
          >
            Decrease
          </button>
          <button
            className="bg-gray-400 px-5 py-2 rounded-md font-semibold active:scale-95 transition"
            onClick={() => dispatch({ type: ACTIONS.RESET })}
          >
            Reset
          </button>
          <button
            className="bg-green-400 px-5 py-2 rounded-md font-semibold active:scale-95 transition"
            onClick={() => dispatch({ type: ACTIONS.INCREASE })}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
