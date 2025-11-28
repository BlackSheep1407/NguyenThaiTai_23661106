import React from "react";
import { useCart } from "./CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Giỏ hàng</h2>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Giỏ hàng trống</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  src={item.image || "https://placehold.co/50x50"}
                  alt={item.title}
                  width={50}
                />
                <p>{item.title}</p>
                <p>{item.price} VNĐ</p>
                <button onClick={() => removeFromCart(index)}>Xóa</button>
              </div>
            ))
          )}
        </div>
        <h3>Tổng tiền: {totalPrice} VNĐ</h3>
      </div>
    </div>
  );
};

export default CartModal;
