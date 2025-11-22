// import products from "./data/products";
import { products } from "./data/product";
// import { products } from "./ListProducts";
import React from "react";
import { useNavigate } from "react-router-dom";
const Trang1 = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/sanpham/${p.id}`)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Trang1;

// import React, { useState, useEffect, useMemo, useCallback } from "react";

// // --- Cấu hình Supabase (Đưa trực tiếp vào file đơn) ---
// const SUPABASE_URL = "https://rhdnydvtpyksbagesfxu.supabase.co"; 
// const SUPABASE_ANON_KEY = "sb_publishable_kjcKirCE8PEKLVyJQN1XYg_PEs6_DU7"; 

// // --- Cấu hình Headers cho API Request ---
// const getHeaders = () => ({
//     'apikey': SUPABASE_ANON_KEY,
//     'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
//     'Content-Type': 'application/json',
// });

// // --- Hàm tiện ích để định dạng tiền tệ Việt Nam ---
// const formatCurrency = (amount) => {
//     if (amount === null || amount === undefined) return '';
    
//     return new Intl.NumberFormat('vi-VN', {
//         style: 'decimal',
//         minimumFractionDigits: 0,
//         maximumFractionDigits: 0
//     }).format(amount) + 'đ';
// };

// // --- Component Thanh Menu Cố Định (Sticky Menu) ---
// const StickyCategoryMenu = ({ categories }) => {
//     // Hàm cuộn mượt mà đến phần tử có ID tương ứng
//     const scrollToCategory = (id) => {
//         const element = document.getElementById(`category-${id}`);
//         if (element) {
//             // Cuộn mượt mà và bù trừ cho chiều cao của thanh menu cố định (70px + 60px cho search bar)
//             const yOffset = -130; 
//             const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
//             window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="sticky-menu">
//             <nav className="menu-container">
//                 {categories.map(category => (
//                     <button 
//                         key={category.categories_id}
//                         onClick={() => scrollToCategory(category.categories_id)}
//                         className="menu-item"
//                         title={`Xem các sản phẩm trong danh mục ${category.name}`}
//                     >
//                         {category.name}
//                     </button>
//                 ))}
//             </nav>
//         </div>
//     );
// };

// // --- Component Thanh Tìm Kiếm ---
// const SearchBar = ({ searchTerm, onSearchChange }) => {
//     return (
//         <div className="search-bar-container">
//             <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => onSearchChange(e.target.value)}
//                 placeholder="Tìm kiếm sản phẩm theo tên..."
//                 className="search-input"
//             />
//             <div className="search-icon">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
//             </div>
//         </div>
//     );
// };

// // --- Product Card Component (Thẻ Sản Phẩm) ---
// const ProductCard = ({ product }) => {
//     return (
//         <div className="product-card">
//             <img 
//                 src={product.image || "https://placehold.co/200x200/73af6f/white?text=Product"} 
//                 alt={product.title} 
//                 className="product-image" 
//                 // Xử lý lỗi tải ảnh
//                 onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/CCCCCC/333333?text=No+Image"; }}
//             />
//             <h3 className="product-title">{product.title}</h3>
//             <p className="product-price">{formatCurrency(product.price)}</p>
//             <div className="product-rating">
//                 <span style={{ color: '#f39c12' }}>★</span> {product.rating_rate || 'N/A'} ({product.rating_count || 0} đánh giá)
//             </div>
//             <a href={`/sanpham/${product.id}`} className="detail-button">
//                 Xem chi tiết
//             </a>
//         </div>
//     );
// };


// // --- Product Sections Component (Chitietsanpham) ---
// const Chitietsanpham = () => {
//     const [categories, setCategories] = useState([]);
//     const [products, setProducts] = useState([]); 
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchTerm, setSearchTerm] = useState(''); // State cho thanh tìm kiếm

//     // Hàm thực hiện fetch API với cơ chế thử lại (Exponential Backoff)
//     const fetchWithRetry = useCallback(async (url, options, maxRetries = 3) => {
//         for (let i = 0; i < maxRetries; i++) {
//             try {
//                 const response = await fetch(url, options);
//                 if (!response.ok) {
//                     const errorBody = await response.text();
//                     throw new Error(`Status ${response.status}: ${errorBody.substring(0, 100)}...`);
//                 }
//                 return response.json();
//             } catch (error) {
//                 if (i === maxRetries - 1) throw error;
//                 await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
//             }
//         }
//     }, []);

//     // Lấy dữ liệu khi component được mount
//     useEffect(() => {
//         const fetchProductsAndCategories = async () => {
//             setLoading(true);
//             setError(null);

//             const headers = getHeaders();
            
//             // 1. Fetch Categories bằng REST API
//             let catData = [];
//             try {
//                 const categoryUrl = `${SUPABASE_URL}/rest/v1/categories?select=categories_id,name&order=categories_id.asc`;
//                 catData = await fetchWithRetry(categoryUrl, { headers });
//                 setCategories(catData || []);
//             } catch (e) {
//                 setError(`Lỗi tải danh mục (categories): ${e.message}. Vui lòng kiểm tra Bảng 'categories' và Key.`);
//                 setLoading(false);
//                 return;
//             }

//             // 2. Fetch All Products bằng REST API
//             try {
//                 const productUrl = `${SUPABASE_URL}/rest/v1/products?select=id,title,price,image,category_id,rating_rate,rating_count&order=id.asc`;
//                 const prodData = await fetchWithRetry(productUrl, { headers });
//                 setProducts(prodData || []);
//             } catch (err) {
//                 setError("Lỗi khi lấy dữ liệu sản phẩm (products): " + err.message);
//             }
            
//             setLoading(false);
//         };
//         fetchProductsAndCategories();
//     }, [fetchWithRetry]);

//     // Lọc sản phẩm dựa trên thanh tìm kiếm
//     const filteredProducts = useMemo(() => {
//         if (!searchTerm) {
//             return products;
//         }
//         const lowerCaseSearchTerm = searchTerm.toLowerCase();
//         return products.filter(product =>
//             product.title.toLowerCase().includes(lowerCaseSearchTerm)
//         );
//     }, [products, searchTerm]);

//     // Nhóm sản phẩm đã lọc theo category_id (Sử dụng useMemo để tối ưu hóa)
//     const groupedProducts = useMemo(() => {
//         if (!categories.length) return {};
        
//         return categories.reduce((acc, category) => {
//             // Lọc sản phẩm đã được lọc ban đầu
//             acc[category.categories_id] = filteredProducts.filter(p => p.category_id === category.categories_id);
//             return acc;
//         }, {});
//     }, [categories, filteredProducts]);

//     // Lấy danh sách Categories có sản phẩm hiển thị (sau khi lọc)
//     const categoriesToShow = useMemo(() => {
//         return categories.filter(cat => 
//             (groupedProducts[cat.categories_id] || []).length > 0 || !searchTerm
//         );
//     }, [categories, groupedProducts, searchTerm]);


//     // Trạng thái Loading và Error
//     if (loading) return <div className="text-center p-10 font-semibold text-lg text-[#73af6f]">Đang tải dữ liệu sản phẩm từ Supabase...</div>;
//     if (error) return <div className="text-center p-10 text-xl font-bold text-red-600 border border-red-300 bg-red-50 rounded-lg mx-auto max-w-lg shadow-md">Lỗi kết nối hoặc dữ liệu: {error}.</div>;


//     return (
//         <div className="product-sections-container">
//             <h1 className="main-title" id="sanpham">Tất cả Sản Phẩm Trái Cây</h1>
            
//             {/* THÊM THANH TÌM KIẾM CỐ ĐỊNH */}
//             <div className="sticky-controls">
//                 <SearchBar 
//                     searchTerm={searchTerm} 
//                     onSearchChange={setSearchTerm} 
//                 />
                
//                 {/* THÊM MENU ĐIỀU HƯỚNG */}
//                 <StickyCategoryMenu categories={categoriesToShow} />
//             </div>

//             {/* HIỂN THỊ KẾT QUẢ */}
//             {filteredProducts.length === 0 && searchTerm ? (
//                 <div className="text-center p-20 text-xl font-medium text-gray-700">
//                     Không tìm thấy sản phẩm nào khớp với từ khóa "{searchTerm}".
//                 </div>
//             ) : categories.length === 0 ? (
//                 <div className="text-center p-10 text-gray-500">Không tìm thấy danh mục nào. Vui lòng kiểm tra bảng 'categories' hoặc khóa API.</div>
//             ) : (
//                 categoriesToShow.map(category => (
//                     // Đặt ID để menu có thể trỏ đến
//                     <section 
//                         key={category.categories_id} 
//                         id={`category-${category.categories_id}`} 
//                         className="category-section"
//                     >
//                         <h2 className="category-title">{category.name}</h2>
//                         <div className="product-grid">
//                             {(groupedProducts[category.categories_id] || []).map(product => (
//                                 <ProductCard key={product.id} product={product} />
//                             ))}
//                         </div>
//                     </section>
//                 ))
//             )}
            
//             <style>{`
//                 /* CSS Styling */
//                 .product-sections-container {
//                     max-width: 1200px;
//                     margin: 0 auto;
//                     padding: 20px;
//                     font-family: 'Inter', sans-serif;
//                 }
//                 .main-title {
//                     font-size: 2.25rem;
//                     font-weight: 700;
//                     color: #493628;
//                     margin-bottom: 30px;
//                     border-bottom: 3px solid #73af6f;
//                     padding-bottom: 10px;
//                     text-align: center;
//                 }
                
//                 /* STICKY CONTROLS CONTAINER */
//                 .sticky-controls {
//                     position: sticky;
//                     top: 0; 
//                     z-index: 1000;
//                     background-color: #ffffff;
//                     border-bottom: 1px solid #e0e0e0;
//                     box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//                     margin-bottom: 20px;
//                     padding-bottom: 5px;
//                 }

//                 /* SEARCH BAR STYLING */
//                 .search-bar-container {
//                     display: flex;
//                     align-items: center;
//                     width: 100%;
//                     max-width: 600px;
//                     margin: 10px auto;
//                     padding: 0 10px;
//                     position: relative;
//                 }
//                 .search-input {
//                     width: 100%;
//                     padding: 12px 15px 12px 40px; 
//                     border: 2px solid #73af6f;
//                     border-radius: 9999px;
//                     font-size: 1rem;
//                     box-shadow: 0 2px 4px rgba(0,0,0,0.05);
//                     transition: border-color 0.2s;
//                 }
//                 .search-input:focus {
//                     outline: none;
//                     border-color: #493628;
//                     box-shadow: 0 0 0 3px rgba(115, 175, 111, 0.3);
//                 }
//                 .search-icon {
//                     position: absolute;
//                     left: 25px;
//                     color: #73af6f;
//                 }

//                 /* STICKY MENU STYLING */
//                 .menu-container {
//                     display: flex;
//                     justify-content: center;
//                     gap: 10px;
//                     padding: 5px 20px;
//                     overflow-x: auto; /* Cho phép cuộn ngang trên mobile */
//                     -webkit-overflow-scrolling: touch;
//                 }
//                 .menu-item {
//                     white-space: nowrap;
//                     background-color: transparent;
//                     border: none;
//                     color: #493628;
//                     padding: 8px 15px;
//                     font-weight: 500;
//                     border-radius: 9999px; /* Rounded pill shape */
//                     cursor: pointer;
//                     transition: all 0.2s ease-in-out;
//                     font-size: 0.95rem;
//                 }
//                 .menu-item:hover {
//                     background-color: #73af6f;
//                     color: white;
//                     box-shadow: 0 2px 5px rgba(115, 175, 111, 0.5);
//                 }


//                 /* PRODUCT SECTION STYLING */
//                 .category-section {
//                     /* Padding lớn hơn để tiêu đề không bị che bởi sticky controls */
//                     padding-top: 150px; 
//                     margin-top: -150px; 
//                     margin-bottom: 40px;
//                 }
//                 .category-title {
//                     font-size: 1.75rem;
//                     font-weight: 600;
//                     color: #73af6f;
//                     margin-bottom: 20px;
//                     padding: 10px 0;
//                     border-left: 5px solid #493628;
//                     padding-left: 15px;
//                     border-radius: 4px;
//                     background-color: #f7fcf6;
//                 }
//                 .product-grid {
//                     display: grid;
//                     grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
//                     gap: 20px;
//                 }
//                 .product-card {
//                     background-color: #fff;
//                     border-radius: 12px;
//                     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
//                     padding: 15px;
//                     text-align: center;
//                     transition: transform 0.3s, box-shadow 0.3s;
//                     display: flex;
//                     flex-direction: column;
//                     border: 1px solid #eee;
//                 }
//                 .product-card:hover {
//                     transform: translateY(-5px);
//                     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
//                 }
//                 .product-image {
//                     width: 100%;
//                     height: 200px; 
//                     object-fit: cover;
//                     border-radius: 8px;
//                     margin-bottom: 10px;
//                 }
//                 .product-title {
//                     font-size: 1.1rem;
//                     font-weight: 600;
//                     color: #493628;
//                     margin: 5px 0;
//                     flex-grow: 1;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     display: -webkit-box;
//                     -webkit-line-clamp: 2; 
//                     -webkit-box-orient: vertical;
//                     height: 2.8em; 
//                 }
//                 .product-price {
//                     font-size: 1.25rem;
//                     font-weight: 700;
//                     color: #b22d30;
//                     margin: 5px 0 10px;
//                 }
//                 .product-rating {
//                     font-size: 0.9rem;
//                     color: #888;
//                     margin-bottom: 15px;
//                 }
//                 .detail-button {
//                     display: inline-block;
//                     background-color: #73af6f;
//                     color: white;
//                     padding: 8px 15px;
//                     border-radius: 6px;
//                     text-decoration: none;
//                     font-weight: 600;
//                     transition: background-color 0.2s;
//                     margin-top: auto; 
//                 }
//                 .detail-button:hover {
//                     background-color: #5d935a;
//                 }
//                 .no-products {
//                     grid-column: 1 / -1;
//                     color: #888;
//                     padding: 20px;
//                     text-align: center;
//                     border: 1px dashed #ccc;
//                     border-radius: 8px;
//                 }

//                 /* Responsive Adjustments */
//                 @media (max-width: 768px) {
//                     .main-title { font-size: 1.75rem; }
//                     .category-title { font-size: 1.5rem; }
//                     .product-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
//                     .search-input { padding: 10px 15px 10px 35px; }
//                     .search-icon { left: 20px; }
//                     .category-section {
//                         padding-top: 130px; 
//                         margin-top: -130px; 
//                     }
//                 }
//                 @media (max-width: 480px) {
//                     .menu-container {
//                         justify-content: flex-start; /* Cuộn từ trái sang phải */
//                     }
//                     .menu-item {
//                         padding: 6px 10px;
//                         font-size: 0.85rem;
//                     }
//                 }

//             `}</style>
//         </div>
//     );
// };

// export default Chitietsanpham;