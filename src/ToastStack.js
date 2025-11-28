// // Toast.js
// import React, { useEffect } from "react";

// const Toast = ({ message, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(onClose, 2000); // tự ẩn sau 2s
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 20,
//         right: 20,
//         backgroundColor: "#1d3557",
//         color: "#fff",
//         padding: "12px 20px",
//         borderRadius: 8,
//         boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//         zIndex: 9999,
//         animation: "slide-in 0.3s ease",
//       }}
//     >
//       {message}
//     </div>
//   );
// };

// export default Toast;
// ToastStack.js
import React, { useEffect } from "react";

const Toast = ({ id, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), 1000); // tự ẩn 2s :2000
    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <div
      style={{
        marginBottom: "10px",
        backgroundColor: "#1d3557",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        animation: "slide-in 0.3s ease",
      }}
    >
      {message}
    </div>
  );
};

const ToastStack = ({ toasts, removeToast }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {toasts.map((t) => (
        <Toast key={t.id} id={t.id} message={t.message} onClose={removeToast} />
      ))}
    </div>
  );
};

export default ToastStack;
