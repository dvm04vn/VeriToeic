import styles from "./TopicItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TopicItem({ topic, onEdit, onDelete }) {
  return (
    <div className={cx("item")}>
      <div className={cx("info")}>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </div>
      <div className={cx("actions")}>
        <button onClick={onEdit} className={cx("edit")}>
          ✏️ Sửa
        </button>
        <button onClick={onDelete} className={cx("delete")}>
          🗑️ Xoá
        </button>
      </div>
    </div>
  );
}

export default TopicItem;
