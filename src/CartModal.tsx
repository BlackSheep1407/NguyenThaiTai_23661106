import React from "react";
import { useCart } from "./CartContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: "flex" }}>
      <div
        className="modal-content"
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <span
          className="close"
          onClick={onClose}
          style={{ cursor: "pointer", float: "right", fontSize: "20px" }}
        >
          &times;
        </span>
        <h2>Giỏ hàng</h2>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                width={50}
                style={{ marginRight: "10px" }}
              />
              <div style={{ flex: 1 }}>
                <p>{item.title}</p>
                <p>{item.price} VNĐ</p>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span style={{ margin: "0 5px" }}>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Xóa</button>
            </div>
          ))
        )}
        <h3>Tổng tiền: {totalPrice} VNĐ</h3>
      </div>
    </div>
  );
};

export default CartModal;
