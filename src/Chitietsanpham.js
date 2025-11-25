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

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Import đã được giải quyết bằng việc tạo lại supabaseClient.js
import { supabase } from "./supabaseClient";

export default function Chitietsanpham() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Định dạng tiền tệ theo kiểu Việt Nam (ví dụ 50000 -> 50.000đ)
  const formatCurrency = (amount) => {
    if (amount === null || amount === undefined) return "N/A";
    // Giả định giá trong DB là VND và cần định dạng
    return (
      new Intl.NumberFormat("vi-VN", {
        style: "decimal", 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0,
      }).format(amount) + "đ"
    ); 
  };

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError("Thiếu ID sản phẩm.");
        setLoading(false);
        return;
      }

      try {
        // Lấy dữ liệu sản phẩm và JOIN với tên loại sản phẩm
        const { data, error } = await supabase
          .from("products")
          .select("*, categories(name)") 
          .eq("id", id)
          .single(); 

        if (error) {
          throw new Error(`Lỗi Supabase: ${error.message}`);
        }

        if (!data) {
          throw new Error("Không tìm thấy sản phẩm trong cơ sở dữ liệu.");
        }

        setProduct(data);
      } catch (err) {
        console.error("Lỗi tải chi tiết sản phẩm:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="p-4 flex justify-center items-center h-screen bg-gray-50">
        <p className="text-lg text-gray-600">Đang tải dữ liệu...</p>
      </div>
    );
  }

  // Xử lý lỗi và thông báo cho người dùng kiểm tra cấu hình DB
  if (error || !product) {
    return (
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-10">
        <h3 className="text-xl font-bold text-red-600 mb-4">
          Không tìm thấy sản phẩm!
        </h3>
        <p className="text-gray-700 mb-6">
          Lỗi: {error}
          <br/>
          Vui lòng kiểm tra lại ID sản phẩm hoặc cấu hình kết nối Supabase.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Quay lại Trang Chủ
        </button>
      </div>
    );
  }
  
  const categoryName = product.categories?.name || "Chưa phân loại";

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      {/* Container chính: Đã đổi max-w-4xl thành max-w-6xl để rộng hơn */}
      <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        
        {/* Nút Quay lại */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition duration-300 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Quay lại
        </button>

        {/* KHỐI LAYOUT CHÍNH: 2 CỘT */}
        {/* Đã đổi md:flex-row thành sm:flex-row để 2 cột xuất hiện sớm hơn */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
          
          {/* CỘT 1: HÌNH ẢNH SẢN PHẨM (Chiếm 1/3) */}
          <div 
            // className="sm:w-1/3 w-full p-4 border rounded-xl bg-white shadow-lg flex justify-center items-center h-80 flex-shrink-0"
             style={{
              width: "100%",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              marginBottom: "10px",
            }}
          >
            <img
              // Dùng placeholder nếu ảnh trống
              src={product.image || "https://placehold.co/300x300/cccccc/333333?text=Sản+Phẩm"}
              alt={product.title}
              // Đảm bảo hình ảnh vừa vặn trong khung 1/3
              className="max-w-full max-h-full object-contain rounded-md"
            />
          </div>

          {/* CỘT 2: THÔNG TIN SẢN PHẨM (Chiếm 2/3) */}
          <div className="sm:w-2/3 w-full">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
              {product.title}
            </h1>

            {/* Thông tin Rating */}
            <div className="flex items-center space-x-2 mb-4 text-gray-600">
              <span className="text-yellow-500 font-bold">
                ⭐ {product.rating_rate || "N/A"}
              </span>
              <span>|</span>
              <span className="text-sm">
                ({product.rating_count || 0} đánh giá)
              </span>
            </div>

            {/* Giá sản phẩm - Đã dùng formatCurrency */}
            <p className="text-4xl font-bold text-red-600 mb-6">
              {formatCurrency(product.price)}
            </p>

            {/* Thông tin cơ bản */}
            <div className="space-y-2 mb-8 text-gray-700">
              <p>
                <strong className="font-semibold text-gray-800">Mã sản phẩm:</strong> {product.id}
              </p>
              <p>
                <strong className="font-semibold text-gray-800">Loại:</strong> {categoryName}
              </p>
            </div>

            {/* Mô tả */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 border-b pb-1">
              Mô tả chi tiết
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {product.description || "Sản phẩm này chưa có mô tả chi tiết."}
            </p>

            {/* Nút Mua hàng */}
            <button
              className="mt-8 w-full md:w-auto px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-xl shadow-xl hover:bg-green-700 transition duration-300 transform hover:scale-[1.02]"
              onClick={() =>
                console.log(`Thêm sản phẩm ${product.title} vào giỏ hàng`)
              }
            >
              Thêm vào Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}