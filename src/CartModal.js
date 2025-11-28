// import React from "react";
// import { useCart } from "./CartContext";
// import { FaTimes } from "react-icons/fa";

// const CartModal = ({ isOpen, onClose }) => {
//   const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

//   if (!isOpen) return null;

//   return (
//     <div
//       id="overlay"
//       onClick={(e) => e.target.id === "overlay" && onClose()}
//       style={{
//         position: "fixed",
//         inset: 0,
//         background: "rgba(0,0,0,0.5)",
//         display: "flex",
//         justifyContent: "flex-end",
//         zIndex: 9999, // nổi trên nav
//       }}
//     >
//       <div
//         role="dialog"
//         aria-modal="true"
//         style={{
//           width: 430,
//           height: "100vh",
//           background: "#fff",
//           padding: 20,
//           overflowY: "auto",
//           position: "relative",
//           boxShadow: "-5px 0 15px rgba(0,0,0,0.3)",
//           borderRadius: "12px 0 0 12px",
//         }}
//       >
//         <button
//           onClick={onClose}
//           style={{
//             position: "absolute",
//             top: 12,
//             right: 12,
//             border: "none",
//             background: "transparent",
//             cursor: "pointer",
//           }}
//         >
//           <FaTimes size={20} />
//         </button>

//         <h2 style={{ marginBottom: 10 }}>Giỏ hàng ({cart.length})</h2>
//         <hr />

//         {cart.length === 0 ? (
//           <p style={{ textAlign: "center", marginTop: 40 }}>Chưa có sản phẩm nào</p>
//         ) : (
//           cart.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 gap: 12,
//                 marginBottom: 20,
//                 alignItems: "center",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 style={{ width: 70, height: 70, borderRadius: 8, objectFit: "cover" }}
//               />
//               <div style={{ flex: 1 }}>
//                 <b>{item.name}</b>
//                 <p style={{ margin: "4px 0" }}>{item.price.toLocaleString()} VNĐ</p>

//                 <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     style={{
//                       width: 28,
//                       height: 28,
//                       borderRadius: 6,
//                       border: "1px solid #ccc",
//                       background: "#f1f1f1",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                       transition: "all 0.2s",
//                     }}
//                   >
//                     -
//                   </button>
//                   <span style={{ minWidth: 24, textAlign: "center" }}>{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     style={{
//                       width: 28,
//                       height: 28,
//                       borderRadius: 6,
//                       border: "1px solid #ccc",
//                       background: "#f1f1f1",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                       transition: "all 0.2s",
//                     }}
//                   >
//                     +
//                   </button>

//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     style={{
//                       marginLeft: 12,
//                       background: "#e63946",
//                       color: "#fff",
//                       border: "none",
//                       padding: "4px 10px",
//                       borderRadius: 6,
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                       transition: "all 0.2s",
//                     }}
//                   >
//                     Xóa
//                   </button>
//                 </div>
//               </div>

//               <div style={{ minWidth: 80, textAlign: "right", fontWeight: "bold" }}>
//                 {(item.price * item.quantity).toLocaleString()} VNĐ
//               </div>
//             </div>
//           ))
//         )}

//         {cart.length > 0 && (
//           <div style={{ marginTop: 20 }}>
//             <hr />
//             <p style={{ fontWeight: "700", textAlign: "right", marginTop: 10 }}>
//               Tổng: {totalPrice.toLocaleString()} VNĐ
//             </p>
//             <button
//               onClick={() => {
//                 alert("Thanh toán thành công!");
//                 clearCart();
//                 onClose();
//               }}
//               style={{
//                 width: "100%",
//                 padding: 12,
//                 marginTop: 10,
//                 background: "#28a745",
//                 color: "#fff",
//                 border: "none",
//                 cursor: "pointer",
//                 borderRadius: 8,
//                 fontWeight: "bold",
//                 fontSize: 16,
//                 transition: "all 0.2s",
//               }}
//             >
//               🛒 Thanh toán
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartModal;



//CODE GIỎ HÀNG MỚI
// import React, { useState } from "react";
// import { useCart } from "./CartContext";
// import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

// const CartModal = ({ isOpen, onClose }) => {
//   const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } =
//     useCart();
//   const [animatingId, setAnimatingId] = useState(null);

//   if (!isOpen) return null;

//   const handleQuantityChange = (id, newQty) => {
//     if (newQty < 1) return; // không cho <1
//     setAnimatingId(id);
//     updateQuantity(id, newQty);
//     setTimeout(() => setAnimatingId(null), 150); // hiệu ứng scale
//   };

//   return (
//     <div
//       onClick={(e) => e.target.id === "overlay" && onClose()}
//       id="overlay"
//       style={{
//         position: "fixed",
//         inset: 0,
//         background: "rgba(0,0,0,0.45)",
//         display: "flex",
//         justifyContent: "flex-end",
//         zIndex: 9999,
//       }}
//     >
//       <div
//         style={{
//           width: 430,
//           background: "#fff",
//           height: "100vh",
//           padding: 20,
//           overflowY: "auto",
//           position: "relative",
//           transform: isOpen ? "translateX(0)" : "translateX(100%)",
//           transition: "transform 0.3s ease",
//         }}
//         role="dialog"
//         aria-modal="true"
//       >
//         {/* nút đóng */}
//         <button
//           onClick={onClose}
//           style={{
//             position: "absolute",
//             top: 12,
//             right: 12,
//             border: "none",
//             background: "transparent",
//             cursor: "pointer",
//           }}
//         >
//           <FaTimes size={20} />
//         </button>

//         <h2 style={{ marginBottom: 10 }}>Giỏ hàng</h2>
//         <hr style={{ marginBottom: 15 }} />

//         {cart.length === 0 ? (
//           <p style={{ textAlign: "center", marginTop: 50 }}>
//             Chưa có sản phẩm nào
//           </p>
//         ) : (
//           cart.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 gap: 12,
//                 marginBottom: 14,
//                 padding: 8,
//                 borderRadius: 8,
//                 transition: "background 0.2s, box-shadow 0.2s",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "#f9f9f9";
//                 e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "transparent";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 style={{ width: 70, height: 70, borderRadius: 8, objectFit: "cover" }}
//               />

//               <div style={{ flex: 1 }}>
//                 <b>{item.name}</b>
//                 <p>{item.price.toLocaleString()} VNĐ</p>

//                 <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 5 }}>
//                   <button
//                     onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                     style={{
//                       padding: "6px",
//                       borderRadius: "4px",
//                       border: "1px solid #ccc",
//                       background: "#f0f0f0",
//                       cursor: "pointer",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       transition: "all 0.2s",
//                     }}
//                   >
//                     <FaMinus />
//                   </button>

//                   <span
//                     style={{
//                       width: 28,
//                       textAlign: "center",
//                       fontWeight: "bold",
//                       display: "inline-block",
//                       transform: animatingId === item.id ? "scale(1.4)" : "scale(1)",
//                       transition: "transform 0.15s",
//                     }}
//                   >
//                     {item.quantity}
//                   </span>

//                   <button
//                     onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                     style={{
//                       padding: "6px",
//                       borderRadius: "4px",
//                       border: "1px solid #ccc",
//                       background: "#f0f0f0",
//                       cursor: "pointer",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       transition: "all 0.2s",
//                     }}
//                   >
//                     <FaPlus />
//                   </button>

//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     style={{
//                       color: "red",
//                       marginLeft: 10,
//                       background: "transparent",
//                       border: "none",
//                       cursor: "pointer",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 4,
//                     }}
//                   >
//                     <FaTrash /> Xóa
//                   </button>
//                 </div>
//               </div>

//               <div style={{ minWidth: 80, textAlign: "right", fontWeight: "bold" }}>
//                 {(item.price * item.quantity).toLocaleString()} VNĐ
//               </div>
//             </div>
//           ))
//         )}

//         {cart.length > 0 && (
//           <div style={{ marginTop: 20 }}>
//             <hr />
//             <p style={{ fontWeight: 700, marginTop: 10 }}>
//               Tổng: {totalPrice.toLocaleString()} VNĐ
//             </p>

//             <button
//               onClick={() => {
//                 alert("Thanh toán thành công!");
//                 clearCart();
//                 onClose();
//               }}
//               style={{
//                 width: "100%",
//                 padding: 14,
//                 marginTop: 12,
//                 background: "linear-gradient(90deg, #28a745, #1c7c31)",
//                 color: "#fff",
//                 border: "none",
//                 cursor: "pointer",
//                 borderRadius: 8,
//                 fontWeight: "bold",
//                 fontSize: 16,
//                 boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
//                 transition: "transform 0.2s, box-shadow 0.2s",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-2px)";
//                 e.currentTarget.style.boxShadow = "0 6px 10px rgba(0,0,0,0.2)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.15)";
//               }}
//             >
//               🛒 Thanh toán
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartModal;
import React, { useState } from "react";
import { useCart } from "./CartContext";
import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart, totalItems } = useCart();
  const [animatingId, setAnimatingId] = useState(null);

  if (!isOpen) return null;

  const handleQuantityChange = (id, newQty) => {
    if (newQty < 1) return; // không cho <1
    setAnimatingId(id);
    updateQuantity(id, newQty); // gọi thẳng từ context
    setTimeout(() => setAnimatingId(null), 150); // hiệu ứng scale
  };

  return (
    <div
      onClick={(e) => e.target.id === "overlay" && onClose()}
      id="overlay"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        justifyContent: "flex-end",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: 430,
          background: "#fff",
          height: "100vh",
          padding: 20,
          overflowY: "auto",
          position: "relative",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
        role="dialog"
        aria-modal="true"
      >
        {/* nút đóng */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <FaTimes size={20} />
        </button>

        {/* Hiển thị số lượng sản phẩm thực tế */}
        <h2 style={{ marginBottom: 10 }}>Giỏ hàng ({totalItems})</h2>
        <hr style={{ marginBottom: 15 }} />

        {cart.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: 50 }}>Chưa có sản phẩm nào</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 14,
                padding: 8,
                borderRadius: 8,
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f9f9f9";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 70, height: 70, borderRadius: 8, objectFit: "cover" }}
              />

              <div style={{ flex: 1 }}>
                <b>{item.name}</b>
                <p>{item.price.toLocaleString()} VNĐ</p>

                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 5 }}>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    style={{
                      padding: "6px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      background: "#f0f0f0",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    <FaMinus />
                  </button>

                  <span
                    style={{
                      width: 28,
                      textAlign: "center",
                      fontWeight: "bold",
                      display: "inline-block",
                      transform: animatingId === item.id ? "scale(1.4)" : "scale(1)",
                      transition: "transform 0.15s",
                    }}
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    style={{
                      padding: "6px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      background: "#f0f0f0",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    <FaPlus />
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      color: "red",
                      marginLeft: 10,
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <FaTrash /> Xóa
                  </button>
                </div>
              </div>

              <div style={{ minWidth: 80, textAlign: "right", fontWeight: "bold" }}>
                {(item.price * item.quantity).toLocaleString()} VNĐ
              </div>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <hr />
            <p style={{ fontWeight: 700, marginTop: 10 }}>
              Tổng: {totalPrice.toLocaleString()} VNĐ
            </p>

            <button
              onClick={() => {
                alert("Thanh toán thành công!");
                clearCart();
                onClose();
              }}
              style={{
                width: "100%",
                padding: 14,
                marginTop: 12,
                background: "linear-gradient(90deg, #28a745, #1c7c31)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                borderRadius: 8,
                fontWeight: "bold",
                fontSize: 16,
                boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 10px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.15)";
              }}
            >
              🛒 Thanh toán
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;

