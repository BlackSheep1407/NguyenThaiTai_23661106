// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./CartContext"; // JS import

// 🔹 Tìm root element
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

// Tạo root
const root = ReactDOM.createRoot(rootElement);

// Render App bọc CartProvider
root.render(
  <CartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
);
