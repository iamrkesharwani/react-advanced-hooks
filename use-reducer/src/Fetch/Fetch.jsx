import { useReducer } from 'react';
import { ACTIONS, INITIAL_STATE, reducer } from './ReducerFetch';

const Fetch = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE, undefined);

  async function getDog() {
    if (state.status === 'loading') return;

    dispatch({ type: ACTIONS.FETCH_START });

    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!res.ok) throw new Error('Invalid fetch');
      const data = await res.json();
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: ACTIONS.FETCH_ERROR });
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 w-full max-w-lg border border-slate-700">
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={getDog}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-10 rounded-xl transition duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
          >
            {state.status === 'loading' ? 'Loading...' : 'Fetch a dog'}
          </button>

          {state.status === 'success' && (
            <div className="w-full aspect-square bg-slate-700 rounded-xl overflow-hidden shadow-inner flex items-center justify-center border border-slate-600">
              <img
                src={state.data?.message}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {state.status === 'error' && (
            <div className="bg-red-900/30 border border-red-500/50 p-4 rounded-xl w-full backdrop-blur-sm">
              <div className="flex items-start">
                <div>
                  <h3 className="text-red-400 font-semibold mb-1">
                    Error Occurred
                  </h3>
                  <p className="text-red-300/80 text-sm">
                    We got an error while fetching the dog image. Please try
                    again.
                  </p>
                </div>
                {state.status === 'error' && (
                  <button
                    onClick={getDog}
                    className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg"
                  >
                    Retry
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fetch;
