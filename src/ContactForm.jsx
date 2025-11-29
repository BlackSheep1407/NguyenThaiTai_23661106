// import React, { useState } from 'react';

// // Cần thêm CSS cho animation rung nhẹ (vibrate)
// const customStyles = `
//   @keyframes vibrate {
//     0% { transform: translate(1px, 1px); }
//     10% { transform: translate(-1px, -2px); }
//     20% { transform: translate(-3px, 0px); }
//     30% { transform: translate(3px, 2px); }
//     40% { transform: translate(1px, -1px); }
//     50% { transform: translate(-1px, 2px); }
//     60% { transform: translate(-3px, 1px); }
//     70% { transform: translate(3px, 1px); }
//     80% { transform: translate(-1px, -1px); }
//     90% { transform: translate(1px, 2px); }
//     100% { transform: translate(1px, -2px); }
//   }
//   .vibrate-pulse {
//     animation: pulse 1.5s infinite, vibrate 0.5s infinite;
//   }
// `;

// // --- Cấu hình thông tin Liên hệ Nhanh ---
// const CONTACT_INFO = {
//   ZALO_PHONE: '0901234567',
//   MESSENGER_LINK: 'https://m.me/yourpageid',
//   MAP_LINK: 'https://maps.app.goo.gl/YourLocationID',
//   BUSINESS_EMAIL: 'support@example.com'
// };

// // --- SVG Icons (Sử dụng icon Phone cho Zalo/Hotline) ---
// const PhoneIcon = ({ className = "w-5 h-5" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
//   </svg>
// );

// const MessageIcon = ({ className = "w-5 h-5" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//   </svg>
// );

// const MapIcon = ({ className = "w-5 h-5" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
//     <circle cx="12" cy="10" r="3"></circle>
//   </svg>
// );

// // --- Floating Buttons (Sử dụng Inline Styles và Custom CSS Animation) ---
// const FloatingContactButtons = () => {
//   return (
//     <>
//       {/* Inject Custom CSS cho hiệu ứng rung (vibrate) */}
//       <style>{customStyles}</style>

//       {/* Dùng inline style cho vị trí và z-index để đảm bảo độ ưu tiên cao nhất */}
//       <div
//           style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}
//           className="flex flex-col space-y-4 md:right-8 md:bottom-8"
//       >

//         {/* Bản đồ/Địa chỉ (Màu Đỏ) */}
//         <a href={CONTACT_INFO.MAP_LINK} target="_blank" rel="noopener noreferrer" title="Tìm trên Bản đồ"
//           className="p-3 rounded-full bg-red-600 text-white shadow-xl hover:bg-red-700 hover:scale-110 transition-transform duration-300 transform origin-bottom-right">
//           <MapIcon />
//         </a>

//         {/* Messenger (Màu Xanh Facebook) */}
//         <a href={CONTACT_INFO.MESSENGER_LINK} target="_blank" rel="noopener noreferrer" title="Chat qua Messenger"
//           className="p-3 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:scale-110 transition-transform duration-300 transform origin-bottom-right">
//           <MessageIcon />
//         </a>

//         {/* Zalo/Hotline (Màu Xanh Zalo - sử dụng hiệu ứng rung và nhấp nháy kết hợp) */}
//         <a href={`https://zalo.me/${CONTACT_INFO.ZALO_PHONE}`} target="_blank" rel="noopener noreferrer" title={`Chat hoặc Gọi Zalo: ${CONTACT_INFO.ZALO_PHONE}`}
//           className="p-3 rounded-full bg-sky-500 text-white shadow-2xl hover:bg-sky-600 hover:scale-110 transition-transform duration-300 transform origin-bottom-right vibrate-pulse">
//           <PhoneIcon />
//         </a>
//       </div>
//     </>
//   );
// };

// // --- Contact Form Component ---
// const ContactForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   // Mock API submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus(null);

//     try {
//       // Giả lập độ trễ của yêu cầu mạng
//       await new Promise(resolve => setTimeout(resolve, 2000));

//       // Giả lập thành công
//       setStatus({ type: 'success', message: 'Cảm ơn bạn! Tin nhắn đã được gửi thành công.' });
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch {
//       // Giả lập lỗi
//       setStatus({ type: 'error', message: 'Rất tiếc, có lỗi xảy ra. Vui lòng kiểm tra kết nối và thử lại.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const StatusMessage = () => {
//     if (!status) return null;
//     const base = 'p-4 mb-6 rounded-xl flex items-center shadow-md border';
//     const classes = status.type === 'success'
//       ? base + ' bg-green-50 text-green-700 border-green-300'
//       : base + ' bg-red-50 text-red-700 border-red-300';

//     const icon = status.type === 'success'
//       ? <svg className="h-5 w-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
//       : <svg className="h-5 w-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg>;

//     return (
//       <div className={classes} role="alert">
//         <p className="flex items-center text-sm font-medium">
//           {icon}
//           <span className="font-semibold">{status.message}</span>
//         </p>
//       </div>
//     );
//   };

//   return (
//     // Đảm bảo nền và layout chính luôn responsive và căn giữa
//     <div className="min-h-screen font-sans bg-gray-50 flex items-center justify-center p-4 md:p-8">
//       {/* Form Container */}
//       <div className="w-full max-w-xl mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-gray-100">

//         <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-3 leading-tight">Gửi Yêu Cầu Hỗ Trợ</h1>
//         <p className="text-center text-gray-500 mb-8 max-w-md mx-auto">Chúng tôi sẽ phản hồi lại qua email sớm nhất có thể. Hoặc sử dụng các nút liên hệ nhanh ở góc phải.</p>

//         <StatusMessage />

//         <form onSubmit={handleSubmit} className="space-y-6">

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {/* Input Họ và Tên */}
//             <input type="text" name="name" placeholder="Họ và Tên (*)" required value={formData.name} onChange={handleChange} disabled={loading}
//               className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
//             />
//             {/* Input Email */}
//             <input type="email" name="email" placeholder="Email (*)" required value={formData.email} onChange={handleChange} disabled={loading}
//               className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
//             />
//           </div>

//           {/* Input Chủ đề */}
//           <input type="text" name="subject" placeholder="Chủ đề (ví dụ: Vấn đề thanh toán)" value={formData.subject} onChange={handleChange} disabled={loading}
//             className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
//           />

//           {/* Textarea Nội dung */}
//           <textarea name="message" placeholder="Nội dung chi tiết tin nhắn (*)" rows="6" required value={formData.message} onChange={handleChange} disabled={loading}
//             className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none bg-gray-50 text-gray-800 placeholder-gray-400"
//           />

//           {/* Nút Gửi */}
//           <button type="submit" disabled={loading}
//             className="w-full py-4 rounded-xl text-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-300/50 hover:from-indigo-700 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
//             {loading ? (
//                 <div className="flex items-center">
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
//                     </svg>
//                     Đang Gửi...
//                 </div>
//             ) : 'Gửi Tin Nhắn Ngay'}
//           </button>
//         </form>

//         <p className="text-center text-xs text-gray-400 mt-6">Chúng tôi cam kết bảo mật thông tin cá nhân của bạn.</p>
//       </div>

//       {/* Floating Contact Buttons - Sử dụng Inline Style */}
//       <FloatingContactButtons />
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";

// --- CSS TÙY CHỈNH (INLINE) ĐÃ SỬA ---
// Định nghĩa cả pulse và vibrate để đảm bảo hiệu ứng hoạt động hoàn hảo
const customStyles = `
  /* Keyframes cho hiệu ứng rung nhẹ (vibrate) */
  @keyframes vibrate {
    0% { transform: translate(1px, 1px); }
    10% { transform: translate(-1px, -2px); }
    20% { transform: translate(-3px, 0px); }
    30% { transform: translate(3px, 2px); }
    40% { transform: translate(1px, -1px); }
    50% { transform: translate(-1px, 2px); }
    60% { transform: translate(-3px, 1px); }
    70% { transform: translate(3px, 1px); }
    80% { transform: translate(-1px, -1px); }
    90% { transform: translate(1px, 2px); }
    100% { transform: translate(1px, -2px); }
  }

  /* Keyframes cho hiệu ứng nhấp nháy (pulse) - Định nghĩa lại để đảm bảo hoạt động */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Áp dụng hiệu ứng rung và nhấp nháy cho nút Zalo */
  .vibrate-pulse {
    /* Thay thế class pulse của Tailwind bằng keyframes đã định nghĩa rõ */
    animation: 
        pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite, 
        vibrate 0.3s linear infinite;
  }
`;

// --- Cấu hình thông tin Liên hệ Nhanh ---
const CONTACT_INFO = {
  ZALO_PHONE: "0901234567",
  MESSENGER_LINK: "https://m.me/yourpageid", // Thay thế bằng ID trang Facebook của bạn
  MAP_LINK: "https://maps.app.goo.gl/YourLocationID",
  BUSINESS_EMAIL: "support@example.com",
};

// --- SVG Icons ---

// Icon Zalo (Blue/White)
const ZaloIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" fill="#0068FF" />
    <path
      d="M7.74 15.66c-.15.42-.3.83-.45 1.25a.8.8 0 0 0 .96 1.05c.42-.04.83-.15 1.25-.26a7.6 7.6 0 0 0 5.8-3.05 7.6 7.6 0 0 0 1.25-4.52C16.5 5.92 14.1 4 12 4s-4.5 1.92-4.5 4.93a4.7 4.7 0 0 0 1.3 3.1 7.6 7.6 0 0 0 1.7 1.84 1.3 1.3 0 0 1-.36 1.26Z"
      fill="#fff"
    />
  </svg>
);

// Icon Messenger (Blue)
const MessengerIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.13 2 11.23c0 3.03 1.48 5.68 3.82 7.37L4 22l3.35-2.02c1.23.47 2.58.74 4.3.74 5.52 0 10-4.13 10-9.23S17.52 2 12 2zm1.5 11h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"
      fill="#0078FF"
    />
    <path d="M13.5 11.5v-3h-3v3h3z" fill="#fff" />
  </svg>
);

// Icon Map Location
const MapIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// --- Floating Buttons (Sử dụng Inline Styles và Custom CSS Animation) ---
const FloatingContactButtons = () => {
  return (
    <>
      {/* Inject Custom CSS cho animation (Đây là cách chuẩn nhất trong React 1 file) */}
      <style>{customStyles}</style>

      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
        }}
        className="flex flex-col space-y-4 md:right-8 md:bottom-8"
      >
        {/* Bản đồ/Địa chỉ (Màu Đỏ) */}
        <a
          href={CONTACT_INFO.MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          title="Tìm trên Bản đồ"
          className="p-4 rounded-full bg-red-600 text-white shadow-xl hover:bg-red-700 hover:scale-110 transition-transform duration-300 transform origin-bottom-right"
        >
          <MapIcon className="w-6 h-6" />
        </a>

        {/* Messenger (Màu Xanh Facebook) */}
        <a
          href={CONTACT_INFO.MESSENGER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat qua Messenger"
          className="p-4 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:scale-110 transition-transform duration-300 transform origin-bottom-right"
        >
          <MessengerIcon className="w-6 h-6" />
        </a>

        {/* Zalo/Hotline (Màu Xanh Zalo) */}
        <a
          href={`https://zalo.me/${CONTACT_INFO.ZALO_PHONE}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Chat hoặc Gọi Zalo: ${CONTACT_INFO.ZALO_PHONE}`}
          // Sử dụng class vibrate-pulse đã định nghĩa trong customStyles
          className="p-4 rounded-full bg-sky-500 text-white shadow-2xl hover:bg-sky-600 hover:scale-110 transition-transform duration-300 transform origin-bottom-right vibrate-pulse"
        >
          <ZaloIcon className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

// --- Contact Form Component Chính ---
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Mock API submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // Giả lập độ trễ của yêu cầu mạng
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Giả lập thành công
      setStatus({
        type: "success",
        message: "Cảm ơn bạn! Tin nhắn đã được gửi thành công.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      // Giả lập lỗi
      setStatus({
        type: "error",
        message:
          "Rất tiếc, có lỗi xảy ra. Vui lòng kiểm tra kết nối và thử lại.",
      });
    } finally {
      setLoading(false);
    }
  };

  const StatusMessage = () => {
    if (!status) return null;
    const base = "p-4 mb-6 rounded-xl flex items-center shadow-md border";
    const classes =
      status.type === "success"
        ? base + " bg-green-50 text-green-700 border-green-300"
        : base + " bg-red-50 text-red-700 border-red-300";

    const icon =
      status.type === "success" ? (
        <svg
          className="h-5 w-5 mr-3 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7"></path>
        </svg>
      ) : (
        <svg
          className="h-5 w-5 mr-3 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      );

    return (
      <div className={classes} role="alert">
        <p className="flex items-center text-sm font-medium">
          {icon}
          <span className="font-semibold">{status.message}</span>
        </p>
      </div>
    );
  };

  return (
    // Toàn bộ các style giao diện đã là Tailwind CSS classes
    <div className="min-h-screen font-sans bg-gray-50 flex items-center justify-center p-4 md:p-8">
      {/* Form Container */}
      <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-12 rounded-[28px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-2 leading-snug">
          Liên Hệ Với 2S Fresh Market
        </h1>
        <p className="text-center text-gray-500 mb-10 max-w-md mx-auto text-lg">
          Gửi yêu cầu hoặc sử dụng các nút chat nhanh.
        </p>

        <StatusMessage />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Bố cục 2 cột cho màn hình lớn */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Họ và Tên */}
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Họ và Tên (*)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ví dụ: Nguyễn Văn A"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-white text-gray-800"
              />
            </div>

            {/* Input Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email (*)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ví dụ: hotro@freshmarket.vn"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-white text-gray-800"
              />
            </div>
          </div>

          {/* Input Chủ đề */}
          <div className="relative">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Chủ đề
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Ví dụ: Vấn đề đổi trả hàng"
              value={formData.subject}
              onChange={handleChange}
              disabled={loading}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-white text-gray-800"
            />
          </div>

          {/* Textarea Nội dung */}
          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nội dung chi tiết tin nhắn (*)
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Xin vui lòng mô tả chi tiết yêu cầu của bạn..."
              rows="6"
              required
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none bg-white text-gray-800"
            />
          </div>

          {/* Nút Gửi */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl text-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl shadow-indigo-400/50 hover:from-indigo-700 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-8"
          >
            {loading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Đang Xử Lý...
              </div>
            ) : (
              "Gửi Yêu Cầu Hỗ Trợ Ngay"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-8">
          Bằng việc gửi tin nhắn, bạn đồng ý với Chính sách Bảo mật của chúng
          tôi.
        </p>
      </div>

      {/* Floating Contact Buttons - Vị trí các nút liên hệ nổi */}
      <FloatingContactButtons />
    </div>
  );
};

export default ContactForm;
