// import React from "react";
// import { useCart } from "./CartContext";

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const CartModal: React.FC<Props> = ({ isOpen, onClose }) => {
//   const { cartItems, removeFromCart } = useCart();

//   if (!isOpen) return null;

//   return (
//     <div
//       className="modal-backdrop"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgba(0,0,0,0.5)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         className="modal-content"
//         style={{
//           backgroundColor: "#fff",
//           padding: "20px",
//           borderRadius: "8px",
//           width: "400px",
//         }}
//       >
//         <h2>Giỏ Hàng</h2>
//         <button onClick={onClose} style={{ marginBottom: "10px" }}>
//           Đóng
//         </button>
//         {cartItems.length === 0 ? (
//           <p>Giỏ hàng trống</p>
//         ) : (
//           cartItems.map((item) => (
//             <div key={item.id} style={{ marginBottom: "10px" }}>
//               <span>{item.name}</span> -{" "}
//               <span>
//                 {item.price} VND x {item.quantity}
//               </span>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 style={{ marginLeft: "10px" }}
//               >
//                 Xóa
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartModal;
// Ở TRÊN LÀ CODE TSX

import React from "react";
import { useCart } from "./CartContext";

export default function CartModal({ isOpen, onClose }) {
  const { cartItems, removeFromCart } = useCart();

  if (!isOpen) return null;

  return (
    <div style={{position:"fixed", top:0, left:0, width:"100%", height:"100%", background:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{background:"#fff", padding:"20px", borderRadius:"8px", width:"400px"}}>
        <h2>Giỏ Hàng</h2>
        <button onClick={onClose}>Đóng</button>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id}>
              <span>{item.name}</span> - <span>{item.price} VND x {item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)}>Xóa</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

