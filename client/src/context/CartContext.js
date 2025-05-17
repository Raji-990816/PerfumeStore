import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_BASE_URL;

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCart = async () => {
    try {
      const { data } = await axios.get(`${API}/cart`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setCartItems(data.cart.items.map(item => ({
        ...item.productId,
        quantity: item.quantity
      })));
      setTotalPrice(data.cart.totalPrice);
    } catch (err) {
      console.error('Failed to load cart:', err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (item, quantity = 1) => {
    try {
      await axios.post(
        `${API}/cart/add`,
        { productId: item._id, quantity },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      fetchCart();
    } catch (err) {
      console.error('Add to cart failed:', err);
    }
  };

  const removeFromCart = async (id, decrementQuantity = 1) => {
    try {
      await axios.post(
        `${API}/cart/remove`,
        { productId: id, quantity: decrementQuantity },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      fetchCart();
    } catch (err) {
      console.error('Remove from cart failed:', err);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete(`${API}/cart/clear`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setCartItems([]);
      setTotalPrice(0);
    } catch (err) {
      console.error('Clear cart failed:', err);
    }
  };

  const values = {
    cartItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
