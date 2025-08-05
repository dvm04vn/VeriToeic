import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { register } from "../../../services/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

function RegisterUser() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    // Kiểm tra dữ liệu đầu vào
    if (!fullname.trim() || !email.trim() || !password.trim()) {
      toast.error("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email không hợp lệ.");
      return;
    }

    if (/[A-Z]/.test(email)) {
      toast.error("Email không được chứa chữ in hoa.");
      return;
    }

    setLoading(true);
    try {
      const res = await register(fullname.trim(), email.toLowerCase(), password);
      if (res?.error) {
        toast.error(res.message || "Đăng ký thất bại.");
        return;
      }

      toast.success("🎉 Đăng ký thành công!");
      setFullname("");
      setEmail("");
      setPassword("");
      localStorage.setItem("token", res.accessToken);
        localStorage.setItem("user", JSON.stringify(res.user));
      window.location.reload();

      // Chuyển trang sau đăng ký (nếu cần)
      // navigate("/login");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Đăng ký thất bại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={cx("body-wrapper")}>
        <div className={cx("wrapper")}>
          <div className={cx("inner")}>
            <div className={cx("header-form-login")}>
              <span>Đăng ký</span>
              <p>Đăng ký thành viên để nhận nhiều ưu đãi</p>
            </div>
            <div className={cx("input-box")}>
              <div className={cx("form-input")}>
                <label>Họ và tên</label>
                <input
                  placeholder="Nhập họ và tên"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className={cx("form-input")}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Nhập email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={cx("form-input")}>
                <label>Mật khẩu</label>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              className={cx("btn-login")}
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterUser;
