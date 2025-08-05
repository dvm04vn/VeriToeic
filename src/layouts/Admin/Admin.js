import styles from "./Admin.module.scss";
import classNames from "classnames/bind";
import SideBar from "./components/SideBar";

const cx = classNames.bind(styles);

function Admin({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar")}>
        <SideBar />
      </div>
      <div className={cx("container")}>{children}</div>
    </div>
  );
}

export default Admin;
