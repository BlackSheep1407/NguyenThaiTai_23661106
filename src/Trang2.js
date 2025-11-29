// const Trang2 = () => {
//   const dssv = [
//     {
//       id: 1,
//       hoten: "Nguyễn Văn An111",
//       lop: "K19",
//       email: "abc@1234.edu.vn",
//       anh: "https://htmediagroup.vn/wp-content/uploads/2022/11/Anh-58-copy-min.jpg.webp",
//     },
//     {
//       id: 2,
//       hoten: "Trần Văn Bình",
//       lop: "K19",
//       email: "abc@1234.edu.vn",
//       anh: "https://htmediagroup.vn/wp-content/uploads/2022/08/Anh-cong-so-1-min.jpg.webp",
//     },
//     {
//       id: 3,
//       hoten: "Hà Thị Hiền",
//       lop: "K19",
//       email: "abc@cuong.edu.vn",
//       anh: "https://smilemedia.vn/wp-content/uploads/2022/08/Concept-chup-anh-ca-nhan-chan-dung.jpg",
//     },
//     {
//       id: 4,
//       hoten: "Nguyễn Kiều Hải My",
//       lop: "K19",
//       email: "abc@cuong.edu.vn",
//       anh: "https://studiochupanhdep.com//Upload/Images/Album/anh-beauty-01.jpg",
//     },
//   ];

//   return (
//     <div
//       style={{
//         minHeight: "100vh", // Chiếm toàn bộ chiều cao màn hình
//         display: "flex",
//         justifyContent: "center", // Căn giữa ngang

//         backgroundColor: "#f9f9f9", // Tuỳ chọn
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//           gap: "16px",
//           maxWidth: "1000px", // Giới hạn chiều rộng
//           width: "100%",
//         }}
//       >
//         {dssv.map((motsinhvien) => (
//           <div
//             key={motsinhvien.id}
//             style={{
//               height: "300px",
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               padding: "10px",
//               textAlign: "center",
//               backgroundColor: "#fff",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <img
//               src={motsinhvien.anh}
//               alt={motsinhvien.hoten}
//               style={{
//                 height: "140px",

//                 objectFit: "cover",
//                 borderRadius: "6px",
//               }}
//             />
//             <h3 style={{ margin: "10px 0 5px" }}>{motsinhvien.hoten}</h3>
//             <p>{motsinhvien.lop}</p>
//             <p>{motsinhvien.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Trang2;

// CODE MỚI 1:
// import React, { useState } from 'react';

// // --- Dữ Liệu Đồng Sáng Lập ---
// const founders = [
//   {
//     id: 2,
//     hoten: "Nguyễn Thái Tài",
//     // Đã cập nhật vai trò
//     chucvu: "Sáng lập & Điều hành",
//     email: "tai@2tfreshmarket.vn",
//     // Ảnh từ Asset
//     anh: "image_375c76.png",
//   },
// ];

// // --- SVG Icons (Sử dụng Lucide Icons mô phỏng) ---
// const IconStyle = { width: '22px', height: '22px', marginRight: '10px', flexShrink: 0, color: 'currentColor' };

// // Các Icon cho tab menu
// const MissionIcon = () => (<svg style={IconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5L12 2zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>); // Tòa nhà/Kim tự tháp
// const FeaturesIcon = () => (<svg style={IconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>); // Lưới
// const PolicyIcon = () => (<svg style={IconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 10 12 13 12"></polyline></svg>); // Tài liệu

// // Icons cho danh sách
// const FreshIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.32L22 9.27l-5 4.87 1.18 6.88L12 18.27l-6.18 3.55L7 14.14l-5-4.87 6.91-1.05z" fill="currentColor"></path></svg>); 
// const CartIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>);
// const ClockIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>); // Tốc độ
// const MobileIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>); // App Mobile
// const ExchangeIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="4" x2="7" y2="4"></line><line x1="17" y1="20" x2="23" y2="20"></line><path d="M20.88 18.12a2.43 2.43 0 0 0 1.25-2.61L20 8h-9l3.5 3.5m-3.5 2.5L12 12m-3-3L6 6"></path></svg>); // Đổi trả
// const ShieldIcon = ({ color }) => (<svg style={IconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>); // Bảo mật
// const InfoIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>); // Info
// const GiftIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>); // Gift

// // --- Component Card Thành Viên ---
// const MemberCard = ({ member }) => {
//   const primaryColor = '#198754';
//   const secondaryColor = '#ffc107';

//   const cardStyle = {
//     padding: '25px',
//     borderRadius: '18px',
//     textAlign: 'center',
//     backgroundColor: '#ffffff',
//     // Đổ bóng sắc nét hơn
//     boxShadow: '0 10px 30px rgba(0,0,0,0.1), 0 0 0 3px #f0f0f0', 
//     transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease',
//     cursor: 'pointer',
//     flex: '1',
//     minWidth: '280px',
//     maxWidth: '320px',
//     margin: '15px', 
//     border: 'none',
//   };

//   const imageStyle = {
//     width: '150px',
//     height: '150px',
//     borderRadius: '50%',
//     objectFit: 'cover', // Đảm bảo ảnh được cắt tròn đẹp
//     marginBottom: '20px',
//     // Viền ngoài màu gradient
//     border: `5px solid transparent`,
//     backgroundImage: `linear-gradient(white, white), linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
//     backgroundOrigin: 'border-box',
//     backgroundClip: 'content-box, border-box',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   };

//   const nameStyle = {
//     margin: '10px 0 5px',
//     fontSize: '1.7rem',
//     fontWeight: '900',
//     color: primaryColor,
//   };

//   const roleStyle = {
//     color: '#6c757d',
//     fontWeight: '600',
//     marginBottom: '8px',
//     fontSize: '1rem',
//   };

//   const emailStyle = {
//     color: '#495057',
//     fontSize: '0.9rem',
//     textDecoration: 'none',
//   };

//   return (
//     <div
//       style={cardStyle}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
//         e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.2)';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = 'translateY(0) scale(1)';
//         e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1), 0 0 0 3px #f0f0f0';
//       }}
//     >
//       <img 
//         src={member.anh} 
//         alt={member.hoten} 
//         style={imageStyle} 
//         // Fallback placeholder khi ảnh không load được
//         onError={(e) => e.target.src = "https://placehold.co/150x150/cccccc/333333?text=2T"} 
//       />
//       <h3 style={nameStyle}>{member.hoten}</h3>
//       <p style={roleStyle}>{member.chucvu}</p>
//       <a href={`mailto:${member.email}`} style={emailStyle}>{member.email}</a>
//     </div>
//   );
// };


// // --- Component Trang Giới Thiệu Chính ---
// const Trang2 = () => {
//   const [activeTab, setActiveTab] = useState('mission');
//   const primaryColor = '#198754'; // Xanh lá cây đậm
//   const secondaryColor = '#ffc107'; // Vàng đậm
  
//   const containerStyle = {
//     minHeight: "100vh",
//     // Nền gradient nhẹ, hiện đại
//     background: 'linear-gradient(135deg, #f4f7f6 0%, #eef0ef 100%)',
//     padding: "60px 20px",
//     fontFamily: 'Montserrat, sans-serif',
//     display: 'flex',
//     justifyContent: 'center',
//   };

//   const contentWrapperStyle = {
//     maxWidth: "1100px",
//     width: "100%",
//   };

//   const mainTitleStyle = {
//     textAlign: 'center',
//     fontSize: '3.5rem',
//     color: primaryColor,
//     marginBottom: '10px',
//     fontWeight: '900',
//     textShadow: '3px 3px 6px rgba(0, 0, 0, 0.1)',
//   };
  
//   const subtitleStyle = {
//     textAlign: 'center',
//     fontSize: '1.4rem',
//     color: '#6c757d',
//     marginBottom: '50px',
//     fontWeight: '300',
//   };

//   const sectionTitleStyle = {
//     fontSize: '2rem',
//     color: '#343a40',
//     borderBottom: `3px solid ${secondaryColor}`,
//     paddingBottom: '10px',
//     marginBottom: '30px',
//     marginTop: '50px',
//     fontWeight: '700',
//   };

//   const paragraphStyle = {
//     fontSize: '1.1rem',
//     lineHeight: '1.8',
//     color: '#495057',
//     marginBottom: '20px',
//     textAlign: 'justify',
//   };

//   const listStyle = {
//     listStyleType: 'none', 
//     paddingLeft: '0',
//     fontSize: '1.1rem',
//   };

//   const listItemStyle = {
//     marginBottom: '15px',
//     display: 'flex',
//     alignItems: 'flex-start',
//     lineHeight: '1.5',
//     color: '#495057',
//     backgroundColor: '#ffffff',
//     padding: '15px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
//     borderLeft: `5px solid ${secondaryColor}`,
//   };

//   // Dữ liệu cho phần Tabs
//   const tabData = {
//     mission: {
//       icon: <MissionIcon color={primaryColor} />,
//       title: "Sứ Mệnh & Động Lực Phát Triển",
//       content: (
//         <>
//           <p style={paragraphStyle}>
//             Xin chào! Tôi là **Nguyễn Thái Tài**, người sáng lập của 2Tfresh Market. Chúng tôi không chỉ bán trái cây, mà còn mang đến cam kết về chất lượng và sự tiện lợi. Với niềm đam mê mang lại những sản phẩm chất lượng và tươi ngon nhất đến tay khách hàng, tôi hy vọng trang web này sẽ là cầu nối giúp bạn dễ dàng lựa chọn và mua sắm các loại trái cây yêu thích.
//           </p>
//           <p style={paragraphStyle}>
//             **Động Lực:** Nhận thấy trái cây là nguồn dinh dưỡng thiết yếu và xu hướng mua sắm trực tuyến ngày càng tăng, chúng tôi quyết định phát triển 2Tfresh Market. Mục tiêu là tạo ra một nền tảng mua sắm trái cây sạch, rõ nguồn gốc, giúp khách hàng tiết kiệm thời gian, đồng thời khuyến khích thói quen ăn uống lành mạnh trong cộng đồng.
//           </p>
          
//           <h3 style={{...sectionTitleStyle, borderBottom: 'none', fontSize: '1.5rem', marginTop: '30px'}}>Ưu Điểm Vượt Trội</h3>
//           <ul style={{...listStyle, display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
//               <li style={{...listItemStyle, flex: '1 1 45%', borderLeft: `5px solid ${primaryColor}`}}><FreshIcon color={primaryColor} />**Nguồn gốc rõ ràng:** Cam kết cung cấp trái cây tươi ngon, được kiểm soát chất lượng nghiêm ngặt.</li>
//               <li style={{...listItemStyle, flex: '1 1 45%', borderLeft: `5px solid ${primaryColor}`}}><ShieldIcon color={primaryColor} />**Giao diện tối ưu:** Dễ sử dụng, thân thiện và tối ưu trên mọi thiết bị di động.</li>
//               <li style={{...listItemStyle, flex: '1 1 45%', borderLeft: `5px solid ${primaryColor}`}}><ClockIcon color={primaryColor} />**Đặt hàng nhanh:** Quy trình đơn giản, giúp khách hàng tiết kiệm tối đa thời gian.</li>
//               <li style={{...listItemStyle, flex: '1 1 45%', borderLeft: `5px solid ${primaryColor}`}}><ExchangeIcon color={primaryColor} />**Hỗ trợ nhanh:** Đội ngũ luôn sẵn sàng giải đáp mọi thắc mắc.</li>
//             </ul>
//         </>
//       ),
//     },
//     features: {
//       icon: <FeaturesIcon color={primaryColor} />,
//       title: "Các Chức Năng Hiện Tại & Kế Hoạch Tương Lai",
//       content: (
//         <>
//           <h3 style={{...sectionTitleStyle, borderBottom: 'none', fontSize: '1.5rem'}}>Chức Năng Hiện Tại</h3>
//           <ul style={listStyle}>
//             <li style={listItemStyle}><FreshIcon color={primaryColor} />Hiển thị danh mục trái cây chi tiết theo mùa, xuất xứ, giá cả, và chất lượng.</li>
//             <li style={listItemStyle}><CartIcon color={primaryColor} />Hệ thống giỏ hàng thông minh và hỗ trợ thanh toán linh hoạt (COD, chuyển khoản).</li>
//             <li style={listItemStyle}><InfoIcon color={primaryColor} />Cung cấp kiến thức về lợi ích sức khỏe và hướng dẫn bảo quản cho từng loại trái cây.</li>
//             <li style={listItemStyle}><GiftIcon color={primaryColor} />Hệ thống thông báo và ưu đãi cho các chương trình khuyến mãi.</li>
//           </ul>

//           <h3 style={{...sectionTitleStyle, borderBottom: 'none', fontSize: '1.5rem', marginTop: '30px'}}>Kế Hoạch Cải Thiện Trong Tương Lai</h3>
//           <ul style={listStyle}>
//             <li style={listItemStyle}><CartIcon color={secondaryColor} />Mở rộng sản phẩm sang nước ép trái cây tươi, sinh tố đóng chai, và combo dinh dưỡng.</li>
//             <li style={listItemStyle}><ClockIcon color={secondaryColor} />Tích hợp hệ thống giao hàng siêu tốc (Express Delivery) trong vòng 2 giờ cho nội thành.</li>
//             <li style={listItemStyle}><MobileIcon color={secondaryColor} />Phát triển ứng dụng di động riêng để tối ưu hóa trải nghiệm đặt hàng và theo dõi đơn hàng.</li>
//             <li style={listItemStyle}><ShieldIcon color={secondaryColor} />Liên tục cải thiện hiệu suất website và trải nghiệm tương tác để mua sắm trơn tru nhất.</li>
//           </ul>
//         </>
//       ),
//     },
//     policy: {
//       icon: <PolicyIcon color={primaryColor} />,
//       title: "Chính Sách Mua Hàng & Đổi Trả",
//       content: (
//         <>
//           <h3 style={{...sectionTitleStyle, borderBottom: 'none', fontSize: '1.5rem'}}>1. Chính Sách Mua Hàng và Thanh Toán</h3>
//           <div style={{...listItemStyle, borderLeft: `5px solid #007bff`, display: 'block'}}>
//             <p style={{fontWeight: '600', color: '#007bff'}}>Quy trình đặt hàng:</p>
//             <ul style={{listStyleType: 'decimal', paddingLeft: '25px', fontSize: '1rem', marginTop: '10px'}}>
//               <li>Chọn sản phẩm và thêm vào giỏ hàng.</li>
//               <li>Điền thông tin giao hàng (Tên, Địa chỉ, SĐT).</li>
//               <li>Chọn phương thức thanh toán (COD, Chuyển khoản ngân hàng).</li>
//               <li>Xác nhận đơn hàng và nhận thông báo.</li>
//             </ul>
//             <p style={{fontWeight: '600', color: '#007bff', marginTop: '15px'}}>Thanh toán:</p>
//             <p>Chúng tôi chấp nhận thanh toán khi nhận hàng (COD) và chuyển khoản ngân hàng. Thông tin chuyển khoản sẽ được cung cấp khi xác nhận đơn hàng.</p>
//           </div>

//           <h3 style={{...sectionTitleStyle, borderBottom: 'none', fontSize: '1.5rem', marginTop: '30px'}}>2. Chính Sách Đổi Trả và Hoàn Tiền</h3>
//           <div style={{...listItemStyle, borderLeft: `5px solid #dc3545`, display: 'block'}}>
//             <p style={{fontWeight: '600', color: '#dc3545'}}>Điều kiện đổi trả:</p>
//             <ul style={{listStyleType: 'disc', paddingLeft: '25px', fontSize: '1rem', marginTop: '10px'}}>
//               <li>Sản phẩm bị dập nát, hư hỏng do quá trình vận chuyển hoặc trước khi giao hàng.</li>
//               <li>Giao sai loại trái cây hoặc sai số lượng so với đơn đặt hàng.</li>
//               <li>Thời gian yêu cầu đổi trả phải trong vòng **2 giờ** kể từ khi nhận hàng.</li>
//             </ul>
//             <p style={{fontWeight: '600', color: '#dc3545', marginTop: '15px'}}>Quy trình:</p>
//             <p>Khách hàng vui lòng chụp ảnh sản phẩm lỗi và liên hệ ngay với hotline/email hỗ trợ. Chúng tôi sẽ tiến hành xác minh và gửi sản phẩm thay thế hoặc hoàn tiền trong vòng 24 giờ.</p>
//             <p style={{fontWeight: '600', color: '#dc3545', marginTop: '15px'}}>Lưu ý:</p>
//             <p>Chúng tôi không áp dụng đổi trả cho các trường hợp sản phẩm đã được sử dụng quá 50% hoặc để quá thời gian quy định.</p>
//           </div>
//         </>
//       ),
//     },
//   };

//   // Style cho Tab Menu
//   const tabMenuStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '40px',
//     backgroundColor: '#ffffff',
//     borderRadius: '15px',
//     boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
//     overflow: 'hidden',
//   };

//   const tabButtonStyle = (key) => ({
//     padding: '15px 25px',
//     fontSize: '1.1rem',
//     fontWeight: '700',
//     cursor: 'pointer',
//     border: 'none',
//     background: activeTab === key ? primaryColor : 'transparent',
//     color: activeTab === key ? '#ffffff' : '#343a40',
//     transition: 'all 0.3s ease',
//     display: 'flex',
//     alignItems: 'center',
//     flex: 1,
//     justifyContent: 'center',
//     // Thêm style cho icon khi không active
//     '--icon-color': activeTab === key ? 'white' : primaryColor,
//   });

//   return (
//     <div style={containerStyle}>
//       <div style={contentWrapperStyle}>
//         <h1 style={mainTitleStyle}>2Tfresh Market</h1>
//         <p style={subtitleStyle}>Chất lượng, Tươi ngon và Tiện lợi là cam kết hàng đầu của chúng tôi.</p>

//         {/* --- 1. Thẻ giới thiệu thành viên --- */}
//         {/* Do chỉ còn 1 thành viên nên căn giữa */}
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center', 
//           marginBottom: '50px',
//         }}>
//           {founders.map((member) => (
//             <MemberCard key={member.id} member={member} />
//           ))}
//         </div>
        
//         <h2 style={{...sectionTitleStyle, textAlign: 'center', marginTop: '30px'}}>Thông Tin Chi Tiết</h2>

//         {/* --- 2. Tab Navigation --- */}
//         <div style={tabMenuStyle}>
//           {Object.keys(tabData).map((key) => (
//             <button
//               key={key}
//               onClick={() => setActiveTab(key)}
//               style={{...tabButtonStyle(key), ...{
//                 // Simple hover effect using onMouseEnter/onMouseLeave
//                 backgroundColor: activeTab === key ? primaryColor : 'transparent',
//               }}}
//               onMouseEnter={(e) => {
//                 if (key !== activeTab) e.currentTarget.style.backgroundColor = '#f0f0f0';
//               }}
//               onMouseLeave={(e) => {
//                 if (key !== activeTab) e.currentTarget.style.backgroundColor = 'transparent';
//               }}
//             >
//               {tabData[key].icon}
//               {tabData[key].title.split(' ')[0]}
//             </button>
//           ))}
//         </div>

//         {/* --- 3. Tab Content --- */}
//         <div style={{
//           padding: '40px',
//           backgroundColor: '#ffffff',
//           borderRadius: '15px',
//           boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
//           borderTop: `5px solid ${secondaryColor}`,
//         }}>
//           {/* Render content based on activeTab state */}
//           {tabData[activeTab] && tabData[activeTab].content}
//         </div>
        
//         <p style={{textAlign: 'center', color: '#6c757d', marginTop: '40px', fontSize: '0.9rem'}}>
//             Cảm ơn quý khách đã tin tưởng và lựa chọn 2Tfresh Market!
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Trang2;


// CODE MỚI 2:
import React, { useState } from 'react';
import anhdaidien from "./assets/images/anh-dai-dien.jpg";
// =================================================================
// HƯỚNG DẪN THAY ẢNH (Mô phỏng Import):
// Thay vì dùng 'import', bạn chỉ cần thay đổi tên file trong AssetMap bên dưới.
// Các tên file Asset đã tải lên:
// - image_36ebd6.png, image_3664d5.jpg, image_33b582.png, image_178a3d.jpg, 
// - image_fc3fba.png, image_fbcfda.png, image_ef907b.png, image_ef895e.png, image_d11bc0.png
// =================================================================

const AssetMap = {
  // ⬇️ Đổi tên file trong chuỗi (string) tại đây 
  anhdaidien: "anh-dai-dien.jpg",
  AnhKhac: "image_375c76.png", // Ví dụ về ảnh khác
  // ... thêm các ảnh khác nếu cần
};


// --- Dữ Liệu Đồng Sáng Lập ---
const founders = [
  {
    id: 2,
    hoten: "Nguyễn Thái Tài",
    chucvu: "Sáng lập & Điều hành",
    email: "tai@2tfreshmarket.vn",
    // ⬇️ Bây giờ chỉ cần dùng KEY (tên biến) đã định nghĩa trong AssetMap
    anhKey: "anhdaidien", 
  },
];

// --- SVG Icons (Sử dụng Lucide Icons mô phỏng) ---
// Giữ nguyên IconStyle để đảm bảo icon không bị lệch so với text mới
const IconStyle = { width: '20px', height: '20px', marginRight: '8px', flexShrink: 0, color: 'currentColor' };

// Các Icon cho tab menu
const MissionIcon = () => (<svg style={IconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5L12 2zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>); // Tòa nhà/Kim tự tháp
const FeaturesIcon = () => (<svg style={IconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>); // Lưới
const PolicyIcon = () => (<svg style={IconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 10 12 13 12"></polyline></svg>); // Tài liệu

// Icons cho danh sách
const FreshIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.32L22 9.27l-5 4.87 1.18 6.88L12 18.27l-6.18 3.55L7 14.14l-5-4.87 6.91-1.05z" fill="currentColor"></path></svg>); 
const CartIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>);
const ClockIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>); // Tốc độ
const MobileIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>); // App Mobile
const ExchangeIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="4" x2="7" y2="4"></line><line x1="17" y1="20" x2="23" y2="20"></line><path d="M20.88 18.12a2.43 2.43 0 0 0 1.25-2.61L20 8h-9l3.5 3.5m-3.5 2.5L12 12m-3-3L6 6"></path></svg>); // Đổi trả
const ShieldIcon = ({ color }) => (<svg style={IconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>); // Bảo mật
const InfoIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>); // Info
const GiftIcon = ({ color }) => (<svg style={{...IconStyle, color}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>); // Gift

// --- Component Card Thành Viên ---
const MemberCard = ({ member }) => {
  const primaryColor = '#198754';
  const secondaryColor = '#ffc107';

  const cardStyle = {
    // GIẢM padding
    padding: '20px', 
    borderRadius: '18px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1), 0 0 0 3px #f0f0f0', 
    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease',
    cursor: 'pointer',
    flex: '1',
    minWidth: '280px',
    maxWidth: '320px',
    margin: '15px', 
    border: 'none',
  };

  const imageStyle = {
    // GIẢM kích thước ảnh
    width: '120px', 
    height: '120px', 
    borderRadius: '50%',
    objectFit: 'cover', 
    marginBottom: '15px',
    border: `4px solid transparent`, // Giảm độ dày viền
    backgroundImage: `linear-gradient(white, white), linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  };

  const nameStyle = {
    margin: '10px 0 5px',
    // GIẢM font tên
    fontSize: '1.5rem', 
    fontWeight: '900',
    color: primaryColor,
  };

  const roleStyle = {
    color: '#6c757d',
    fontWeight: '600',
    marginBottom: '8px',
    // GIẢM font vai trò
    fontSize: '0.9rem', 
  };

  const emailStyle = {
    color: '#495057',
    fontSize: '0.85rem',
    textDecoration: 'none',
  };

  // Logic mới: Lấy tên file thực tế từ AssetMap
  // const fileName = AssetMap[member.anhKey] || "placeholder.png"; 
     const fileName = AssetMap[member.anhKey] || "anh-dai-dien.jpg";
  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1), 0 0 0 3px #f0f0f0';
      }}
    >
      <img 
        // Sử dụng tên file đã được giải quyết
        src={fileName} 
        alt={member.hoten} 
        style={imageStyle} 
        // Fallback placeholder khi ảnh không load được
        onError={(e) => e.target.src = "https://placehold.co/120x120/cccccc/333333?text=2T"} 
      />
      <h3 style={nameStyle}>{member.hoten}</h3>
      <p style={roleStyle}>{member.chucvu}</p>
      <a href={`mailto:${member.email}`} style={emailStyle}>{member.email}</a>
    </div>
  );
};


// --- Component Trang Giới Thiệu Chính ---
const Trang2 = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const primaryColor = '#198754'; // Xanh lá cây đậm
  const secondaryColor = '#ffc107'; // Vàng đậm
  
  const containerStyle = {
    minHeight: "100vh",
    // Giảm padding tổng thể
    padding: "40px 15px", 
    background: 'linear-gradient(135deg, #f4f7f6 0%, #eef0ef 100%)',
    fontFamily: 'Montserrat, sans-serif',
    display: 'flex',
    justifyContent: 'center',
  };

  const contentWrapperStyle = {
    maxWidth: "1000px", // Giảm chiều rộng tối đa một chút
    width: "100%",
  };

  const mainTitleStyle = {
    textAlign: 'center',
    // GIẢM Tiêu đề chính
    fontSize: '3rem', 
    color: primaryColor,
    marginBottom: '8px',
    fontWeight: '900',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  };
  
  const subtitleStyle = {
    textAlign: 'center',
    // GIẢM Tiêu đề phụ
    fontSize: '1.2rem', 
    color: '#6c757d',
    marginBottom: '40px',
    fontWeight: '300',
  };

  const sectionTitleStyle = {
    // GIẢM Tiêu đề phần
    fontSize: '1.8rem', 
    color: '#343a40',
    borderBottom: `3px solid ${secondaryColor}`,
    paddingBottom: '10px',
    marginBottom: '25px',
    marginTop: '40px',
    fontWeight: '700',
  };

  const paragraphStyle = {
    // GIẢM font nội dung
    fontSize: '1rem', 
    lineHeight: '1.7',
    color: '#495057',
    marginBottom: '15px',
    textAlign: 'justify',
  };

  const listStyle = {
    listStyleType: 'none', 
    paddingLeft: '0',
    // GIẢM font nội dung
    fontSize: '1rem', 
  };

  const listItemStyle = {
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'flex-start',
    lineHeight: '1.4',
    color: '#495057',
    backgroundColor: '#ffffff',
    // GIẢM padding item
    padding: '12px', 
    borderRadius: '10px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
    borderLeft: `4px solid ${secondaryColor}`, // Giảm độ dày border
  };

  // Dữ liệu cho phần Tabs
  const tabData = {
    mission: {
      icon: <MissionIcon color={primaryColor} />,
      title: "Sứ Mệnh", // Rút gọn để hiển thị trên tab
      fullTitle: "Sứ Mệnh & Động Lực Phát Triển",
      content: (
        <>
          <p style={paragraphStyle}>
            Xin chào! Tôi là **Nguyễn Thái Tài**, người sáng lập của 2Tfresh Market. Chúng tôi không chỉ bán trái cây, mà còn mang đến cam kết về chất lượng và sự tiện lợi. Với niềm đam mê mang lại những sản phẩm chất lượng và tươi ngon nhất đến tay khách hàng, tôi hy vọng trang web này sẽ là cầu nối giúp bạn dễ dàng lựa chọn và mua sắm các loại trái cây yêu thích.
          </p>
          <p style={paragraphStyle}>
            **Động Lực:** Nhận thấy trái cây là nguồn dinh dưỡng thiết yếu và xu hướng mua sắm trực tuyến ngày càng tăng, chúng tôi quyết định phát triển 2Tfresh Market. Mục tiêu là tạo ra một nền tảng mua sắm trái cây sạch, rõ nguồn gốc, giúp khách hàng tiết kiệm thời gian, đồng thời khuyến khích thói quen ăn uống lành mạnh trong cộng đồng.
          </p>
          
          <h3 style={{...sectionTitleStyle, borderBottom: 'none', fontSize: '1.4rem', marginTop: '25px'}}>Ưu Điểm Vượt Trội</h3>
          <ul style={{...listStyle, display: 'flex', flexWrap: 'wrap', gap: '15px'}}>
              <li style={{...listItemStyle, flex: '1 1 45%', borderLeft: `4px solid ${primaryColor}`}}><FreshIcon color={primaryColor} />**Nguồn gốc rõ ràng:** Cam kết cung cấp trái cây tươi ngon, được kiểm soát chất lượng nghiêm ngặt.</li>
              <li style={{...listItemStyle, flex: '1 1 45%', borderLeft: `4px solid ${primaryColor}`}}><ShieldIcon color={primaryColor} />**Giao diện tối ưu:** Dễ sử dụng, thân thiện và tối ưu trên mọi thiết bị di động.</li>
              <li style={{...listItemStyle, flex: '1 1 45%', borderLeft: `4px solid ${primaryColor}`}}><ClockIcon color={primaryColor} />**Đặt hàng nhanh:** Quy trình đơn giản, giúp khách hàng tiết kiệm tối đa thời gian.</li>
              <li style={{...listItemStyle, flex: '1 1 45%', borderLeft: `4px solid ${primaryColor}`}}><ExchangeIcon color={primaryColor} />**Hỗ trợ nhanh:** Đội ngũ luôn sẵn sàng giải đáp mọi thắc mắc.</li>
            </ul>
        </>
      ),
    },
    features: {
      icon: <FeaturesIcon color={primaryColor} />,
      title: "Chức Năng", // Rút gọn để hiển thị trên tab
      fullTitle: "Các Chức Năng Hiện Tại & Kế Hoạch Tương Lai",
      content: (
        <>
          <h3 style={{...sectionTitleStyle, borderBottom: 'none', fontSize: '1.4rem'}}>Chức Năng Hiện Tại</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}><FreshIcon color={primaryColor} />Hiển thị danh mục trái cây chi tiết theo mùa, xuất xứ, giá cả, và chất lượng.</li>
            <li style={listItemStyle}><CartIcon color={primaryColor} />Hệ thống giỏ hàng thông minh và hỗ trợ thanh toán linh hoạt (COD, chuyển khoản).</li>
            <li style={listItemStyle}><InfoIcon color={primaryColor} />Cung cấp kiến thức về lợi ích sức khỏe và hướng dẫn bảo quản cho từng loại trái cây.</li>
            <li style={listItemStyle}><GiftIcon color={primaryColor} />Hệ thống thông báo và ưu đãi cho các chương trình khuyến mãi.</li>
          </ul>

          <h3 style={{...sectionTitleStyle, borderBottom: 'none', fontSize: '1.4rem', marginTop: '25px'}}>Kế Hoạch Cải Thiện Trong Tương Lai</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}><CartIcon color={secondaryColor} />Mở rộng sản phẩm sang nước ép trái cây tươi, sinh tố đóng chai, và combo dinh dưỡng.</li>
            <li style={listItemStyle}><ClockIcon color={secondaryColor} />Tích hợp hệ thống giao hàng siêu tốc (Express Delivery) trong vòng 2 giờ cho nội thành.</li>
            <li style={listItemStyle}><MobileIcon color={secondaryColor} />Phát triển ứng dụng di động riêng để tối ưu hóa trải nghiệm đặt hàng và theo dõi đơn hàng.</li>
            <li style={listItemStyle}><ShieldIcon color={secondaryColor} />Liên tục cải thiện hiệu suất website và trải nghiệm tương tác để mua sắm trơn tru nhất.</li>
          </ul>
        </>
      ),
    },
    policy: {
      icon: <PolicyIcon color={primaryColor} />,
      title: "Chính Sách", // Rút gọn để hiển thị trên tab
      fullTitle: "Chính Sách Mua Hàng & Đổi Trả",
      content: (
        <>
          <h3 style={{...sectionTitleStyle, borderBottom: 'none', fontSize: '1.4rem'}}>1. Chính Sách Mua Hàng và Thanh Toán</h3>
          <div style={{...listItemStyle, borderLeft: `4px solid #007bff`, display: 'block'}}>
            <p style={{fontWeight: '600', color: '#007bff', fontSize: '1rem'}}>Quy trình đặt hàng:</p>
            <ul style={{listStyleType: 'decimal', paddingLeft: '25px', fontSize: '0.9rem', marginTop: '8px'}}>
              <li>Chọn sản phẩm và thêm vào giỏ hàng.</li>
              <li>Điền thông tin giao hàng (Tên, Địa chỉ, SĐT).</li>
              <li>Chọn phương thức thanh toán (COD, Chuyển khoản ngân hàng).</li>
              <li>Xác nhận đơn hàng và nhận thông báo.</li>
            </ul>
            <p style={{fontWeight: '600', color: '#007bff', marginTop: '12px', fontSize: '1rem'}}>Thanh toán:</p>
            <p style={{fontSize: '0.9rem'}}>Chúng tôi chấp nhận thanh toán khi nhận hàng (COD) và chuyển khoản ngân hàng. Thông tin chuyển khoản sẽ được cung cấp khi xác nhận đơn hàng.</p>
          </div>

          <h3 style={{...sectionTitleStyle, borderBottom: 'none', fontSize: '1.4rem', marginTop: '25px'}}>2. Chính Sách Đổi Trả và Hoàn Tiền</h3>
          <div style={{...listItemStyle, borderLeft: `4px solid #dc3545`, display: 'block'}}>
            <p style={{fontWeight: '600', color: '#dc3545', fontSize: '1rem'}}>Điều kiện đổi trả:</p>
            <ul style={{listStyleType: 'disc', paddingLeft: '25px', fontSize: '0.9rem', marginTop: '8px'}}>
              <li>Sản phẩm bị dập nát, hư hỏng do quá trình vận chuyển hoặc trước khi giao hàng.</li>
              <li>Giao sai loại trái cây hoặc sai số lượng so với đơn đặt hàng.</li>
              <li>Thời gian yêu cầu đổi trả phải trong vòng **2 giờ** kể từ khi nhận hàng.</li>
              <li>Sản phẩm đã được sử dụng quá 50% hoặc để quá thời gian quy định sẽ không được chấp nhận.</li>
            </ul>
            <p style={{fontWeight: '600', color: '#dc3545', marginTop: '12px', fontSize: '1rem'}}>Quy trình:</p>
            <p style={{fontSize: '0.9rem'}}>Khách hàng vui lòng chụp ảnh sản phẩm lỗi và liên hệ ngay với hotline/email hỗ trợ. Chúng tôi sẽ tiến hành xác minh và gửi sản phẩm thay thế hoặc hoàn tiền trong vòng 24 giờ.</p>
            <p style={{fontWeight: '600', color: '#dc3545', marginTop: '12px', fontSize: '1rem'}}>Lưu ý:</p>
            <p style={{fontSize: '0.9rem'}}>Chúng tôi không áp dụng đổi trả cho các trường hợp sản phẩm đã được sử dụng quá 50% hoặc để quá thời gian quy định.</p>
          </div>
        </>
      ),
    },
  };

  // Style cho Tab Menu
  const tabMenuStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
    overflow: 'hidden',
  };

  const tabButtonStyle = (key) => ({
    // GIẢM padding và font tab
    padding: '12px 20px', 
    fontSize: '1rem', 
    fontWeight: '700',
    cursor: 'pointer',
    border: 'none',
    background: activeTab === key ? primaryColor : 'transparent',
    color: activeTab === key ? '#ffffff' : '#343a40',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    '--icon-color': activeTab === key ? 'white' : primaryColor,
  });

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <h1 style={mainTitleStyle}>2Tfresh Market</h1>
        <p style={subtitleStyle}>Chất lượng, Tươi ngon và Tiện lợi là cam kết hàng đầu của chúng tôi.</p>

        {/* --- 1. Thẻ giới thiệu thành viên --- */}
        {/* Do chỉ còn 1 thành viên nên căn giữa */}
        <div style={{
          display: 'flex',
          justifyContent: 'center', 
          marginBottom: '40px',
        }}>
          {founders.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
        
        <h2 style={{...sectionTitleStyle, textAlign: 'center', marginTop: '30px'}}>Thông Tin Chi Tiết</h2>

        {/* --- 2. Tab Navigation --- */}
        <div style={tabMenuStyle}>
          {Object.keys(tabData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{...tabButtonStyle(key), ...{
                // Simple hover effect using onMouseEnter/onMouseLeave
                backgroundColor: activeTab === key ? primaryColor : 'transparent',
              }}}
              onMouseEnter={(e) => {
                if (key !== activeTab) e.currentTarget.style.backgroundColor = '#f0f0f0';
              }}
              onMouseLeave={(e) => {
                if (key !== activeTab) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {tabData[key].icon}
              {/* SỬA LỖI: Hiển thị trường 'title' thay vì chỉ lấy từ đầu tiên */}
              {tabData[key].title} 
            </button>
          ))}
        </div>

        {/* --- 3. Tab Content --- */}
        <div style={{
          // GIẢM padding content
          padding: '30px', 
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
          borderTop: `4px solid ${secondaryColor}`,
        }}>
          {/* Render content based on activeTab state */}
          {tabData[activeTab] && tabData[activeTab].content}
        </div>
        
        <p style={{textAlign: 'center', color: '#6c757d', marginTop: '30px', fontSize: '0.85rem'}}>
            Cảm ơn quý khách đã tin tưởng và lựa chọn 2Tfresh Market!
        </p>

      </div>
    </div>
  );
};

export default Trang2;