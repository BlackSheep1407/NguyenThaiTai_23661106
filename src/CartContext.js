import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((x) => x.id === product.id);
      if (existing) {
        return prev.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((x) => x.id !== id));
      return;
    }
    setCart((prev) =>
      prev.map((x) => (x.id === id ? { ...x, quantity } : x))
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

//CODE MỚI 
// CartContext.js
// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addItem = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((p) => p.id === product.id);
//       if (existing) {
//         return prev.map((p) =>
//           p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeItem = (id) => {
//     setCart((prev) => prev.filter((p) => p.id !== id));
//   };

//   const increaseQuantity = (id) => {
//     setCart((prev) =>
//       prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
//     );
//   };

//   const decreaseQuantity = (id) => {
//     setCart((prev) =>
//       prev.map((p) =>
//         p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
//       )
//     );
//   };

//   const clearCart = () => setCart([]);

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addItem,
//         removeItem,
//         increaseQuantity,
//         decreaseQuantity,
//         totalPrice,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

