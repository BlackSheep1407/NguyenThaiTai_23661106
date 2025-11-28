// CartContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Product {
  id: number | string;
  title: string;
  price: number;
  image?: string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => setCart(prev => [...prev, product]);
  const removeFromCart = (index: number) => setCart(prev => prev.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
