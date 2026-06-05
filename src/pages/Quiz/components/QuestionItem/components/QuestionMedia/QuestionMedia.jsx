import styles from "./QuestionMedia.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function QuestionMedia({ image, audio }) {
  return (
    <div className={cx("media")}>
      {image && <img src={image} alt="question" className={cx("image")} />}
      {audio && (
        <audio controls className={cx("audio")}>
          <source src={audio} type="audio/mpeg" />
          Trình duyệt của bạn không hỗ trợ audio.
        </audio>
      )}
    </div>
  );
}

export default QuestionMedia;
