// // src/Chitietsanpham.js
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { supabase } from "./supabaseClient";

// export default function Chitietsanpham() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("products")
//           .select("*")
//           .eq("id", id)
//           .single();

//         if (error) {
//           throw new Error(`Lỗi Supabase: ${error.message}`);
//         }

//         if (!data) {
//           throw new Error("Không tìm thấy sản phẩm trong cơ sở dữ liệu.");
//         }

//         setProduct(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return <p style={{ padding: 20 }}>Đang tải dữ liệu...</p>;
//   }

//   if (error || !product) {
//     return (
//       <div style={{ padding: 20 }}>
//         <h3>Không tìm thấy sản phẩm!</h3>
//         <p>{error}</p>
//         <button onClick={() => navigate("/")}>Quay lại Trang Chủ</button>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
//         ⬅ Quay lại
//       </button>

//       <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{ width: "250px", height: "250px", objectFit: "contain" }}
//         />
//         <div>
//           <h2>{product.title}</h2>
//           <p style={{ margin: "5px 0" }}>
//             <small style={{ color: "#555" }}>
//               ⭐ {product.rating_rate} | ({product.rating_count} đánh giá)
//             </small>
//           </p>
//           <p>
//             <strong>Giá:</strong> ${product.price}
//           </p>
//           <p>
//             <strong>Loại ID:</strong> {product.category_id}
//           </p>
//           <p style={{ maxWidth: "400px" }}>{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // src/Chitietsanpham.js
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function Chitietsanpham() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

// // Hàm tiện ích để định dạng tiền tệ Việt Nam (30000 -> 30.000đ)
// const formatCurrency = (amount) => {
//   if (amount === null || amount === undefined) return "";

//   // Sử dụng Intl.NumberFormat với locale 'vi-VN'
//   return (
//     new Intl.NumberFormat("vi-VN", {
//       style: "decimal", // Chỉ định kiểu số thập phân thông thường
//       minimumFractionDigits: 0, // Đảm bảo không có số thập phân (như .00)
//       maximumFractionDigits: 0,
//     }).format(amount) + "đ"
//   ); // Thêm ký hiệu 'đ' sau khi định dạng
// };

//   useEffect(() => {
//     // Gọi API để lấy thông tin sản phẩm theo id
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `https://68f97a99ef8b2e621e7c302b.mockapi.io/products/${id}`
//         );
//         if (!response.ok) {
//           throw new Error("Không thể tải sản phẩm!");
//         }
//         const data = await response.json();
//         setProduct(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return <p style={{ padding: 20 }}>Đang tải dữ liệu...</p>;
//   }

//   if (error || !product) {
//     return (
//       <div style={{ padding: 20 }}>
//         <h3>Không tìm thấy sản phẩm!</h3>
//         <p>{error}</p>
//         <button onClick={() => navigate("/trang1")}>Quay lại Trang 1</button>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
//         ⬅ Quay lại
//       </button>

//       <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{ width: "250px", height: "250px", objectFit: "contain" }}
//         />
//         <div>
//           <h2>{product.title}</h2>
//           <p>
//             <strong>Giá:</strong>  {formatCurrency(product.price)}
//           </p>
//           <p>
//             <strong>Loại:</strong> {product.category}
//           </p>
//           <p style={{ maxWidth: "400px" }}>{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// // Import đã được giải quyết bằng việc tạo lại supabaseClient.js
// import { supabase } from "./supabaseClient";

// export default function Chitietsanpham() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Định dạng tiền tệ theo kiểu Việt Nam (ví dụ 50000 -> 50.000đ)
//   const formatCurrency = (amount) => {
//     if (amount === null || amount === undefined) return "N/A";
//     // Giả định giá trong DB là VND và cần định dạng
//     return (
//       new Intl.NumberFormat("vi-VN", {
//         style: "decimal",
//         minimumFractionDigits: 0,
//         maximumFractionDigits: 0,
//       }).format(amount) + "đ"
//     );
//   };

//   useEffect(() => {
//     const fetchProduct = async () => {
//       if (!id) {
//         setError("Thiếu ID sản phẩm.");
//         setLoading(false);
//         return;
//       }

//       try {
//         // Lấy dữ liệu sản phẩm và JOIN với tên loại sản phẩm
//         const { data, error } = await supabase
//           .from("products")
//           .select("*, categories(name)")
//           .eq("id", id)
//           .single();

//         if (error) {
//           throw new Error(`Lỗi Supabase: ${error.message}`);
//         }

//         if (!data) {
//           throw new Error("Không tìm thấy sản phẩm trong cơ sở dữ liệu.");
//         }

//         setProduct(data);
//       } catch (err) {
//         console.error("Lỗi tải chi tiết sản phẩm:", err.message);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="p-4 flex justify-center items-center h-screen bg-gray-50">
//         <p className="text-lg text-gray-600">Đang tải dữ liệu...</p>
//       </div>
//     );
//   }

//   // Xử lý lỗi và thông báo cho người dùng kiểm tra cấu hình DB
//   if (error || !product) {
//     return (
//       <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-10">
//         <h3 className="text-xl font-bold text-red-600 mb-4">
//           Không tìm thấy sản phẩm!
//         </h3>
//         <p className="text-gray-700 mb-6">
//           Lỗi: {error}
//           <br/>
//           Vui lòng kiểm tra lại ID sản phẩm hoặc cấu hình kết nối Supabase.
//         </p>
//         <button
//           onClick={() => navigate("/")}
//           className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//         >
//           Quay lại Trang Chủ
//         </button>
//       </div>
//     );
//   }

//   const categoryName = product.categories?.name || "Chưa phân loại";

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
//       {/* Container chính: Đã đổi max-w-4xl thành max-w-6xl để rộng hơn */}
//       <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-2xl">

//         {/* Nút Quay lại */}
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-6 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition duration-300 flex items-center"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 mr-1"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M10 19l-7-7m0 0l7-7m-7 7h18"
//             />
//           </svg>
//           Quay lại
//         </button>

//         {/* KHỐI LAYOUT CHÍNH: 2 CỘT */}
//         {/* Đã đổi md:flex-row thành sm:flex-row để 2 cột xuất hiện sớm hơn */}
//         <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">

//           {/* CỘT 1: HÌNH ẢNH SẢN PHẨM (Chiếm 1/3) */}
//           <div
//             // className="sm:w-1/3 w-full p-4 border rounded-xl bg-white shadow-lg flex justify-center items-center h-80 flex-shrink-0"
//              style={{
//               width: "100%",
//               height: "200px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               overflow: "hidden",
//               borderRadius: "8px",
//               backgroundColor: "#f9f9f9",
//               marginBottom: "10px",
//             }}
//           >
//             <img
//               // Dùng placeholder nếu ảnh trống
//               src={product.image || "https://placehold.co/300x300/cccccc/333333?text=Sản+Phẩm"}
//               alt={product.title}
//               // Đảm bảo hình ảnh vừa vặn trong khung 1/3
//               className="max-w-full max-h-full object-contain rounded-md"
//             />
//           </div>

//           {/* CỘT 2: THÔNG TIN SẢN PHẨM (Chiếm 2/3) */}
//           <div className="sm:w-2/3 w-full">
//             <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
//               {product.title}
//             </h1>

//             {/* Thông tin Rating */}
//             <div className="flex items-center space-x-2 mb-4 text-gray-600">
//               <span className="text-yellow-500 font-bold">
//                 ⭐ {product.rating_rate || "N/A"}
//               </span>
//               <span>|</span>
//               <span className="text-sm">
//                 ({product.rating_count || 0} đánh giá)
//               </span>
//             </div>

//             {/* Giá sản phẩm - Đã dùng formatCurrency */}
//             <p className="text-4xl font-bold text-red-600 mb-6">
//               {formatCurrency(product.price)}
//             </p>

//             {/* Thông tin cơ bản */}
//             <div className="space-y-2 mb-8 text-gray-700">
//               <p>
//                 <strong className="font-semibold text-gray-800">Mã sản phẩm:</strong> {product.id}
//               </p>
//               <p>
//                 <strong className="font-semibold text-gray-800">Loại:</strong> {categoryName}
//               </p>
//             </div>

//             {/* Mô tả */}
//             <h3 className="text-xl font-semibold text-gray-900 mb-2 border-b pb-1">
//               Mô tả chi tiết
//             </h3>
//             <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//               {product.description || "Sản phẩm này chưa có mô tả chi tiết."}
//             </p>

//             {/* Nút Mua hàng */}
//             <button
//               className="mt-8 w-full md:w-auto px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-xl shadow-xl hover:bg-green-700 transition duration-300 transform hover:scale-[1.02]"
//               onClick={() =>
//                 console.log(`Thêm sản phẩm ${product.title} vào giỏ hàng`)
//               }
//             >
//               Thêm vào Giỏ Hàng
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// // LƯU Ý: Đã xóa import { createClient } từ "@supabase/supabase-js"
// // để tránh lỗi biên dịch, thay vào đó sử dụng fetch API trực tiếp.

// // Khởi tạo các hằng số cấu hình Supabase
// const SUPABASE_URL =
//   process.env.SUPABASE_URL || "https://rhdnydvtpyksbagesfxu.supabase.co";
// const SUPABASE_ANON_KEY =
//   process.env.SUPABASE_ANON_KEY ||
//   "sb_publishable_kjcKirCE8PEKLVyJQN1XYg_PEs6_DU7";

// export default function Chitietsanpham() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Định dạng tiền tệ theo kiểu Việt Nam (ví dụ 50000 -> 50.000đ)
//   const formatCurrency = (amount) => {
//     if (amount === null || amount === undefined) return "N/A";
//     return (
//       new Intl.NumberFormat("vi-VN", {
//         style: "decimal",
//         minimumFractionDigits: 0,
//         maximumFractionDigits: 0,
//       }).format(amount) + "đ"
//     );
//   };

//   // Sử dụng hàm fetch API để truy vấn Supabase
//   const fetchProduct = async (productId) => {
//     // Xây dựng URL: Lấy sản phẩm có ID bằng 'id' và join với bảng categories.
//     const apiUrl = `${SUPABASE_URL}/rest/v1/products?id=eq.${productId}&select=*,categories(name)`;

//     const response = await fetch(apiUrl, {
//       method: "GET",
//       headers: {
//         apikey: SUPABASE_ANON_KEY,
//         Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
//         "Content-Type": "application/json",
//         "Accept-Profile": "public",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(
//         `Lỗi kết nối API: ${response.status} ${response.statusText}`
//       );
//     }

//     const data = await response.json();

//     if (!data || data.length === 0) {
//       throw new Error("Không tìm thấy sản phẩm trong cơ sở dữ liệu.");
//     }

//     return data[0];
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       if (!id) {
//         setError("Thiếu ID sản phẩm.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const data = await fetchProduct(id);
//         setProduct(data);
//       } catch (err) {
//         console.error("Lỗi tải chi tiết sản phẩm:", err.message);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [id]);

//   // --- HIỂN THỊ TRẠNG THÁI TẢI ---
//   if (loading) {
//     return (
//       <div className="p-4 flex justify-center items-center min-h-screen bg-gray-50">
//         <p className="text-xl text-gray-600 font-medium animate-pulse">
//           Đang tải dữ liệu sản phẩm...
//         </p>
//       </div>
//     );
//   }

//   // --- HIỂN THỊ LỖI KHI TẢI DỮ LIỆU THẤT BẠI ---
//   if (error || !product) {
//     return (
//       <div className="p-8 bg-white shadow-xl rounded-2xl max-w-lg mx-auto mt-20 border border-red-200">
//         <h3 className="text-2xl font-extrabold text-red-700 mb-4">
//           ❌ Không tìm thấy sản phẩm!
//         </h3>
//         <p className="text-gray-700 mb-6 leading-relaxed">
//           <strong className="block mb-2">Thông báo Lỗi:</strong>
//           {error}
//           <br />
//           Vui lòng kiểm tra lại ID sản phẩm, quy tắc bảo mật (RLS) và cấu hình
//           kết nối Supabase.
//         </p>
//         <button
//           onClick={() => navigate("/")}
//           className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]"
//         >
//           &larr; Quay lại Trang Chủ
//         </button>
//       </div>
//     );
//   }

//   const categoryName = product.categories?.name || "Chưa phân loại";

//   // --- HIỂN THỊ CHI TIẾT SẢN PHẨM ---
//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4 font-sans">
//       {/* Thay đổi: Giảm max-w-7xl thành max-w-5xl để container không quá rộng */}
//       <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100">
//         {/* Nút Quay lại */}
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-8 px-5 py-2 text-sm text-blue-700 border border-blue-200 bg-blue-50 rounded-full hover:bg-blue-100 transition duration-300 flex items-center shadow-md"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 mr-1"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M10 19l-7-7m0 0l7-7m-7 7h18"
//             />
//           </svg>
//           Quay lại danh sách
//         </button>

//         {/* KHỐI LAYOUT CHÍNH: 2 CỘT (Hình ảnh vs Thông tin) */}
//         <div className="flex flex-col lg:flex-row gap-8 items-start">
//           {/* CỘT 1: HÌNH ẢNH SẢN PHẨM (Chiếm 1/3) */}
//           {/* Đảm bảo hình ảnh không chiếm quá nhiều không gian theo chiều dọc trên mobile */}
//           <div
//             // Tối ưu hóa: Giữ lg:w-1/3 nhưng thêm flex-shrink-0 để ảnh không bị bóp
//             className="lg:w-1/3 w-full flex-shrink-0 p-4 bg-gray-50 rounded-2xl border border-gray-200 shadow-inner"
//             style={{
//               aspectRatio: "1 / 1", // Tỷ lệ 1:1 cho khối ảnh
//               maxWidth: "400px", // Thêm giới hạn kích thước tối đa (optional but good)
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               overflow: "hidden",
//             }}
//           >
//             <img
//               src={
//                 product.image ||
//                 "https://placehold.co/500x500/003049/ffffff?text=S%E1%BA%A2N+PH%E1%BA%A8M"
//               }
//               alt={product.title}
//               className="w-full h-full object-contain rounded-lg"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src =
//                   "https://placehold.co/500x500/003049/ffffff?text=S%E1%BA%A2N+PH%E1%BA%A8M";
//               }}
//             />
//           </div>

//           {/* CỘT 2: THÔNG TIN SẢN PHẨM (Chiếm 2/3) */}
//           <div className="lg:w-2/3 w-full flex flex-col justify-between">
//             {/* PHẦN TRÊN: Tên, Giá, Mô tả */}
//             <div>
//               <h1 className="text-4xl sm:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
//                 {product.title}
//               </h1>

//               {/* Thông tin Rating và Mã */}
//               <div className="flex flex-wrap items-center space-x-4 mb-5 text-gray-600">
//                 <span className="text-yellow-500 text-lg font-bold flex items-center">
//                   <svg
//                     className="w-5 h-5 mr-1"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.05a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.05a1 1 0 00-1.175 0l-2.817 2.05c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.007 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                   {product.rating_rate ? product.rating_rate.toFixed(1) : "N/A"}
//                 </span>
//                 <span className="text-sm">
//                   ({product.rating_count || 0} đánh giá)
//                 </span>
//                 <span className="text-gray-400">|</span>
//                 <span className="text-sm text-gray-500">
//                   Mã SP: {product.id}
//                 </span>
//               </div>

//               {/* Giá sản phẩm - Nổi bật */}
//               <div className="bg-red-50 p-4 rounded-xl mb-6 border border-red-100">
//                 <p className="text-4xl font-extrabold text-red-600">
//                   {formatCurrency(product.price)}
//                 </p>
//                 <p className="text-sm text-red-500 mt-1">
//                   Giá đã bao gồm VAT (nếu có)
//                 </p>
//               </div>

//               {/* Thông tin cơ bản */}
//               <div className="space-y-3 mb-8 text-gray-700 p-4 border border-gray-100 rounded-lg bg-white shadow-sm">
//                 <div className="flex items-center">
//                   <strong className="w-24 font-semibold text-gray-800">
//                     Loại:
//                   </strong>
//                   <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
//                     {categoryName}
//                   </span>
//                 </div>
//               </div>

//               {/* Mô tả */}
//               <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 pb-2 border-gray-100">
//                 Mô tả chi tiết
//               </h3>
//               <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
//                 {product.description ||
//                   "Sản phẩm này chưa có mô tả chi tiết từ nhà cung cấp."}
//               </p>
//             </div>

//             {/* PHẦN DƯỚI: Nút Mua hàng - Luôn nằm ở dưới cùng */}
//             <button
//               className="mt-10 w-full lg:w-3/4 xl:w-2/3 px-10 py-4 bg-orange-500 text-white font-black text-xl rounded-2xl shadow-2xl shadow-orange-300 hover:bg-orange-600 transition duration-300 transform hover:scale-[1.03]"
//               onClick={() =>
//                 console.log(`Thêm sản phẩm ${product.title} vào giỏ hàng`)
//               }
//             >
//               THÊM VÀO GIỎ HÀNG
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/Chitietsanpham.js
import "./assets/css/Chitietsanpham.css";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient"; // Supabase client bạn vừa tạo

export default function Chitietsanpham() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hàm format tiền Việt Nam
  const formatCurrency = (amount) =>
    amount
      ? new Intl.NumberFormat("vi-VN", { style: "decimal" }).format(amount) + "đ"
      : "N/A";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*, categories(name)")
          .eq("id", id)
          .single();

        if (error) throw new Error(error.message);
        if (!data) throw new Error("Không tìm thấy sản phẩm!");

        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="loading">Đang tải sản phẩm...</div>
    );

  if (error || !product)
    return (
      <div className="error">
        <h3>❌ Lỗi</h3>
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Quay lại Trang Chủ</button>
      </div>
    );

  const categoryName = product.categories?.name || "Chưa phân loại";

  return (
    <div className="product-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Quay lại
      </button>

      <div className="detail-container">
        <div className="product-image">
          <img
            src={product.image || "https://placehold.co/400x400?text=Sản+Phẩm"}
            alt={product.title}
          />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <div className="rating">
            ⭐ {product.rating_rate?.toFixed(1) || "N/A"} |{" "}
            {product.rating_count || 0} đánh giá
          </div>
          <p className="price">{formatCurrency(product.price)}</p>
          <p className="category">Loại: {categoryName}</p>

          <h3>Mô tả sản phẩm</h3>
          <p className="description">
            {product.description || "Chưa có mô tả chi tiết."}
          </p>

          <button
            className="add-cart"
            onClick={() => console.log(`Thêm ${product.title} vào giỏ hàng`)}
          >
            Thêm vào Giỏ Hàng
          </button>
        </div>
      </div>

      {/* CSS thuần */}
      <style>{`
        .loading, .error {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          color: #555;
        }

        .error button {
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .product-detail {
          max-width: 1100px;
          margin: 40px auto;
          padding: 0 20px;
          font-family: Arial, sans-serif;
        }

        .back-btn {
          margin-bottom: 20px;
          background: none;
          border: none;
          color: #007bff;
          font-size: 16px;
          cursor: pointer;
        }

        .detail-container {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }

        .product-image {
          flex: 1 1 40%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .product-image img {
          max-width: 100%;
          max-height: 400px;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .product-image img:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .product-info {
          flex: 1 1 50%;
        }

        .product-info h1 {
          font-size: 28px;
          margin-bottom: 12px;
        }

        .rating {
          margin-bottom: 12px;
          color: #f59e0b;
        }

        .price {
          font-size: 28px;
          font-weight: bold;
          color: #e53935;
          margin-bottom: 12px;
        }

        .category {
          background-color: #d1fae5;
          color: #065f46;
          display: inline-block;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .product-info h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .description {
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .add-cart {
          background-color: #f97316;
          color: white;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .add-cart:hover {
          background-color: #ea580c;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .detail-container {
            flex-direction: column;
          }
          .product-image, .product-info {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </div>
  );
}


