import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// index.tsx
// @ts-ignore
import { CartProvider } from "./CartContext.js"; // 🔹 lưu ý thêm `.js` ở import

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <CartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
);
