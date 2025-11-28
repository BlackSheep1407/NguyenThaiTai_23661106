// import React, { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((x) => x.id === product.id);
//       if (existing) {
//         return prev.map((x) =>
//           x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const updateQuantity = (id, quantity) => {
//     if (quantity <= 0) {
//       setCart((prev) => prev.filter((x) => x.id !== id));
//       return;
//     }
//     setCart((prev) =>
//       prev.map((x) => (x.id === id ? { ...x, quantity } : x))
//     );
//   };

//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((x) => x.id !== id));
//   };

//   const clearCart = () => setCart([]);

//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.quantity * item.price,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         updateQuantity,
//         removeFromCart,
//         clearCart,
//         totalItems,
//         totalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

//CODE MỚI
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Lưu cart vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Thêm sản phẩm
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

  // Cập nhật số lượng sản phẩm
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      // Nếu giảm xuống 0 → tự động xóa
      setCart((prev) => prev.filter((x) => x.id !== id));
      return;
    }
    setCart((prev) => prev.map((x) => (x.id === id ? { ...x, quantity } : x)));
  };

  // Xóa sản phẩm
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  // Xóa toàn bộ giỏ
  const clearCart = () => setCart([]);

  // Tổng số lượng
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Tổng tiền
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
