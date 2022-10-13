import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();
export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const handleIncreQty = () => {
    setQty((preQty) => preQty + 1);
  };

  const handleDecreQty = () => {
    setQty((preQty) => {
      if (preQty - 1 < 1) return 1;
      return preQty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item?._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      let result = [];
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          result.push({
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          });
        } else {
          result.push({ ...cartProduct });
        }
      });
      // console.log(result);
      setCartItems(result);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const inCreQtyItemInCart = (product) => {
    let result = [];
    const updatedCartItems = cartItems.map((cartProduct) => {
      if (cartProduct._id === product._id) {
        result.push({
          ...cartProduct,
          quantity: cartProduct.quantity + 1,
        });
        setTotalPrice((pre) => pre + product.price);
        setTotalQuantities((pre) => pre + 1);
      } else {
        result.push({ ...cartProduct });
      }
    });

    setCartItems(result);
  };
  // console.log("cartitem:", cartItems);

  const deCreQtyItemInCart = (product) => {
    let result = [];
    const updatedCartItems = cartItems.map((cartProduct) => {
      if (cartProduct._id === product._id) {
        if (cartProduct.quantity >= 2) {
          result.push({
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          });
          setTotalPrice((pre) => pre - product.price);
          setTotalQuantities((pre) => pre - 1);
        } else {
          result.push({ ...cartProduct });
        }
      } else {
        result.push({ ...cartProduct });
      }
    });

    setCartItems(result);
  };

  const deleteItemInCart = (product) => {
    let result = [];
    const updatedCartItems = cartItems.map((cartProduct) => {
      if (cartProduct._id !== product._id) {
        result.push({ ...cartProduct });
      } else {
        setTotalQuantities((pre) => pre - cartProduct.quantity);
        setTotalPrice((pre) => pre - cartProduct.quantity * cartProduct.price);
      }
    });

    setCartItems(result);
  };

  return (
    <Context.Provider
      value={{
        qty,
        handleIncreQty,
        handleDecreQty,
        onAdd,
        cartItems,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        totalPrice,
        totalQuantities,
        inCreQtyItemInCart,
        deCreQtyItemInCart,
        deleteItemInCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
