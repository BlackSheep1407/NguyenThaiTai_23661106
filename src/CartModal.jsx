import React from "react";
import { useCart } from "./CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Giỏ hàng</h2>
        <div className="cart-items">
          {cartItems.length === 0 && <p>Giỏ hàng trống</p>}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width={50} />
              <p>{item.name}</p>
              <p>{item.price} VNĐ</p>
              <div>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <p>Tổng: {item.price * item.quantity} VNĐ</p>
              <button onClick={() => removeFromCart(item.id)}>Xóa</button>
            </div>
          ))}
        </div>
        <h3>Tổng tiền: {totalPrice} VNĐ</h3>
      </div>
    </div>
  );
};

export default CartModal;
