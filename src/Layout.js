import "./assets/css/main.css";
import anhlogo from "./assets/images//logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
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
              <img src={anhlogo} width="100" />
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
                <li>
                  <a href="/#" className="menu-item">
                    Trang Chủ
                  </a>
                </li>
                <li>
                  <a href="/trang1" className="menu-item">
                    Sản Phẩm
                  </a>
                  <ul class="submenu">
                    <li>
                      <a href="#traicaytuoi">Trái cây tươi</a>
                    </li>
                    <li>
                      <a href="#traicaycatsan">Trái cây cắt sẵn</a>
                    </li>
                    <li>
                      <a href="#goiquatangtraicay">Gói quà tặng trái cây </a>
                    </li>
                    <li>
                      <a href="#nuoceptraicay">Nước ép trái cây</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/admin/products" className="menu-item">
                    Giới Thiệu
                  </a>
                </li>
                <li>
                  <a href="/admin/products" className="menu-item">
                    Liên Hệ
                  </a>
                </li>
                <li>
                  <a href="/admin/products" className="menu-item">
                    Quản Trị
                  </a>
                </li>
              </ul>
              <div id="divtimkiem" style={{ width: "300px" }}>
                Phần tìm kiếm
              </div>
            </div>

            <div className="menubar-right">
              {user ? (
                <>
                  <span className="username">👤 {user.username}</span>
                  <button className="logout-btn" onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </>
              ) : (
                <a href="/login" className="login-link">
                  Đăng nhập
                </a>
              )}
            </div>
          </div>
        </div>
      </header>
      <body>
        <div id="container" class="container">
          <Outlet />
        </div>
      </body>
      <footer></footer>
    </html>
  );
};

export default Layout;
