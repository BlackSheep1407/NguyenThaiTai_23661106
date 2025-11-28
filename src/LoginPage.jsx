// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import anhlogo1 from "./assets/images/keylogin.png";
// import "./assets/css/login.css";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   // đăng ký
//   const [isRegister, setIsRegister] = useState(false);
//   const [email, setEmail] = useState(""); // dùng cho đăng ký

//   // const handleLogin = (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   setTimeout(() => {
//   //     if (username.trim() && password.trim()) {
//   //       localStorage.setItem(
//   //         "user",
//   //         JSON.stringify({ username, role: "user" })
//   //       );
//   //       alert("✅ Đăng nhập thành công!");
//   //       navigate("/");
//   //     } else {
//   //       alert("❌ Vui lòng nhập đầy đủ thông tin!");
//   //     }
//   //     setLoading(false);
//   //   }, 1000);
//   // };
//   const handleAuth = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     setTimeout(() => {
//       if (username.trim() && password.trim() && (!isRegister || email.trim())) {
//         if (isRegister) {
//           // Đăng ký
//           localStorage.setItem(
//             "user",
//             JSON.stringify({ username, email, role: "user" })
//           );
//           alert("✅ Đăng ký thành công!");
//         } else {
//           // Đăng nhập
//           localStorage.setItem(
//             "user",
//             JSON.stringify({ username, role: "user" })
//           );
//           alert("✅ Đăng nhập thành công!");
//         }
//         navigate("/");
//       } else {
//         alert("❌ Vui lòng nhập đầy đủ thông tin!");
//       }
//       setLoading(false);
//     }, 1000);
//   };

//   const handleSocialLogin = (provider) => {
//     alert(`Đăng nhập với ${provider} (demo)`);
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-card">
//         <img src={anhlogo1} alt="Logo" className="login-logo" />

//         <h2 className="login-title">Đăng nhập vào tài khoản</h2>
//         <p className="login-subtitle">Sử dụng tài khoản của bạn để tiếp tục</p>

//         <form onSubmit={handleAuth} className="login-form">
//           <div className="form-group">
//             <label>Tên đăng nhập</label>
//             <input
//               type="text"
//               placeholder="Nhập tên đăng nhập..."
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <label>Mật khẩu</label>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu..."
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           {isRegister && (
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 placeholder="Nhập email..."
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           )}
//           {/* <button type="submit" disabled={loading}>
//             {loading ? "⏳ Đang xử lý..." : "Đăng nhập"}
//           </button> */}
//           <button type="submit" disabled={loading}>
//             {loading ? "⏳ Đang xử lý..." : isRegister ? "Đăng ký" : "Đăng nhập"}
//           </button>

//         </form>

//         {/* <p className="register-link">
//           Bạn chưa có tài khoản? <a href="#">Tạo tài khoản mới</a>
//         </p> */}
//         {/* ← đặt switch-auth ở đây */}
//         <div className="switch-auth register-link">
//           {isRegister ? (
//             <p>
//               Bạn đã có tài khoản?{" "}
//               <span onClick={() => setIsRegister(false)}>Đăng nhập</span>
//             </p>
//           ) : (
//             <p>
//               Bạn chưa có tài khoản?{" "}
//               <span onClick={() => setIsRegister(true)}>Đăng ký</span>
//             </p>
//           )}
//         </div>

//         <div className="social-login">
//           <button className="social-btn google">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
//               alt="Google"
//             />
//             <span>Đăng nhập Google</span>
//           </button>

//           <button className="social-btn facebook">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
//               alt="Facebook"
//             />
//             <span>Facebook</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// hash mật khẩu : npm install crypto-js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import sha256 from "crypto-js/sha256";
import "./assets/css/login.css";
import anhlogo1 from "./assets/images/keylogin.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  // --- Xử lý đăng ký / đăng nhập ---
  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    const passwordHash = sha256(password).toString();

    if (!username || !password || (isRegister && (!fullname || !email))) {
      alert("❌ Vui lòng nhập đầy đủ thông tin!");
      setLoading(false);
      return;
    }

    try {
      if (isRegister) {
        // --- Đăng ký ---
        const { data, error } = await supabase.from("tbl_user").insert([
          {
            username,
            password_hash: passwordHash,
            fullname,
            email,
          },
        ]);
        if (error) throw error;
        alert("✅ Đăng ký thành công!");
        setIsRegister(false); // chuyển sang login
      } else {
        // --- Đăng nhập ---
        const { data, error } = await supabase
          .from("tbl_user")
          .select("*")
          .eq("username", username)
          .eq("password_hash", passwordHash)
          .single();

        if (error || !data) {
          alert("❌ Tên đăng nhập hoặc mật khẩu không đúng!");
        } else {
          alert("✅ Đăng nhập thành công!");
          localStorage.setItem(
            "user",
            JSON.stringify({ username: data.username, fullname: data.fullname })
          );
          navigate("/");
        }
      }
    } catch (err) {
      console.error(err);
      alert("❌ Lỗi server: " + err.message);
    }

    setLoading(false);
  };

  // --- Đăng nhập bằng Google / Facebook ---
  const handleSocialLogin = async (provider) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) alert("❌ Lỗi OAuth: " + error.message);
    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img src={anhlogo1} alt="Logo" className="login-logo" />
        <h2 className="login-title">
          {isRegister ? "Đăng ký tài khoản" : "Đăng nhập vào tài khoản"}
        </h2>
        <p className="login-subtitle">
          {isRegister
            ? "Tạo tài khoản mới để sử dụng"
            : "Sử dụng tài khoản của bạn để tiếp tục"}
        </p>

        <form onSubmit={handleAuth} className="login-form">
          {isRegister && (
            <>
              <div className="form-group">
                <label>Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên..."
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Nhập email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading
              ? "⏳ Đang xử lý..."
              : isRegister
              ? "Đăng ký"
              : "Đăng nhập"}
          </button>
        </form>

        <div className="switch-auth">
          {isRegister ? (
            <p>
              Bạn đã có tài khoản?{" "}
              <span onClick={() => setIsRegister(false)}>Đăng nhập</span>
            </p>
          ) : (
            <p>
              Bạn chưa có tài khoản?{" "}
              <span onClick={() => setIsRegister(true)}>Đăng ký</span>
            </p>
          )}
        </div>

        <div className="social-login">
          <button
            className="social-btn google"
            onClick={() => handleSocialLogin("google")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
              alt="Google"
            />
            <span>Đăng nhập Google</span>
          </button>

          <button
            className="social-btn facebook"
            onClick={() => handleSocialLogin("facebook")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
            />
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
