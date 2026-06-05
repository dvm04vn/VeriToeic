import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../../components/Button";

import Avatar from "./components/Avatar";
import Image from "~/components/Image";
import styles from "./Header.module.scss";
import Mylearn from "./components/Mylearn";
import { IoNotifications } from "react-icons/io5";
import classNames from "classnames/bind";
import Notification from "./components/notification";
import { user } from "../../../services/usersService";
import images from "~/assets";

const cx = classNames.bind(styles);

const defaultFN = () => {};

function Header({ handleAuth = defaultFN }) {
  const [userResult, setUserResult] = useState(null);
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsToken(true);
      const fetchUser = async () => {
        const res = await user(); // gọi API /user/profile-me
        if (res) {
          setUserResult(res);
        }
      };
      fetchUser();
    } else {
      setIsToken(false);
    }
  }, []);

  return (
    <div className={cx("header-layout")}>
      <header className={cx("header")}>
        {/* Logo */}
        <div className={cx("logo")}>
          <Link to="/">
            <img
              className={cx("img-logo")}
              src={images.Logo}
              alt="Logo Veri-TOEIC"
            />
          </Link>
        </div>
        {/* <h3 className={cx("veri")}>Veri-Toeic</h3> */}

        {/* Navigation */}
        <nav className={cx("menu")}>
          <ul>
            {[
              { path: "/topic", label: "Luyện tập theo chủ đề" },
              { path: "/answers", label: "Kết quả đã luyện tập" },
              { path: "/test", label: "Đề thi online" },
            ].map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    cx("menu__link", { "menu__link--active": isActive })
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className={cx("action")}>
          {isToken ? (
            <div className={cx("portal")}>
              <div className={cx("myLearn")}>
                <Mylearn>
                  <button className={cx("myLearn-btn")}>
                    Khóa Học Của Tôi
                  </button>
                </Mylearn>
              </div>
              <div className={cx("notification")}>
                <Notification>
                  <button className={cx("notification-btn")}>
                    <IoNotifications />
                  </button>
                </Notification>
              </div>
              <div className={cx("avatar")}>
                <Avatar userResult={userResult}>
                  <button className={cx("avatar-btn")}>
                    <Image
                      className={cx("avatar-img")}
                      src={userResult?.profile?.avatar || images.noImage}
                      alt="avatar"
                    />
                  </button>
                </Avatar>
              </div>
            </div>
          ) : (
            <>
              <Button outlineText onClick={() => handleAuth(false)}>
                Đăng Ký
              </Button>
              <Button primary text onClick={() => handleAuth(true)}>
                Đăng Nhập
              </Button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
