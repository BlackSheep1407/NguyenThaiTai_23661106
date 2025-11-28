import React, { useState } from 'react';

// --- Cấu hình thông tin Liên hệ Nhanh ---
const CONTACT_INFO = {
  ZALO_PHONE: '0901234567', // Thay bằng số Zalo của bạn
  MESSENGER_LINK: 'https://m.me/yourpageid', // Thay bằng ID Messenger/Page của bạn
  MAP_LINK: 'https://maps.app.goo.gl/YourLocationID', // Thay bằng link Google Maps của bạn
  BUSINESS_EMAIL: 'support@example.com'
};

// --- SVG Icons cho các nút nổi (Sử dụng lucide-react style) ---

// Icon cho Zalo (Thường dùng hình tin nhắn hoặc điện thoại)
const ZaloIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.42 8.42 0 0 1 8 8Z"></path>
  </svg>
);

// Icon cho Messenger (Biểu tượng tin nhắn)
const MessageIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

// Icon cho Map (Biểu tượng vị trí)
const MapIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// --- Component Nút Nổi Liên Hệ ---
const FloatingContactButtons = () => (
  <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
    
    {/* Nút Map */}
    <a 
      href={CONTACT_INFO.MAP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      title="Tìm trên Bản đồ"
      className="p-3.5 rounded-full bg-red-600 text-white shadow-xl hover:bg-red-700 transition duration-300 transform hover:scale-105"
    >
      <MapIcon className="w-6 h-6" />
    </a>
    
    {/* Nút Messenger */}
    <a 
      href={CONTACT_INFO.MESSENGER_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      title="Chat qua Messenger"
      className="p-3.5 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-105"
    >
      <MessageIcon className="w-6 h-6" />
    </a>

    {/* Nút Zalo */}
    <a 
      href={`https://zalo.me/${CONTACT_INFO.ZALO_PHONE}`} 
      target="_blank" 
      rel="noopener noreferrer"
      title="Chat qua Zalo"
      className="p-3.5 rounded-full bg-sky-500 text-white shadow-xl hover:bg-sky-600 transition duration-300 transform hover:scale-105"
    >
      <ZaloIcon className="w-6 h-6" />
    </a>
  </div>
);


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // MÔ PHỎNG GỌI API
    console.log("Dữ liệu gửi đi:", formData);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus({ type: 'success', message: 'Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.' });
      setFormData({ name: '', email: '', subject: '', message: '' }); 
    } catch (error) {
      setStatus({ type: 'error', message: 'Rất tiếc, có lỗi xảy ra. Vui lòng thử lại sau.' });
    } finally {
      setLoading(false);
    }
  };

  // Status Message Component (Sử dụng lại từ lần trước)
  const StatusMessage = () => {
    if (!status) return null;

    let classes = 'p-4 mb-6 border rounded-xl flex items-center shadow-md';
    let icon = null;
    
    if (status.type === 'success') {
      classes += ' bg-green-100 text-green-700 border-green-300';
      icon = <svg className="h-5 w-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;
    } else { 
      classes += ' bg-red-100 text-red-700 border-red-300';
      icon = <svg className="h-5 w-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>;
    }

    return (
      <div className={classes} role="alert">
        <p className="flex items-center text-sm font-medium">
          {icon}
          <span className='font-semibold'>{status.message}</span>
        </p>
      </div>
    );
  };

  // Main Render
  return (
    <div className="relative min-h-screen p-4 sm:p-8" 
         style={{ 
           backgroundImage: 'linear-gradient(135deg, #f0f4f8 0%, #e0e7f0 100%)' 
         }}
    >
      <div className="flex items-center justify-center pt-10 pb-20">
        <div className="max-w-xl w-full bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-50">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Gửi Tin Nhắn Cho Chúng Tôi
            </h1>
            <p className="mt-3 text-base text-gray-500">
              Bạn có bất kỳ câu hỏi nào không? Hãy điền vào biểu mẫu dưới đây, hoặc sử dụng các nút liên hệ nhanh.
            </p>
          </div>

          <StatusMessage />

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Tên và Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Tên */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Tên của bạn *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  placeholder="Họ và Tên"
                  disabled={loading}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email của bạn *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  placeholder={CONTACT_INFO.BUSINESS_EMAIL}
                  disabled={loading}
                />
              </div>
            </div>

            {/* Chủ đề */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Chủ đề</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                placeholder="Ví dụ: Yêu cầu Hỗ trợ Kỹ thuật"
                disabled={loading}
              />
            </div>

            {/* Nội dung */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Nội dung tin nhắn *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none"
                placeholder="Chi tiết yêu cầu của bạn..."
                disabled={loading}
              ></textarea>
            </div>

            {/* Button Gửi */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center py-4 px-6 rounded-2xl text-xl font-bold text-white 
                           bg-gradient-to-r from-indigo-600 to-purple-600 
                           shadow-lg shadow-indigo-300/50 
                           hover:from-indigo-700 hover:to-purple-700 
                           focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 
                           transition duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="w-6 h-6 mr-3 animate-spin text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.995 8.995 0 0120 12.583C20 16.297 16.96 19 13.5 19H11.5"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 01-8.582-12.871M4.305 7.828l.385-1.542M14 4h5v.582m-15.356 2A8.995 8.995 0 014 12.583C4 16.297 7.04 19 10.5 19H12.5"></path></svg>
                    <span>Đang Gửi...</span>
                  </>
                ) : (
                  <span>Gửi Tin Nhắn Ngay</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Thêm các nút nổi */}
      <FloatingContactButtons />

    </div>
  );
};

export default ContactForm;