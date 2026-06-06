import { useEffect, useState } from "react";
import styles from "./Security.module.scss";
import classNames from "classnames/bind";
import { getProfile } from "../../../../services/profile.service";

const cx = classNames.bind(styles);
const LIST_INFO = {
  title: {
    title: "Đăng nhập & bảo mật",
    content: "Quản lý mật khẩu và xác minh 2 bước",
  },
  content: [
    {
      key: "email",
      content: "",
      title: "Email",
      placeholder: "Nhập email của bạn",
      titleOverlay: "Xác minh email",
      contentOverlay: "Để tạo mật khẩu, hãy xác minh email của bạn trước",
    },
  ],
};
function Security() {
  const [listInfo, setListInfo] = useState(LIST_INFO);

  useEffect(() => {
    fetchAPI();
  })
  const fetchAPI = async () => {
      const res = await getProfile();

      setListInfo((prev) => ({
        ...prev,
        content: prev.content.map((item) => {
          if(item.key === 'email'){
            return {
              ...item,
              content: res?.data.email
            };
          }
          return item;
        })
      }))
      console.log()
  }


  return (
    <div className={cx("wrapper")}>
      <div className={cx('header')}>
          <div className={cx('title')}>
            <h3>Mật khẩu và bảo mật</h3>
            <p>Quản lý mật khẩu và cài đặt bảo mật</p>
          </div>
      </div>
      <div className={cx('inner')}>

      </div>
    </div>
  );
}

export default Security;
