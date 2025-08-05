import { useNavigate } from "react-router-dom";
import styles from "./TopicList.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../../components/Button";

const cx = classNames.bind(styles);

function TopicList({ topics, onEdit, onDelete }) {
    const navigate = useNavigate();

    return (
        <div className={cx("list")}>
            {topics.map((topic) => (
                <div key={topic._id} className={cx("item")}>
                    <div className={cx("info")}>
                        <h3>{topic.name}</h3>
                        <p>{topic.description}</p>
                        <span className={cx("part")}>📌 {topic.part}</span>
                    </div>
                    <div className={cx("actions")}>
                        <Button className={cx("add")} onClick={() => navigate(`/admin/${topic.slug}/add-questions`)}>
                            Thêm câu hỏi
                        </Button>
                        <Button className={cx("edit")} onClick={() => onEdit(topic)}>Sửa</Button>
                        <Button className={cx("delete")} onClick={() => onDelete(topic._id)}>Xoá</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TopicList;