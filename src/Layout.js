// import "./assets/css/main.css";
// import anhlogo from "./assets/images//logo.png";
// import { Outlet, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Layout = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <html>
//       <header>
//         <div id="divheader" class="header1">
//           <div id="banner" class="banner1">
//             {/* <div id="topleft">
//               <ul class="ul1">
//                 <li>
//                   <a href="/#">TRANG CHỦ</a>
//                 </li>
//                 <li>
//                   <a href="/trang1">EGOV</a>
//                 </li>
//                 <li>
//                   <a href="/admin/products">QUẢN TRỊ</a>
//                 </li>
//               </ul>
//             </div> */}
//             <div id="logo" class="logo1">
//               <img src={anhlogo} width="75" />
//             </div>
//             {/* <div id="divtimkiem" style={{ width: "300px" }}>
//               Phần tìm kiếm
//             </div> */}
//           </div>
//           <div id="menubar" className="menubar">
//             <div className="menubar-left">
//               {/* <a href="/menu1" className="menu-item">
//                 Menu 1
//               </a>
//               <a href="/menu2" className="menu-item">
//                 Menu 2
//               </a>
//               <a href="/menu3" className="menu-item">
//                 Menu 3
//               </a> */}

//               <ul class="ul1">
//                 <li class="menu-box">
//                   <a href="/#" className="menu-item">
//                     Trang Chủ
//                   </a>
//                 </li>
//                 <li class="menu-box">
//                   <a href="/trang1" className="menu-item">
//                     Sản Phẩm
//                   </a>
//                   <ul class="submenu">
//                     <li class="menu-box">
//                       <a href="#traicaytuoi">Trái cây tươi</a>
//                     </li>
//                     <li class="menu-box">
//                       <a href="#traicaycatsan">Trái cây cắt sẵn</a>
//                     </li>
//                     <li class="menu-box">
//                       <a href="#goiquatangtraicay">Gói quà tặng trái cây </a>
//                     </li>
//                     <li class="menu-box">
//                       <a href="#nuoceptraicay">Nước ép trái cây</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li class="menu-box">
//                   <a href="/admin/products" className="menu-item">
//                     Giới Thiệu
//                   </a>
//                 </li>
//                 <li class="menu-box">
//                   <a href="/admin/products" className="menu-item">
//                     Liên Hệ
//                   </a>
//                 </li>
//                 <li class="menu-box">
//                   <a href="/admin/products" className="menu-item">
//                     Quản Trị
//                   </a>
//                 </li>
//               </ul>

//             </div>

//             <div className="menubar-right">
//               {/* <div id="divtimkiem" style={{ width: "300px" }}>
//                 Phần tìm kiếm
//               </div> */}
//               <div
//                     id="divtimkiem"
//                     style={{
//                         width: "200px", // ⬅️ GIẢM KÍCH THƯỚC CHIỀU NGANG
//                         height: "auto",
//                         display: "flex",
//                         alignItems: "center",
//                         border: "1px solid #ccc",
//                         borderRadius: "20px", // Bo tròn góc
//                         padding: "3px 3px", // ⬅️ GIẢM PADDING (Giảm chiều cao)
//                         backgroundColor: "#f9f9f9",
//                         boxShadow: "0 2px 4px rgba(0,0,0,0.05)", // Thêm đổ bóng nhẹ
//                     }}
//                 >
//                     {/* Biểu tượng Kính lúp (thay thế bằng icon thực tế nếu dùng thư viện như FontAwesome) */}
//                     <span style={{
//                         color: "#888",
//                         marginRight: "10px",
//                         fontSize: "1.2rem"
//                     }}>
//                         🔍
//                     </span>

//                     {/* Ô nhập liệu tìm kiếm */}
//                     <input
//                         type="text"
//                         placeholder="Tìm kiếm sản phẩm..."
//                         style={{
//                             flexGrow: 1,
//                             border: "none",
//                             outline: "none", // Loại bỏ viền khi focus
//                             backgroundColor: "transparent",
//                             fontSize: "0.95rem", // ⬅️ GIẢM KÍCH THƯỚC CHỮ
//                             padding: "3px 0" // Giảm padding input
//                         }}
//                     />

//                 </div>

//                         {/* 📏 ĐƯỜNG PHÂN CÁCH DỌC ĐÃ THÊM */}
//                         <span class="vertical-separator" style={{
//                             borderLeft: '1px solid #ffffff', // Màu trắng để dễ nhìn trên nền xanh lá
//                             height: '20px', // Chiều cao của thanh phân cách
//                             marginRight: '15px',
//                             opacity: 0.6 // Làm mờ một chút cho đẹp
//                         }}></span>

//                 {/* user state */}
//               {user ? (
//                 <>
//                   <span className="username">👤 {user.username}</span>
//                   <button className="logout-btn" onClick={handleLogout}>
//                     Đăng xuất
//                   </button>
//                 </>
//               ) : (
//                 <a href="/login" className="login-link">
//                   Đăng nhập
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>
//       <body>
//         <div id="container" class="container">
//           <Outlet />
//         </div>
//       </body>
//       <footer></footer>
//     </html>
//   );
// };

// export default Layout;
// CODE TRÊN LÀ BẢN ORIGINAL

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

//CODE CẢI TIẾN
import "./assets/css/main.css";
import anhlogo from "./assets/images//logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// bổ sung supabaseclient
import { supabase } from "./supabaseClient";
import SearchProduct from "./SearchProduct";
import ListProducts_SP from "./ListProducts_SP"; //Import con vào để nó nhận prop từ cha và xử lí cho thanh tìm kiếm (của cha)
import CartModal from "./CartModal"; //Giỏ hàng
import { useCart } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa"; // dùng react-icons

const Layout = () => {
  const [user, setUser] = useState(null);
  // giỏ hàng
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false); // Lưu sản phẩm trong giỏ hàn

  const navigate = useNavigate();
  // ✅ ĐÃ THÊM: Khai báo biến categories để tránh lỗi "categories is not defined"
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null); // ✅ state cho sản phẩm được chọn (thanh tìm kiếm) -> đổ prop cho con (ListProduct_SP) xử lí ở phần hiển thị sản phẩm
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Lấy danh sách Categories từ Supabase bằng Fetch API
  //✅ ĐÃ THÊM: Lấy danh sách Categories từ Supabase
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       // Gọi API lấy danh mục
  //       const response = await fetch(
  //         `${SUPABASE_URL}/rest/v1/categories?select=categories_id,name&order=categories_id.asc`,
  //         {
  //           headers: {
  //             'apikey': SUPABASE_API_KEY,
  //             'Authorization': `Bearer ${SUPABASE_API_KEY}`,
  //             'Content-Type': 'application/json'
  //           }
  //         }
  //       );
  //       if (!response.ok) throw new Error('Lỗi tải danh mục');
  //       const data = await response.json();
  //       setCategories(data || []);
  //     } catch (error) {
  //       console.error("Lỗi:", error);
  //       // Nếu lỗi, set mảng rỗng để không bị crash
  //       setCategories([]);
  //     }
  //   };
  //   fetchCategories();
  // }, []);

  // 2. Lấy danh sách Categories sử dụng Supabase SDK (Mô phỏng)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // ✅ CẬP NHẬT: Sử dụng cách gọi SDK (đã được mô phỏng ở trên)
        const { data, error } = await supabase
          .from("categories")
          .select("categories_id, name")
          .order("categories_id", { ascending: true });

        if (error) throw error;

        setCategories(data || []);
      } catch (error) {
        console.error("Lỗi lấy danh mục:", error.message);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  // ------------------------------------
  // 🚀 2. HÀM XỬ LÝ CLICK VÀ CUỘN
  // ------------------------------------

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  // * Chuyển đổi chuỗi có dấu thành slug (dạng URL thân thiện).
  // * Ví dụ: "Xoài Cát Chu ngon" -> "xoai-cat-chu-ngon"
  // * @param {string} text
  // * @returns {string} Slug đã được tạo.
  // */

  // ===============================================
  // Thanh tìm kiếm
  // ===============================================
  // const handleCategoryClick = (id) => {
  //   setActiveCategoryId(id);
  //   setSelectedId(null); //Phần quan trọng để thay đổi sản phẩm dựa trên keyword tìm trên thanh tìm kiếm
  //   if (productGridRef.current) {
  //     productGridRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // ===============================================
  // Chuyển đến trang giỏ hàng
  // ===============================================
  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <html>
      <header>
        <div id="divheader" class="header1">
          <div id="banner" class="banner1">
            {/* <div id="topleft">
              <ul class="ul1">
                <li>
                  <a href="/#">TRANG CHỦ</a>
                </li>
                <li>
                  <a href="/trang1">EGOV</a>
                </li>
                <li>
                  <a href="/admin/products">QUẢN TRỊ</a>
                </li>
              </ul>
            </div> */}
            <div id="logo" class="logo1">
              <img src={anhlogo} width="75" />
            </div>
            {/* <div id="divtimkiem" style={{ width: "300px" }}>
              Phần tìm kiếm
            </div> */}
          </div>
          <div id="menubar" className="menubar">
            <div className="menubar-left">
              {/* <a href="/menu1" className="menu-item">
                Menu 1
              </a>
              <a href="/menu2" className="menu-item">
                Menu 2
              </a>
              <a href="/menu3" className="menu-item">
                Menu 3
              </a> */}

              <ul class="ul1">
                <li class="menu-box">
                  <a
                    href="/"
                    className="menu-item"
                    onClick={() => navigate("/")}
                  >
                    Trang Chủ
                  </a>
                </li>
                <li class="menu-box">
                  <a
                    href=""
                    className="menu-item"
                    onClick={() => navigate("/")}
                  >
                    Sản phẩm
                  </a>
                  <ul class="submenu">
                    {/* <li class="menu-box">
                      <a href="#traicaytuoi">Trái cây tươi</a>
                    </li>
                    <li class="menu-box">
                      <a href="#traicaycatsan">Trái cây cắt sẵn</a>
                    </li>
                    <li class="menu-box">
                      <a href="#goiquatangtraicay">Gói quà tặng trái cây </a>
                    </li>
                    <li class="menu-box">
                      <a href="#nuoceptraicay">Nước ép trái cây</a>
                    </li> */}
                    {/* MENU ĐỘNG */}
                    {categories.length > 0 ? (
                      categories.map((cat) => (
                        <li
                          key={cat.categories_id}
                          className="menu-box"
                          style={{ height: "auto" }}
                        >
                          {/* Sử dụng thẻ <a> để cuộn xuống section nếu ở trang chủ */}
                          <a href={`/category-${cat.categories_id}`}>
                            {cat.name}
                          </a>
                        </li>
                      ))
                    ) : (
                      <li>
                        <a href="#">Đang tải...</a>
                      </li>
                    )}
                  </ul>
                </li>
                <li class="menu-box">
                  <a
                    href="trang2"
                    className="menu-item"
                    onClick={() => navigate("/gioithieu")}
                  >
                    Giới Thiệu
                  </a>
                </li>
                <li class="menu-box">
                  <a
                    href="/lien-he"
                    className="menu-item"
                    onClick={() => navigate("/lien-he")}
                  >
                    Liên Hệ
                  </a>
                </li>
                <li class="menu-box">
                  <a
                    href="/admin/products"
                    className="menu-item"
                    onClick={() => navigate("/admin/products")}
                  >
                    Quản Trị
                  </a>
                </li>
              </ul>
            </div>

            <div className="menubar-right">
              {/* <div id="divtimkiem" style={{ width: "300px" }}>
                Phần tìm kiếm
              </div> */}
              <SearchProduct onSelect={(id) => setSelectedId(id)} />


              {/* Giỏ hàng */}
              {/* Icon giỏ hàng với số lượng */}
              {/* <div
                style={{
                  position: "relative",
                  cursor: "pointer",
                  marginRight: "15px",
                }}
                onClick={goToCart}
              >
                <FaShoppingCart size={24} color="#fff" />
                {cart.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      backgroundColor: "#e63946",
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {cart.length}
                  </span>
                )}
              </div> */}
              {/* <div
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => setIsCartOpen(true)}
        >
          <FaShoppingCart size={24} color="#fff" />
          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "#e63946",
                color: "#fff",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {cart.length}
            </span>
          )}
        </div> */}
         <div onClick={() => setIsCartOpen(true)} style={{ position: "relative", cursor: "pointer" }}>
            <FaShoppingCart size={24} color="#000" />
            {cart.length > 0 && <span style={{ position: "absolute", top: -8, right: -8, backgroundColor: "red", color: "#fff", borderRadius: "50%", padding: "2px 6px" }}>{cart.length}</span>}
          </div>

              {/* 📏 ĐƯỜNG PHÂN CÁCH DỌC ĐÃ THÊM */}
              <span
                class="vertical-separator"
                style={{
                  borderLeft: "1px solid #ffffff", // Màu trắng để dễ nhìn trên nền xanh lá
                  height: "20px", // Chiều cao của thanh phân cách
                  marginRight: "15px",
                  opacity: 0.6, // Làm mờ một chút cho đẹp
                }}
              ></span>

              {/* user state */}
              {user ? (
                <>
                  <span className="username">👤 {user.username}</span>
                  <button className="logout-btn" onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </>
              ) : (
                <a
                  href="/login"
                  className="login-link"
                  onClick={() => navigate("/login")}
                >
                  Đăng nhập
                </a>
              )}
            </div>
          </div>
        </div>
      </header>
      <body>
        <div id="container" class="container">
          {/* Phần hiển thị sản phẩm (new one) */}
          {/* <SearchProduct onSelect={(id) => setSelectedId(id)} /> */}
          {/* <ListProducts_SP selectedId={selectedId} setSelectedId={setSelectedId} /> */}
          
                {/* Phần hiển thị sản phẩm (old one) */}
                {/* <Outlet /> */}
                <Outlet context={{ selectedId, setSelectedId }} />
          
                <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </body>
      <footer>
        {" "}
        <p>© 2025 Cửa Hàng Trái Cây 2TFresh</p>
      </footer>
    </html>
  );
};

export default Layout;

// CODE MẪU GEMINI
// import React, { useEffect, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// // Đã loại bỏ import '@supabase/supabase-js' để tránh lỗi biên dịch.
// // Chúng ta sẽ dùng fetch API để lấy danh mục.

// // --- CẤU HÌNH SUPABASE (Lấy từ file supabaseClient.js của bạn) ---
// const SUPABASE_URL = "https://rhdnydvtpyksbagesfxu.supabase.co";
// const SUPABASE_API_KEY = "sb_publishable_kjcKirCE8PEKLVyJQN1XYg_PEs6_DU7";

// // Placeholder cho logo
// const anhlogo = "https://placehold.co/75x75/73af6f/white?text=LOGO";

// const Layout = () => {
//   const [user, setUser] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   // 1. Lấy thông tin User từ localStorage
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // 2. Lấy danh sách Categories từ Supabase bằng Fetch API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         // Gọi REST API thay vì dùng SDK
//         const response = await fetch(
//           `${SUPABASE_URL}/rest/v1/categories?select=categories_id,name&order=categories_id.asc`,
//           {
//             headers: {
//               'apikey': SUPABASE_API_KEY,
//               'Authorization': `Bearer ${SUPABASE_API_KEY}`,
//               'Content-Type': 'application/json'
//             }
//           }
//         );

//         if (!response.ok) throw new Error('Network response was not ok');

//         const data = await response.json();
//         setCategories(data || []);
//       } catch (error) {
//         console.error("Lỗi lấy danh mục:", error.message);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <div className="layout-wrapper">
//       {/* CSS Inline để đảm bảo giao diện không bị vỡ */}
//       <style>{`
//         body { margin: 0; background-color: #FFFBE6; color: #333; }
//         * { font-family: "Marmelad", sans-serif; font-weight: 400; font-style: normal; }
//         @import url("https://fonts.googleapis.com/css2?family=Dongle&family=Marmelad&display=swap");

//         .header1 {
//           height: 160px;
//           display: flex;
//           flex-direction: column;
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//         }

//         .banner1 {
//           height: 80px;
//           display: flex;
//           flex-direction: row;
//           justify-content: center;
//           background-color: #73af6f;
//           align-items: center;
//         }

//         .logo1 { width: 75px; }

//         .menubar {
//           background-color: #493628;
//           color: #FFFBE6;
//           height: 56px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 30px;
//           box-sizing: border-box;
//         }

//         .menubar-left { display: flex; gap: 20px; }
//         .ul1 { display: flex; flex-direction: row; list-style: none; padding: 0; margin: 0; }

//         .menu-box { padding: 0 15px; position: relative; height: 56px; display: flex; align-items: center; }

//         .menu-item {
//           color: #fff;
//           text-decoration: none;
//           font-family: "Marmelad", sans-serif;
//           font-weight: 400;
//           transition: 0.2s;
//           display: block;
//           cursor: pointer;
//         }

//         .menu-box:hover .menu-item { color: #FFFBE6; }
//         .menu-box::after {
//           content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 3px;
//           background-color: white; transition: width 0.4s ease;
//         }
//         .menu-box:hover::after { width: 100%; }

//         /* Submenu */
//         .submenu {
//           display: none;
//           position: absolute;
//           top: 100%;
//           left: 0;
//           background-color: #f1f1f1;
//           min-width: 200px;
//           border: 1px solid #ddd;
//           z-index: 1;
//           padding: 0;
//           list-style: none;
//         }
//         .menu-box:hover .submenu { display: block; background-color: #e7deaf; }

//         .submenu li { padding: 0; }
//         .submenu li a {
//           color: #493628; text-decoration: none; display: block; padding: 10px 15px;
//         }
//         .submenu li a:hover { background-color: #ddd; }

//         .menubar-right { display: flex; align-items: center; gap: 12px; }

//         #divtimkiem {
//           width: 200px; height: auto; display: flex; alignItems: center;
//           border: 1px solid #ccc; borderRadius: 20px; padding: 3px 3px;
//           background-color: #f9f9f9; box-shadow: 0 2px 4px rgba(0,0,0,0.05);
//         }
//         #divtimkiem input {
//           flex-grow: 1; border: none; outline: none; background-color: transparent;
//           font-size: 0.95rem; padding: 3px 0;
//         }

//         .vertical-separator {
//           border-left: 1px solid #ffffff; height: 20px; margin-right: 15px; opacity: 0.6;
//         }

//         .username { color: #fff; font-size: 14px; font-weight: 500; }
//         .logout-btn {
//           background-color: #fff; color: #b22d30; border: none; border-radius: 6px;
//           padding: 5px 12px; cursor: pointer; font-size: 13px; font-weight: 600; transition: 0.25s;
//         }
//         .logout-btn:hover { background-color: #f5f5f5; }
//         .login-link { color: #fff; text-decoration: none; font-weight: 500; cursor: pointer;}
//         .login-link:hover { text-decoration: underline; }

//         .container {
//           min-height: 500px; width: 100%; display: flex; justify-content: center;
//           padding-top: 160px;
//         }
//       `}</style>

//       <header>
//         <div id="divheader" className="header1">
//           <div id="banner" className="banner1">
//             <div id="logo" className="logo1">
//               <img src={anhlogo} width="75" alt="Logo" />
//             </div>
//           </div>
//           <div id="menubar" className="menubar">
//             <div className="menubar-left">
//               <ul className="ul1">
//                 <li className="menu-box">
//                   <span className="menu-item" onClick={() => navigate("/")}>
//                     Trang Chủ
//                   </span>
//                 </li>
//                 <li className="menu-box">
//                   <span className="menu-item" onClick={() => navigate("/trang1")}>
//                     Sản Phẩm
//                   </span>
//                   {/* --- SUBMENU ĐỘNG TỪ SUPABASE --- */}
//                   <ul className="submenu">
//                     {categories.length > 0 ? (
//                       categories.map((cat) => (
//                         <li key={cat.categories_id} className="menu-box" style={{height: 'auto'}}>
//                            {/* Sử dụng thẻ <a> để cuộn xuống section nếu ở trang chủ */}
//                            <a href={`/trang1#category-${cat.categories_id}`}>
//                             {cat.name}
//                           </a>
//                         </li>
//                       ))
//                     ) : (
//                       <li><a href="#">Đang tải...</a></li>
//                     )}
//                   </ul>
//                 </li>
//                 <li className="menu-box">
//                   <span className="menu-item" onClick={() => navigate("/gioithieu")}>
//                     Giới Thiệu
//                   </span>
//                 </li>
//                 <li className="menu-box">
//                   <span className="menu-item" onClick={() => navigate("/lienhe")}>
//                     Liên Hệ
//                   </span>
//                 </li>
//                 <li className="menu-box">
//                   <span className="menu-item" onClick={() => navigate("/admin/products")}>
//                     Quản Trị
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             <div className="menubar-right">
//               <div id="divtimkiem">
//                 <span style={{ color: "#888", marginRight: "10px", fontSize: "1.2rem" }}>
//                   🔍
//                 </span>
//                 <input type="text" placeholder="Tìm kiếm sản phẩm..." />
//               </div>

//               <span className="vertical-separator"></span>

//               {user ? (
//                 <>
//                   <span className="username">👤 {user.username || "User"}</span>
//                   <button className="logout-btn" onClick={handleLogout}>
//                     Đăng xuất
//                   </button>
//                 </>
//               ) : (
//                 <span className="login-link" onClick={() => navigate("/login")}>
//                   Đăng nhập
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       <div id="body-wrapper">
//         <div id="container" className="container">
//           <Outlet />
//         </div>
//       </div>

//       <footer></footer>
//     </div>
//   );
// };

// export default Layout;

// const unsubscribe = onAuthStateChanged(authInstance, (firebaseUser) => {
//   if (firebaseUser) {
//       setUserId(firebaseUser.uid);
//       setUser({ displayName: `User-${firebaseUser.uid.substring(0, 6)}`, isAuthenticated: true });
//   } else {
//       setUserId(null);
//       setUser({ displayName: 'Khách Hàng', isAuthenticated: false });
//   }
//   setIsAuthReady(true);
// });
