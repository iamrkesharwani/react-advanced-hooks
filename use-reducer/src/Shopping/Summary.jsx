import { Trash2, Tag } from 'lucide-react';
import { ACTIONS } from './ShopReducer';
import { useState } from 'react';

const Summary = ({ cart, dispatch }) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  function formatValue(item) {
    return item.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function applyDiscount() {
    const code = couponCode.toLowerCase();
    if (code === 'save10') {
      setDiscount(itemTotal * 0.1);
    } else if (code === 'save20') {
      setDiscount(itemTotal * 0.2);
    } else {
      setDiscount(0);
    }
  }

  const itemTotal = cart.reduce(
    (prev, curr) => prev + curr.quantity * curr.price,
    0
  );

  const discountedTotal = itemTotal - discount;

  const taxTotal = discountedTotal * 0.18;

  const finalTotal = discountedTotal + taxTotal;

  return (
    <div className="flex flex-col h-full">
      {/* Cart Items List */}
      <div className="flex-1 overflow-y-auto p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Cart Items</h2>
          <button
            className="font-semibold text-sm bg-red-100 px-2 py-1 text-red-700 rounded-md active:scale-95 transition hover:bg-red-200"
            onClick={() => dispatch({ type: ACTIONS.CLEAR_CART })}
          >
            Clear
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-sm text-center mt-8">
            Your cart is empty
          </p>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg p-3 border">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-gray-800 flex-1">
                    {item.name}
                  </p>
                  <button
                    className="text-red-500 hover:text-red-700 ml-2 active:scale-95 transition"
                    onClick={() =>
                      dispatch({
                        type: ACTIONS.REMOVE_FROM_CART,
                        payload: item.id,
                      })
                    }
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button
                      className="w-6 h-6 rounded border bg-white hover:bg-gray-100 flex items-center justify-center text-sm"
                      onClick={() =>
                        dispatch({ type: ACTIONS.DECREMENT, payload: item.id })
                      }
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      className="w-6 h-6 rounded border bg-white hover:bg-gray-100 flex items-center justify-center text-sm"
                      onClick={() =>
                        dispatch({ type: ACTIONS.INCREMENT, payload: item.id })
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Checkout Summary */}
      <div className="p-4 bg-gray-50">
        {/* Coupon Section */}
        <div className="mb-4">
          <label className="text-xs font-medium text-gray-700 mb-1 block">
            Have a coupon?
          </label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Tag
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter code"
                className="w-full pl-9 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 active:scale-95 transition"
              onClick={applyDiscount}
            >
              Apply
            </button>
          </div>
          <div className="text-xs mt-2">Try 'Save10' or 'Save20'</div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2 mb-4 pb-4 border-b">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Item Total</span>
            <span className="font-medium text-gray-800">
              ₹{formatValue(itemTotal)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax (18%)</span>
            <span className="font-medium text-gray-800">
              ₹{formatValue(taxTotal)}
            </span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Discount</span>
              <span className="font-medium text-gray-800">
                ₹{formatValue(discount)}
              </span>
            </div>
          )}
        </div>

        {/* Grand Total */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-base font-semibold text-gray-800">Total</span>
          <span className="text-xl font-bold text-gray-900">
            ₹{formatValue(finalTotal)}
          </span>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 active:scale-95 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Summary;
