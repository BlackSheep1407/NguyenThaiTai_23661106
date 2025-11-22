// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "./supabaseClient";

// const ListProducts_SP = () => {
//   const [listProduct, setListProduct] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data, error } = await supabase
//         // Dùng view của bảng chính để hiện thị giá tiền thập phân mà không thay đổi đến kiểu dữ liệu gốc (numberic)
//           .from("products")
//           .select("*")
//           .order("id", { ascending: true });
//         if (error) throw error;
//         setListProduct(data);
//       } catch (err) {
//         console.error("Lỗi khi lấy dữ liệu:", err.message);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Danh sách sản phẩm</h2>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {listProduct.map((p) => (
//           <div
//             key={p.id}
//             onClick={() => navigate(`/detail/${p.id}`)}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "12px",
//               textAlign: "center",
//               cursor: "pointer",
//               background: "#fff",
//               boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//               transition: "transform 0.2s ease, box-shadow 0.2s ease",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-4px)";
//               e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
//             }}
//           >
//             <div
//               style={{
//                 width: "100%",
//                 height: "200px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 overflow: "hidden",
//                 borderRadius: "8px",
//                 backgroundColor: "#f9f9f9",
//               }}
//             >
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>

//             <h4 style={{ margin: "10px 0 5px", fontSize: "1rem" }}>
//               {p.title}
//             </h4>
//             <p style={{ color: "#e63946", fontWeight: "bold", margin: "0" }}>
//               {/* {p.price}đ */}
//             </p>
//             <small style={{ color: "#555" }}>
//               ⭐ {p.rating_rate} | ({p.rating_count} đánh giá)
//             </small>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListProducts_SP;

// CODE PHÍA TRÊN LÀ BẢN ORIGINAL CỦA THÁI TÀI

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

// Hàm tiện ích để định dạng tiền tệ Việt Nam (30000 -> 30.000đ)
const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return "";

  // Sử dụng Intl.NumberFormat với locale 'vi-VN'
  return (
    new Intl.NumberFormat("vi-VN", {
      style: "decimal", // Chỉ định kiểu số thập phân thông thường
      minimumFractionDigits: 0, // Đảm bảo không có số thập phân (như .00)
      maximumFractionDigits: 0,
    }).format(amount) + "đ"
  ); // Thêm ký hiệu 'đ' sau khi định dạng
};

const ListProducts_SP = () => {
  // Khai báo Ref (productGridRef)
  const productGridRef = React.useRef(null); // Ref để cuộn đến lưới sản phẩm

  // State để lưu trữ danh sách các danh mục (ví dụ: Rau Củ, Hải Sản)
  const [categories, setCategories] = useState([]);
  // State để theo dõi ID của danh mục đang được chọn (null = Tất Cả)
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  // State để theo dõi trạng thái tải dữ liệu
  const [isLoading, setIsLoading] = useState(true);

  const [listProduct, setListProduct] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       // GIỮ NGUYÊN LỆNH GỌI API TỪ BẢNG GỐC 'products'
  //       const { data, error } = await supabase
  //         .from("products")
  //         .select("*")
  //         .order("id", { ascending: true });
  //       if (error) throw error;
  //       setListProduct(data);
  //     } catch (err) {
  //       console.error("Lỗi khi lấy dữ liệu:", err.message);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  // ------------------------------------
  // 1. Tải danh mục (chỉ chạy một lần khi component được mount)
  // ------------------------------------
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Lấy dữ liệu từ bảng 'categories'
        const { data, error } = await supabase
          .from("categories")
          .select("categories_id, name")
          .order("categories_id", { ascending: true });

        if (error) throw error;
        setCategories(data || []);
      } catch (error) {
        console.error("Lỗi khi tải danh mục:", error.message);
      }
    };
    fetchCategories();
  }, []);
  // ------------------------------------
  // 2. Tải sản phẩm (chạy khi activeCategoryId thay đổi)
  // ------------------------------------
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        let query = supabase
          .from("products")
          .select("*")
          .order("id", { ascending: true });

        // Lọc theo category_id nếu có danh mục được chọn
        if (activeCategoryId !== null) {
          query = query.eq("category_id", activeCategoryId);
        }

        const { data, error } = await query;

        if (error) throw error;
        setListProduct(data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err.message);
        setListProduct([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [activeCategoryId]);
  // CÁC XỬ LÝ KHÁC
  // ------------------------------------
  // 3. LOGIC TÍNH TOÁN TÊN DANH MỤC HIỆN TẠI (SỬ DỤNG React.useMemo)
  // ------------------------------------
  const activeCategoryName = React.useMemo(() => {
    if (activeCategoryId === null) {
      return "Tất Cả Sản Phẩm";
    }
    const category = categories.find(
      (c) => c.categories_id === activeCategoryId
    );
    return category ? category.name : "Danh Sách Sản Phẩm";
  }, [activeCategoryId, categories]);

  // ------------------------------------
  // 4. Hàm xử lý Click và Cuộn đến lưới sản phẩm
  // ------------------------------------
  const handleCategoryClick = (id) => {
    setActiveCategoryId(id);

    // Cuộn mượt mà đến khu vực lưới sản phẩm sau khi cập nhật state
    setTimeout(() => {
      if (productGridRef.current) {
        productGridRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 50); // Độ trễ nhỏ để đảm bảo state đã cập nhật
  };

  return (
    <div class="container_main" style={{ padding: "20px" }}>
      {/* <h2>Danh sách sản phẩm</h2>             */}
      {/* 🚀 TIÊU ĐỀ ĐỘNG */}
      <h2
        className="text-2xl font-bold mb-4 text-[#1d3557]"
        // Dùng Tailwind thay vì style inline nếu có thể, nhưng tôi vẫn giữ style cũ
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#1d3557",
        }}
      >
        {activeCategoryName}
      </h2>

      {/* Khu vực chọn Danh mục (Category Tabs) */}
      <div
        className="flex flex-wrap gap-2 mb-6 pb-3 border-b border-gray-200"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
          paddingBottom: "10px",
          borderBottom: "1px solid #eee",
        }}
      >
        {" "}
         {/* Nút "Tất Cả" - Đã sửa logic màu nền/viền */}
        <button
          className={`px-4 py-2 rounded-full border-2 font-semibold transition-all duration-300 ${
            activeCategoryId === null
              ? "bg-[#457b9d] text-white border-[#457b9d]"
              : "bg-[#f1faee] text-[#1d3557] border-[#a8dadc] hover:bg-[#a8dadc] hover:text-[#1d3557]"
          }`}
          style={{
            padding: "8px 15px",
            borderRadius: "20px",
            cursor: "pointer",
            transition: "all 0.3s",
            fontWeight: "600",
            // Đảm bảo logic màu sắc cho trạng thái Active (activeCategoryId === null) hoạt động
            backgroundColor: activeCategoryId === null ? "#457b9d" : "#f1faee",
            color: activeCategoryId === null ? "white" : "#1d3557",
            borderColor: activeCategoryId === null ? "#457b9d" : "#a8dadc",
            border: "1px solid",
          }}
          onClick={() => handleCategoryClick(null)}
        >
          Tất Cả
        </button>
        {/* Lặp qua danh sách categories */}
        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.categories_id;
          return (
            <button
              key={cat.categories_id}
              onClick={() => handleCategoryClick(cat.categories_id)}
              className={`px-4 py-2 rounded-full border-2 font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-[#e63946] text-white border-[#e63946]"
                  : "bg-white text-[#333] border-gray-300 hover:bg-[#ffe5e8]"
              }`}
              style={{
                padding: "8px 15px",
                borderRadius: "20px",
                border: "1px solid", // Đã đổi #ccc thành logic màu viền chi tiết hơn
                cursor: "pointer",
                transition: "all 0.2s",
                fontWeight: "600",
                backgroundColor: isActive ? "#e63946" : "#fff",
                color: isActive ? "#fff" : "#333",
                borderColor: isActive ? "#e63946" : "#ccc",
              }}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Hiển thị Sản phẩm - GẮN REF ĐỂ CUỘN */}
      <div ref={productGridRef} style={{ minHeight: "300px" }}>
        {isLoading ? (
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              fontSize: "1rem",
              color: "#555",
            }}
          >
            Đang tải sản phẩm...
          </div>
        ) : listProduct.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              fontSize: "1rem",
              color: "#e63946",
            }}
          >
            Không tìm thấy sản phẩm nào trong danh mục **{activeCategoryName}**.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {listProduct.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/detail/${p.id}`)}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "12px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: "#fff",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
                }}
              >
                {/* Khu vực ảnh */}
                <div
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
                    src={
                      p.image ||
                      "https://placehold.co/220x200/9b9b9b/ffffff?text=No+Image"
                    }
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/220x200/9b9b9b/ffffff?text=Image+Error";
                    }}
                  />
                </div>

                {/* Thông tin sản phẩm */}
                <h4
                  style={{
                    margin: "10px 0 5px",
                    fontSize: "1rem",
                    minHeight: "40px", // Giữ chiều cao cố định để tránh CLS
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2, // Giới hạn 2 dòng
                    WebkitBoxOrient: "vertical",
                    lineHeight: "1.2",
                  }}
                >
                  {p.title}
                </h4>

                <p
                  style={{
                    color: "#e63946",
                    fontWeight: "bold",
                    margin: "0 0 5px 0",
                    fontSize: "1.1rem",
                  }}
                >
                  {formatCurrency(p.price)}
                </p>

                <small style={{ color: "#555", display: "block" }}>
                  <span style={{ color: "#ffc107", marginRight: "5px" }}>
                    ★
                  </span>{" "}
                  {p.rating_rate} | ({p.rating_count} đánh giá)
                </small>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* sửa tới div trên thì dừng, không đụng div bọc cha (ở dưới) */}
    </div>
  );
};

export default ListProducts_SP;
