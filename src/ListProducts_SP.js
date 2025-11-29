// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { supabase } from "./supabaseClient";

// // const ListProducts_SP = () => {
// //   const [listProduct, setListProduct] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const { data, error } = await supabase
// //         // Dùng view của bảng chính để hiện thị giá tiền thập phân mà không thay đổi đến kiểu dữ liệu gốc (numberic)
// //           .from("products")
// //           .select("*")
// //           .order("id", { ascending: true });
// //         if (error) throw error;
// //         setListProduct(data);
// //       } catch (err) {
// //         console.error("Lỗi khi lấy dữ liệu:", err.message);
// //       }
// //     };
// //     fetchProducts();
// //   }, []);

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>Danh sách sản phẩm</h2>

// //       <div
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
// //           gap: "20px",
// //         }}
// //       >
// //         {listProduct.map((p) => (
// //           <div
// //             key={p.id}
// //             onClick={() => navigate(`/detail/${p.id}`)}
// //             style={{
// //               border: "1px solid #ddd",
// //               borderRadius: "10px",
// //               padding: "12px",
// //               textAlign: "center",
// //               cursor: "pointer",
// //               background: "#fff",
// //               boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
// //               transition: "transform 0.2s ease, box-shadow 0.2s ease",
// //             }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.transform = "translateY(-4px)";
// //               e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.transform = "translateY(0)";
// //               e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
// //             }}
// //           >
// //             <div
// //               style={{
// //                 width: "100%",
// //                 height: "200px",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 overflow: "hidden",
// //                 borderRadius: "8px",
// //                 backgroundColor: "#f9f9f9",
// //               }}
// //             >
// //               <img
// //                 src={p.image}
// //                 alt={p.title}
// //                 style={{
// //                   width: "100%",
// //                   height: "100%",
// //                   objectFit: "cover",
// //                 }}
// //               />
// //             </div>

// //             <h4 style={{ margin: "10px 0 5px", fontSize: "1rem" }}>
// //               {p.title}
// //             </h4>
// //             <p style={{ color: "#e63946", fontWeight: "bold", margin: "0" }}>
// //               {/* {p.price}đ */}
// //             </p>
// //             <small style={{ color: "#555" }}>
// //               ⭐ {p.rating_rate} | ({p.rating_count} đánh giá)
// //             </small>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListProducts_SP;

// // CODE PHÍA TRÊN LÀ BẢN ORIGINAL CỦA THÁI TÀI

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "./supabaseClient";
// import { useOutletContext } from "react-router-dom";
// import { useCart } from "./CartContext"; //Giỏ hàng
// import Toast from "./Toast";

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

// // * Chuyển đổi chuỗi có dấu thành slug (dạng URL thân thiện).
// // * Ví dụ: "Xoài Cát Chu ngon" -> "xoai-cat-chu-ngon"
// // * @param {string} text
// // * @returns {string} Slug đã được tạo.
// // */
// const slugify = (text) => {
//   if (!text) return "";
//   return text
//     .toString()
//     .toLowerCase()
//     .normalize("NFD") // Tách các ký tự có dấu thành ký tự cơ bản và dấu phụ
//     .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu phụ (như ´, `, ...)
//     .replace(/đ/g, "d") // Xử lý chữ đ
//     .replace(/ /g, "-") // Thay thế khoảng trắng bằng dấu gạch ngang
//     .replace(/[^\w-]+/g, "") // Loại bỏ tất cả ký tự không phải chữ, số hoặc gạch ngang
//     .replace(/--+/g, "-") // Thay thế nhiều dấu gạch ngang liền kề bằng một dấu gạch ngang
//     .trim()
//     .replace(/^-+|-+$/g, ""); // Loại bỏ gạch ngang ở đầu hoặc cuối
// };

// // const ListProducts_SP = ({ selectedId, setSelectedId }) => {
// const ListProducts_SP = () => {
//   const { selectedId, setSelectedId } = useOutletContext(); // ✅ Lấy state từ Layout
//   // Khai báo Ref (productGridRef)
//   const productGridRef = React.useRef(null); // Ref để cuộn đến lưới sản phẩm

//   // State để lưu trữ danh sách các danh mục (ví dụ: Rau Củ, Hải Sản)
//   const [categories, setCategories] = useState([]);
//   //State thanh tìm kiếm
//   // const [selectedId, setSelectedId] = useState(null); // dùng cho search product -> ko dùng nữa, chuyển sang dùng prop từ layout
//   // State để theo dõi ID của danh mục đang được chọn (null = Tất Cả)
//   const [activeCategoryId, setActiveCategoryId] = useState(null);
//   // State để theo dõi trạng thái tải dữ liệu
//   const [isLoading, setIsLoading] = useState(true);

//   const [listProduct, setListProduct] = useState([]);
//   const navigate = useNavigate();
//   //Giỏ hàng
//   const { addToCart } = useCart(); // ✅ dùng tên này nếu Provider là addItem
//   // Pops up thêm vào giỏ hàng (Toast)
//   const [toast, setToast] = useState(null);

//   // useEffect(() => {
//   //   const fetchProducts = async () => {
//   //     try {
//   //       // GIỮ NGUYÊN LỆNH GỌI API TỪ BẢNG GỐC 'products'
//   //       const { data, error } = await supabase
//   //         .from("products")
//   //         .select("*")
//   //         .order("id", { ascending: true });
//   //       if (error) throw error;
//   //       setListProduct(data);
//   //     } catch (err) {
//   //       console.error("Lỗi khi lấy dữ liệu:", err.message);
//   //     }
//   //   };
//   //   fetchProducts();
//   // }, []);

//   // ------------------------------------
//   // 1. Tải danh mục (chỉ chạy một lần khi component được mount)
//   // ------------------------------------
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         // Lấy dữ liệu từ bảng 'categories'
//         const { data, error } = await supabase
//           .from("categories")
//           .select("categories_id, name")
//           .order("categories_id", { ascending: true });

//         if (error) throw error;
//         setCategories(data || []);
//       } catch (error) {
//         console.error("Lỗi khi tải danh mục:", error.message);
//       }
//     };
//     fetchCategories();
//   }, []);
//   // ------------------------------------
//   // 2. Tải sản phẩm (chạy khi activeCategoryId thay đổi)
//   // ------------------------------------
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsLoading(true);
//       try {
//         let query = supabase
//           .from("products")
//           .select("*")
//           .order("id", { ascending: true });

//         // Lọc theo category_id nếu có danh mục được chọn
//         // if (activeCategoryId !== null) {
//         //   query = query.eq("category_id", activeCategoryId);
//         // }
//         // 1️⃣ Nếu click search → chỉ lọc theo selectedId
//         if (selectedId !== null) {
//           query = query.eq("id", selectedId);
//         }
//         // 2️⃣ Nếu không click search → lọc theo category
//         else if (activeCategoryId !== null) {
//           query = query.eq("category_id", activeCategoryId);
//         }
//         // // Tìm kiếm
//         // if (keyword.trim() !== "") {
//         //   query = query.ilike("title", `%${keyword}%`);
//         // }

//         const { data, error } = await query;

//         if (error) throw error;
//         setListProduct(data);
//       } catch (err) {
//         console.error("Lỗi khi lấy dữ liệu:", err.message);
//         setListProduct([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [activeCategoryId, selectedId]);
//   // phía trên đã bổ sung keyword cho thanh tìm kiếm sản phẩm
//   // CÁC XỬ LÝ KHÁC
//   // ------------------------------------
//   // 3. LOGIC TÍNH TOÁN TÊN DANH MỤC HIỆN TẠI (SỬ DỤNG React.useMemo)
//   // ------------------------------------
//   const activeCategoryName = React.useMemo(() => {
//     if (activeCategoryId === null) {
//       return "Tất Cả Sản Phẩm";
//     }
//     const category = categories.find(
//       (c) => c.categories_id === activeCategoryId
//     );
//     return category ? category.name : "Danh Sách Sản Phẩm";
//   }, [activeCategoryId, categories]);

//   // ------------------------------------
//   // 4. Hàm xử lý Click và Cuộn đến lưới sản phẩm
//   // ------------------------------------
//   const handleCategoryClick = (id) => {
//     setActiveCategoryId(id);
//     setSelectedId(null); // ✅ bây giờ React biết setSelectedId là props (xử lí thanh tìm kiếm)
//     // Cuộn mượt mà đến khu vực lưới sản phẩm sau khi cập nhật state
//     setTimeout(() => {
//       if (productGridRef.current) {
//         productGridRef.current.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//           inline: "nearest",
//         });
//       }
//     }, 50); // Độ trễ nhỏ để đảm bảo state đã cập nhật
//   };

//   // ------------------------------------
//   // 5.Thêm sản phẩm vào giỏ hàng
//   // ------------------------------------
//   // const addToCart = (product) => {
//   //   let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//   //   storedCart.push(product); // Thêm sản phẩm vào giỏ
//   //   localStorage.setItem("cart", JSON.stringify(storedCart));
//   //   setCart(storedCart); // Nếu bạn truyền setCart từ Layout xuống, cập nhật luôn state để badge số lượng cập nhật
//   // };
//   // const addToCart = (product) => {
//   //   let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//   //   storedCart.push(product); // thêm sản phẩm
//   //   localStorage.setItem("cart", JSON.stringify(storedCart));

//   //   alert("Đã thêm vào giỏ hàng!");
//   // };

//   return (
//     <div class="container_main" style={{ padding: "20px" }}>
//       {/* <h2>Danh sách sản phẩm</h2>             */}
//       {/* 🚀 TIÊU ĐỀ ĐỘNG */}
//       <h2
//         className="text-2xl font-bold mb-4 text-[#1d3557]"
//         // Dùng Tailwind thay vì style inline nếu có thể, nhưng tôi vẫn giữ style cũ
//         style={{
//           fontSize: "1.5rem",
//           fontWeight: "bold",
//           marginBottom: "15px",
//           color: "#1d3557",
//         }}
//       >
//         {activeCategoryName}
//       </h2>

//       {/* Khu vực chọn Danh mục (Category Tabs) */}
//       <div
//         className="flex flex-wrap gap-2 mb-6 pb-3 border-b border-gray-200"
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "10px",
//           marginBottom: "20px",
//           paddingBottom: "10px",
//           borderBottom: "1px solid #eee",
//         }}
//       >
//         {" "}
//          {/* Nút "Tất Cả" - Đã sửa logic màu nền/viền */}
//         <button
//           className={`px-4 py-2 rounded-full border-2 font-semibold transition-all duration-300 ${
//             activeCategoryId === null
//               ? "bg-[#457b9d] text-white border-[#457b9d]"
//               : "bg-[#f1faee] text-[#1d3557] border-[#a8dadc] hover:bg-[#a8dadc] hover:text-[#1d3557]"
//           }`}
//           style={{
//             padding: "8px 15px",
//             borderRadius: "20px",
//             cursor: "pointer",
//             transition: "all 0.3s",
//             fontWeight: "600",
//             // Đảm bảo logic màu sắc cho trạng thái Active (activeCategoryId === null) hoạt động
//             backgroundColor: activeCategoryId === null ? "#457b9d" : "#f1faee",
//             color: activeCategoryId === null ? "white" : "#1d3557",
//             borderColor: activeCategoryId === null ? "#457b9d" : "#a8dadc",
//             border: "1px solid",
//           }}
//           onClick={() => handleCategoryClick(null)}
//         >
//           Tất Cả
//         </button>
//         {/* Lặp qua danh sách categories */}
//         {categories.map((cat) => {
//           const isActive = activeCategoryId === cat.categories_id;
//           return (
//             <button
//               key={cat.categories_id}
//               onClick={() => handleCategoryClick(cat.categories_id)}
//               className={`px-4 py-2 rounded-full border-2 font-semibold transition-all duration-300 ${
//                 isActive
//                   ? "bg-[#e63946] text-white border-[#e63946]"
//                   : "bg-white text-[#333] border-gray-300 hover:bg-[#ffe5e8]"
//               }`}
//               style={{
//                 padding: "8px 15px",
//                 borderRadius: "20px",
//                 border: "1px solid", // Đã đổi #ccc thành logic màu viền chi tiết hơn
//                 cursor: "pointer",
//                 transition: "all 0.2s",
//                 fontWeight: "600",
//                 backgroundColor: isActive ? "#e63946" : "#fff",
//                 color: isActive ? "#fff" : "#333",
//                 borderColor: isActive ? "#e63946" : "#ccc",
//               }}
//             >
//               {cat.name}
//             </button>
//           );
//         })}
//       </div>

//       {/* Hiển thị Sản phẩm - GẮN REF ĐỂ CUỘN */}
//       <div ref={productGridRef} style={{ minHeight: "300px" }}>
//         {isLoading ? (
//           <div
//             style={{
//               textAlign: "center",
//               padding: "30px",
//               fontSize: "1rem",
//               color: "#555",
//             }}
//           >
//             Đang tải sản phẩm...
//           </div>
//         ) : listProduct.length === 0 ? (
//           <div
//             style={{
//               textAlign: "center",
//               padding: "30px",
//               fontSize: "1rem",
//               color: "#e63946",
//             }}
//           >
//             🥺 Không tìm thấy sản phẩm nào trong danh mục **{activeCategoryName}
//             **
//           </div>
//         ) : (
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//               gap: "20px",
//             }}
//           >
//             {listProduct.map((p) => (
//               <div
//                 key={p.id}
//                 onClick={() => navigate(`sanpham/${p.id}`)}
//                 style={{
//                   border: "1px solid #ddd",
//                   borderRadius: "10px",
//                   padding: "12px",
//                   textAlign: "center",
//                   cursor: "pointer",
//                   background: "#fff",
//                   boxShadow: "0 5px 6px rgba(0,0,0,0.1)",
//                   transition: "transform 0.2s ease, box-shadow 0.2s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-4px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 12px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
//                 }}
//               >
//                 {/* Khu vực ảnh */}
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "200px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     overflow: "hidden",
//                     borderRadius: "8px",
//                     backgroundColor: "#f9f9f9",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   <img
//                     src={
//                       p.image ||
//                       "https://placehold.co/220x200/9b9b9b/ffffff?text=No+Image"
//                     }
//                     alt={p.title}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src =
//                         "https://placehold.co/220x200/9b9b9b/ffffff?text=Image+Error";
//                     }}
//                   />
//                 </div>

//                 {/* Thông tin sản phẩm */}
//                 <h4
//                   style={{
//                     margin: "10px 0 5px",
//                     fontSize: "1rem",
//                     minHeight: "40px", // Giữ chiều cao cố định để tránh CLS
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     display: "-webkit-box",
//                     WebkitLineClamp: 2, // Giới hạn 2 dòng
//                     WebkitBoxOrient: "vertical",
//                     lineHeight: "1.2",
//                   }}
//                 >
//                   {p.title}
//                 </h4>

//                 <p
//                   style={{
//                     color: "#e63946",
//                     fontWeight: "bold",
//                     margin: "0 0 5px 0",
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   {formatCurrency(p.price)}
//                 </p>

//                 <small style={{ color: "#555", display: "block" }}>
//                   <span style={{ color: "#ffc107", marginRight: "5px" }}>
//                     ★
//                   </span>{" "}
//                   {p.rating_rate} | ({p.rating_count} đánh giá)
//                 </small>

//                 {/* nút thêm sản phẩm */}
//                 {/* <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // 🚫 chặn click lan lên Card
//                     addItem(p); // ✅ bây giờ hợp lệ
//                   }}
//                   style={{
//                     marginTop: "8px",
//                     backgroundColor: "#73af6f",
//                     color: "#fff",
//                     border: "none",
//                     padding: "6px 12px",
//                     borderRadius: "6px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Thêm vào giỏ hàng
//                 </button> */}
//                  <button
//   onClick={(e) => {
//     e.stopPropagation(); // 🚫 CHẶN CLICK LAN LÊN THẺ CHA
//     addToCart({
//       id: p.id,
//       name: p.title,   // ❗ sửa đúng field trong database của bạn là title, không phải name
//       price: p.price,
//       image: p.image,
//     });
//   }}
//   style={{
//     background: "#73af6f",
//     color: "#fff",
//     border: "none",
//     padding: "6px 12px",
//     borderRadius: 6,
//     marginTop: 8,
//     cursor: "pointer",
//   }}
// >
// Thêm vào giỏ hàng
// </button>
//                 {/* kết thúc nút thêm sản phẩm */}
//                 {/* Pops up thông báo đã thêm vào giỏ hàng */}
// {toast && <Toast message={toast} onClose={() => setToast(null)} />}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       {/* sửa tới div trên thì dừng, không đụng div bọc cha (ở dưới) */}
//     </div>
//   );
// };

// export default ListProducts_SP;

// ListProducts_SP.js
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useCart } from "./CartContext";
//pops up thêm sản phẩm
import ToastStack from "./ToastStack";

// Hàm format tiền Việt Nam
const formatCurrency = (amount) => {
  if (!amount) return "";
  return (
    new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount) + "đ"
  );
};

const ListProducts_SP = () => {
  const { selectedId, setSelectedId } = useOutletContext();
  const productGridRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [listProduct, setListProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toasts, setToasts] = useState([]);

  const navigate = useNavigate();
  const { addToCart, cart } = useCart(); // ✅ dùng addItem đúng context

  // Load categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from("categories")
          .select("categories_id, name")
          .order("categories_id", { ascending: true });
        if (error) throw error;
        setCategories(data || []);
      } catch (err) {
        console.error("Lỗi tải danh mục:", err.message);
      }
    };
    fetchCategories();
  }, []);

  // Load products
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        let query = supabase
          .from("products")
          .select("*")
          .order("id", { ascending: true });

        if (selectedId !== null) query = query.eq("id", selectedId);
        else if (activeCategoryId !== null)
          query = query.eq("category_id", activeCategoryId);

        const { data, error } = await query;
        if (error) throw error;
        setListProduct(data || []);
      } catch (err) {
        console.error("Lỗi tải sản phẩm:", err.message);
        setListProduct([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [activeCategoryId, selectedId]);

  //Pops up thêm sản phẩm
  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
  };
  // xóa toast
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const activeCategoryName = useMemo(() => {
    if (activeCategoryId === null) return "Tất Cả Sản Phẩm";
    const cat = categories.find((c) => c.categories_id === activeCategoryId);
    return cat ? cat.name : "Danh Sách Sản Phẩm";
  }, [activeCategoryId, categories]);

  const handleCategoryClick = (id) => {
    setActiveCategoryId(id);
    setSelectedId(null);
    setTimeout(() => {
      if (productGridRef.current) {
        productGridRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  const [isHover, setIsHover] = useState(false); // state hover cho mỗi nút

  return (
    <div className="container_main" style={{ padding: "20px" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#1d3557",
        }}
      >
        {activeCategoryName}
      </h2>

      {/* Danh mục */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => handleCategoryClick(null)}
          style={{
            padding: "8px 15px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "600",
            backgroundColor: activeCategoryId === null ? "#457b9d" : "#f1faee",
            color: activeCategoryId === null ? "#fff" : "#1d3557",
            border: "1px solid",
            borderColor: activeCategoryId === null ? "#457b9d" : "#a8dadc",
          }}
        >
          Tất Cả
        </button>
        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.categories_id;
          return (
            <button
              key={cat.categories_id}
              onClick={() => handleCategoryClick(cat.categories_id)}
              style={{
                padding: "8px 15px",
                borderRadius: "20px",
                border: "1px solid",
                cursor: "pointer",
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

      {/* Lưới sản phẩm */}
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
            🥺 Không tìm thấy sản phẩm nào trong danh mục{" "}
            <b>{activeCategoryName}</b>
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
                onClick={() => navigate(`sanpham/${p.id}`)}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "12px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: "#fff",
                  boxShadow: "0 5px 6px rgba(0,0,0,0.1)",
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
                {/* Ảnh */}
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

                <h4
                  style={{
                    margin: "10px 0 5px",
                    fontSize: "1rem",
                    minHeight: "40px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
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
                {/* -------------------------------------------------------------------------------- */}
                <small style={{ color: "#555", display: "block" }}>
                  {" "}
                  <span style={{ color: "#ffc107", marginRight: "5px" }}>
                    ★{" "}
                  </span>{" "}
                  {p.rating_rate} | ({p.rating_count} đánh giá){" "}
                </small>
                {/* -------------------------------------------------------------------------------- */}
                {/* Nút thêm vào giỏ hàng */}
                {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({
                      id: p.id,
                      name: p.title,
                      price: p.price,
                      image: p.image,
                    });
                    setToast(`${p.title} đã thêm vào giỏ hàng!`);
                  }}
                  style={{
                    background: "#73af6f",
                    color: "#fff",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: 6,
                    marginTop: 8,
                    cursor: "pointer",
                  }}
                >
                  Thêm vào giỏ hàng
                </button> */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({
                      id: p.id,
                      name: p.title,
                      price: p.price,
                      image: p.image,
                    });
                    addToast(`${p.title} đã thêm vào giỏ hàng!`);
                  }}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  style={{
                    background: isHover ? "#5f9961" : "#73af6f",
                    color: "#fff",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: 6,
                    marginTop: 8,
                    cursor: "pointer",
                    transform: isHover ? "translateY(-2px)" : "translateY(0)",
                    transition: "background 0.3s ease, transform 0.2s ease",
                  }}
                >
                  Thêm vào giỏ hàng
                </button>

                {/* Toast slide */}

                {/* {toast && <Toast message={toast} onClose={() => setToast(null)} />} */}
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastStack toasts={toasts} removeToast={removeToast} />
    </div>
  );
};

export default ListProducts_SP;
