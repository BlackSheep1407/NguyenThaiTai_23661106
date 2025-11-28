// import React, { createContext, useContext, useState, ReactNode } from "react";

// // 🔹 Định nghĩa type cho 1 item trong giỏ
// export interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }

// // 🔹 Type context
// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// }

// // 🔹 Tạo context
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // 🔹 Provider
// export const CartProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCartItems((prev) => {
//       const exist = prev.find((i) => i.id === item.id);
//       if (exist) {
//         return prev.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
//         );
//       }
//       return [...prev, item];
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCartItems((prev) => prev.filter((i) => i.id !== id));
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // 🔹 Custom hook để dùng context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used within CartProvider");
//   return context;
// };
// Ở TRÊN LÀ CODE TSX
import React, { createContext, useContext, useState } from "react";

// Context
const CartContext = createContext();

// Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((i) => i.id !== id));

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
