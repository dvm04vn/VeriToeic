import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTopics } from "../../services/topic.service";
import styles from "./Topic.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Topic() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await getAllTopics();
        setTopics(response);
      } catch (err) {
        console.error(err);
        setError("❌ Lỗi khi tải danh sách chủ đề.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading)
    return <p className="loading">🔄 Đang tải danh sách chủ đề...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("topic-title")}>📚 Danh sách Đề thi TOEIC</h2>

      {topics.map((topic) => (
        <div className={cx('content')}>
          <h3>{topic.part}</h3> 
          <Link
            key={topic._id}
            to={`/quiz/${topic.slug}`}
            className={cx("topic-iteam")}
          >
            <h3>{topic.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Topic;
