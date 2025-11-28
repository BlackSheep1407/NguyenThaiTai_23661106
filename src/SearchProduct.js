// SearchProduct → chỉ tìm và trả ID

// Layout → quản lý state và navigation

// ListProducts_SP → hiển thị dữ liệu theo state
// SearchProduct.jsx (cũ)
// import { useState } from "react";
// import { supabase } from "./supabaseClient";

// export default function SearchProduct({ onSelect }) {
//   const [keyword, setKeyword] = useState("");
//   const [results, setResults] = useState([]);
//   const [debounceTimer, setDebounceTimer] = useState(null);

//   const handleSearch = (value) => {
//     setKeyword(value);

//     if (debounceTimer) clearTimeout(debounceTimer);

//     setDebounceTimer(
//       setTimeout(async () => {
//         if (value.trim() === "") {
//           setResults([]);
//           return;
//         }

//         try {
//           const { data, error } = await supabase
//             .from("products")
//             .select("id, title")
//             .ilike("title", `%${value}%`);

//           if (error) throw error;
//           setResults(data.slice(0, 10));
//         } catch (err) {
//           console.error("Lỗi tìm kiếm:", err.message);
//           setResults([]);
//         }
//       }, 300)
//     );
//   };

//   return (
//     <div style={{ position: "relative", width: "250px" }}>
//       <input
//         type="text"
//         placeholder="Tìm kiếm sản phẩm..."
//         value={keyword}
//         onChange={(e) => handleSearch(e.target.value)}
//         style={{
//           width: "100%",
//           border: "1px solid #ccc",
//           borderRadius: "20px",
//           padding: "6px 12px",
//         }}
//       />
//       {results.length > 0 && (
//         <ul
//           style={{
//             position: "absolute",
//             top: "40px",
//             width: "100%",
//             background: "white",
//             listStyle: "none",
//             padding: "5px 0",
//             border: "1px solid #ddd",
//             borderRadius: "10px",
//             zIndex: 100,
//             maxHeight: "250px",
//             overflowY: "auto",
//           }}
//         >
//           {results.map((item) => (
//             <li
//               key={item.id}
//               style={{
//                 padding: "8px 10px",
//                 cursor: "pointer",
//                 backgroundColor: "#457b9d",
//                 color: "white",
//                 borderBottom: "1px solid #eee",
//               }}
//               onClick={() => {
//                 onSelect(item.id); // Gửi ID về Layout
//                 setKeyword("");
//                 setResults([]);
//               }}
//             >
//               {item.title}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// SearchProduct → chỉ tìm và trả ID

// Layout → quản lý state và navigation

// ListProducts_SP → hiển thị dữ liệu theo state
// SearchProduct.jsx ()
import { useState, useEffect, useRef } from "react";
import { supabase } from "./supabaseClient";
import "./assets/css/SearchProduct.css";

export default function SearchProduct({ onSelect }) {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [debounceTimer, setDebounceTimer] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);

  // ✅ Lấy sản phẩm gợi ý (top 6)
  const fetchSuggestions = async (search = "") => {
    try {
      let query = supabase.from("products").select("id, title").order("id", { ascending: true });
      if (search.trim() !== "") query = query.ilike("title", `%${search}%`);
      const { data, error } = await query;
      if (error) throw error;
      setResults(data.slice(0, 6));
    } catch (err) {
      console.error("Lỗi tìm kiếm:", err.message);
      setResults([]);
    }
  };

  const handleSearch = (value) => {
    setKeyword(value);

    if (debounceTimer) clearTimeout(debounceTimer);

    setDebounceTimer(
      setTimeout(() => {
        fetchSuggestions(value);
      }, 300)
    );
  };

  // ✅ Ẩn dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Khi input focus nhưng rỗng, vẫn hiển thị top 6 sản phẩm
  const handleFocus = () => {
    setIsFocused(true);
    if (results.length === 0) fetchSuggestions();
  };

  return (
    <div ref={containerRef} style={{ position: "relative", width: "250px" }} className="search-container">
      <input
        type="text"
        placeholder="🔍Tìm kiếm sản phẩm..."
        value={keyword}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={handleFocus}
        // style={{
        //   width: "100%",
        //   border: "1px solid #ccc",
        //   borderRadius: "20px",
        //   padding: "6px 12px",
        // }}
      />

      {isFocused && results.length > 0 && (
        <ul
        //   style={{
        //     position: "absolute",
        //     top: "40px",
        //     width: "100%",
        //     background: "#493628",
        //     listStyle: "none",
        //     padding: "5px 0",
        //     // border: "1px solid #ddd",
        //     border: "none",
        //     borderRadius: "10px",
        //     zIndex: 100,
        //     maxHeight: "250px",
        //     overflowY: "auto",
        //     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        //   }}
        >
          {results.map((item) => (
            <li
              key={item.id}
            //   style={{
            //     padding: "8px 10px",
            //     cursor: "pointer",
            //     backgroundColor: "#493628",
            //     color: "white",
            //     borderBottom: "1px solid #eee",
            //     borderRadius: "10px",
            //   }}
              onClick={() => {
                onSelect(item.id);
                setKeyword("");
                setResults([]);
                setIsFocused(false);
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}








{/* <div
                id="divtimkiem"
                style={{
                  width: "200px", // ⬅️ GIẢM KÍCH THƯỚC CHIỀU NGANG
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: "20px", // Bo tròn góc
                  padding: "3px 3px", // ⬅️ GIẢM PADDING (Giảm chiều cao)
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)", // Thêm đổ bóng nhẹ
                }}
              > */}
                {/* Biểu tượng Kính lúp (thay thế bằng icon thực tế nếu dùng thư viện như FontAwesome) */}
            //     <span
            //       style={{
            //         color: "#888",
            //         marginRight: "10px",
            //         fontSize: "1.2rem",
            //       }}
            //     >
            //       🔍
            //     </span>

            //     {/* Ô nhập liệu tìm kiếm */}
            //     <input
            //       type="text"
            //       placeholder="Tìm kiếm sản phẩm..."
            //       style={{
            //         flexGrow: 1,
            //         border: "none",
            //         outline: "none", // Loại bỏ viền khi focus
            //         backgroundColor: "transparent",
            //         fontSize: "0.95rem", // ⬅️ GIẢM KÍCH THƯỚC CHỮ
            //         padding: "3px 0", // Giảm padding input
            //       }}
            //     />
            //   </div>