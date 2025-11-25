// utils.js

/**
 * Định dạng số thành chuỗi tiền tệ Việt Nam (VND).
 * Ví dụ: 30000 -> 30.000đ
 * @param {number|string} amount - Số tiền cần định dạng.
 * @returns {string} Chuỗi tiền tệ đã định dạng.
 */
export const formatCurrency = (amount) => {
    // Đảm bảo đầu vào là số, nếu không hợp lệ thì trả về chuỗi rỗng
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) return "";
  
    // Sử dụng Intl.NumberFormat với locale 'vi-VN'
    return new Intl.NumberFormat("vi-VN", {
      style: "decimal", // Chỉ định kiểu số thập phân thông thường
      minimumFractionDigits: 0, // Không có số thập phân
      maximumFractionDigits: 0,
    }).format(numericAmount) + "đ"; // Thêm ký hiệu 'đ' sau khi định dạng
  };
  
  /**
   * Chuyển đổi chuỗi có dấu thành slug (dạng URL thân thiện).
   * Ví dụ: "Xoài Cát Chu ngon" -> "xoai-cat-chu-ngon"
   * @param {string} text - Chuỗi cần chuyển đổi.
   * @returns {string} Slug đã được tạo.
   */
  export const slugify = (text) => {
    if (!text) return '';
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD') // Tách các ký tự có dấu thành ký tự cơ bản và dấu phụ
      .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu phụ (như ´, `, ...)
      .replace(/đ/g, 'd') // Xử lý chữ đ/Đ
      .replace(/[^a-z0-9\s-]/g, '') // Loại bỏ tất cả ký tự không phải chữ, số, khoảng trắng hoặc gạch ngang
      .trim()
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/-+/g, '-'); // Thay thế nhiều dấu gạch ngang liền kề bằng một dấu gạch ngang
  };