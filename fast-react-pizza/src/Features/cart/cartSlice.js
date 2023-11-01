import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: 'Margarita',
      unitPrice: 12,
      quantity: 2,
      totalPrice: 24,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice += item.unitPrice;
    },
    decreaseItemQunatity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity === 1) {
        state.cart.filter((cartItem) => item.pizzaId !== cartItem.pizzaId);
      } else {
        item.quantity--;
        item.totalPrice -= item.unitPrice;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQunatity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
