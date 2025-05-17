import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, totalPrice, addToCart, removeFromCart, clearCart } = useCart();

  const handleRemoveProduct = (id) => {
    const item = cartItems.find((i) => i._id === id);
    if (item) {
      removeFromCart(id, item.quantity);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-50 py-10">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.house} - {item.size}</p>
                    <p className="text-red-600 font-bold">
                      LKR {item.price ? item.price.toLocaleString() : 'N/A'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => removeFromCart(item._id, 1)}
                      disabled={item.quantity === 1}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveProduct(item._id)}
                    className="text-red-600 text-sm ml-4 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 text-right">
              <h3 className="text-lg font-bold">
                Total: <span className="text-red-600">LKR {totalPrice.toLocaleString()}</span>
              </h3>
              <button
                onClick={clearCart}
                className="mt-4 w-full bg-[#1F3357] text-white py-2 rounded hover:bg-[#152B4F]"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
