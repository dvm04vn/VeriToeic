import classNames from "classnames/bind";
import styles from "./QuizHeader.module.scss";

const cx = classNames.bind(styles);
function QuizHeader({ title, description }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h2 className={cx("title")}>{title || "Đang tải chủ đề..."}</h2>
        {description && <p className={cx("description")}>{description}</p>}
      </div>
    </div>
  );
}

export default QuizHeader;
