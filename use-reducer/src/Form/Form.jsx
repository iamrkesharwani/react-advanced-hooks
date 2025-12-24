import { useReducer } from 'react';
import { ACTIONS, INITIAL_STATE, reducer } from './FormReducer';

const Form = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function handleSubmit(e) {
    e.preventDefault();
    if (!state.isValid) return;
    console.log(state);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Started</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              onChange={(e) =>
                dispatch({ type: ACTIONS.UPDATE_NAME, payload: e.target.value })
              }
              className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none"
              type="text"
              value={state.name}
              placeholder="Enter your name"
            />
            <div className="text-sm text-red-600 mt-1">{state.errors.name}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.UPDATE_EMAIL,
                  payload: e.target.value,
                })
              }
              className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none"
              type="text"
              value={state.email}
              placeholder="Enter your email"
            />
            <div className="text-sm text-red-600 mt-1">
              {state.errors.email}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.UPDATE_PHONE,
                  payload: e.target.value,
                })
              }
              className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none"
              type="number"
              value={state.phone}
              placeholder="Enter your phone number"
            />
            <div className="text-sm text-red-600 mt-1">
              {state.errors.phone}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="country"
            >
              Country
            </label>
            <select
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.UPDATE_COUNTRY,
                  payload: e.target.value,
                })
              }
              className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 outline-none bg-white"
              name="country"
              value={state.country}
              id="country"
            >
              <option value="">Select your country</option>
              <option value="india">India</option>
              <option value="france">France</option>
              <option value="russia">Russia</option>
              <option value="israel">Israel</option>
            </select>
            <div className="text-sm text-red-600 mt-1">
              {state.errors.country}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
