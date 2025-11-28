// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { CartProvider } from "./CartContext"; // ✅ Import đúng đường dẫn

// const rootElement = document.getElementById("root")!;
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   // bao App bằng CartProvider
//   <CartProvider>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//   </CartProvider>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./CartContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <CartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
);
