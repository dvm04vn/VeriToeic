import classNames from "classnames/bind";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./Success.module.scss";
import { IconNavigation, LottieLoading } from "../../components/Icon";
import { successGG } from "../../services/successService";

const cx = classNames.bind(styles);

function Success() {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // Xóa '#_=_' Trường hợp Facebook readirect
    if(window.location.hash === "#_=_"){
      window.history.replaceState(null, "", window.location.href.split("#")[0]);
    }
    if (params) {
      const _id = params.id;
      fetchAPISuccessGG({ _id });
    }
  }, [params]);
  // fetch api
  const fetchAPISuccessGG = async ({ _id }) => {
    const result = await successGG({ _id });
    console.log("Kết quả từ successGG: ", result);
    const token = result?.meta?.token;
    if (token) {
      localStorage.setItem("token", token);
      // ⏳ Chờ 5 giây rồi chuyển hướng
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 6000);
    } else {
      console.log("Không có token");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <h1>VeriToeic</h1>
        </div>
        <div className={cx("body")}>
          <LottieLoading
            width="35rem"
            height="35rem"
            className={cx("Icon")}
            fill="#fe2c55"
          />
          <div className={cx("content")}>Đang tải dữ liệu......</div>
          <div className={cx("loading")}>
            <div className={cx("layout3")}>
              <div className={cx("layout3-1")}></div>
              <div className={cx("layout3-2")}></div>
              <div className={cx("layout3-3")}></div>
              <div className={cx("layout3-4")}></div>
              <div className={cx("layout3-5")}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
