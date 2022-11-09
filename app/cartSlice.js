import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    totalQuantities: 0,
    qty: 1,
  },
  reducers: {
    handleDecreQty: (state) => {
      if (state.qty <= 1) {
        state.qty = 1;
      } else {
        state.qty -= 1;
      }
    },
    handleIncreQty: (state) => {
      state.qty += 1;
    },

    handleAddtoCart: (state, action) => {
      const { product, qty } = action.payload;
      const checkProductInCart = state.cartItems.find(
        (item) => item?._id === product._id
      );
      state.totalPrice = state.totalPrice + product.price * qty;
      state.totalQuantities = state.totalQuantities + qty;
      if (checkProductInCart) {
        let result = [];
        const updatedCartItems = state.cartItems.map((cartProduct) => {
          if (cartProduct._id === product._id) {
            result.push({
              ...cartProduct,
              quantity: cartProduct.quantity + qty,
            });
          } else {
            result.push({ ...cartProduct });
          }
        });
        state.cartItems = result;
      } else {
        product.quantity = qty;
        state.cartItems = [...state.cartItems, { ...product }];
      }
      toast.success(`${qty} ${product.name} added to the cart.`);
    },

    handleInCreQtyItemInCart: (state, action) => {
      const { product } = action.payload;
      let result = [];
      const updatedCartItems = state.cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          result.push({
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          });
          state.totalPrice = state.totalPrice + product.price;
          state.totalQuantities += 1;
        } else {
          result.push({ ...cartProduct });
        }
      });
      state.cartItems = result;
    },

    handleDeCreQtyItemInCart: (state, action) => {
      const { product } = action.payload;
      let result = [];
      const updatedCartItems = state.cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          if (cartProduct.quantity >= 2) {
            result.push({
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            });
            state.totalPrice = state.totalPrice - product.price;
            state.totalQuantities -= 1;
          } else {
            result.push({ ...cartProduct });
          }
        } else {
          result.push({ ...cartProduct });
        }
      });
      state.cartItems = result;
    },

    handleDeleteItemInCart: (state, action) => {
      const { product } = action.payload;
      let result = [];
      const updatedCartItems = state.cartItems.map((cartProduct) => {
        if (cartProduct._id !== product._id) {
          result.push({ ...cartProduct });
        } else {
          state.totalPrice =
            state.totalPrice - cartProduct.quantity * cartProduct.price;
          state.totalQuantities = state.totalQuantities - cartProduct.quantity;
        }
      });
      state.cartItems = result;
    },

    handleCheckOut: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.quantity = 0;
      state.totalQuantities = 0;
    },
  },
});

export const {
  handleDecreQty,
  handleIncreQty,
  handleAddtoCart,
  handleInCreQtyItemInCart,
  handleDeCreQtyItemInCart,
  handleDeleteItemInCart,
  handleCheckOut,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.cartItems;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectTotalQty = (state) => state.cart.totalQuantities;
export const selectQty = (state) => state.cart.qty;

export default cartSlice.reducer;
