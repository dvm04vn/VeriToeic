import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";

import { login } from "../../../services/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email không hợp lệ.");
      return;
    }

    setLoading(true);
    try {
      const result = await login(email.toLowerCase(), password);
      if (result?.meta?.token) {
        toast.success("🎉 Đăng nhập thành công!");
        localStorage.setItem("token", result.meta.token);
        // localStorage.setItem("user", JSON.stringify(res.user));
        window.location.reload();

        // Chuyển hướng sau khi đăng nhập (nếu cần)
        // navigate("/profile");
      } else {
        toast.error("Đăng nhập thất bại!");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Đăng nhập thất bại.");
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
              <span>Đăng nhập</span>
              <p>Chào mừng bạn quay trở lại</p>
            </div>
            <div className={cx("input-box")}>
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
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginUser;
