// src/pages/Admin/Topics/Topics.jsx
import { useEffect, useState } from "react";
import TopicForm from "./components/TopicForm";
import TopicList from "./components/TopicList";
import styles from "./Topics.module.scss";
import classNames from "classnames/bind";
import { toast } from "react-toastify";
import {
  getAllTopics,
  createTopic,
  updateTopic,
  deleteTopic,
} from "../../../services/topicService";

const cx = classNames.bind(styles);

function Topics() {
  const [topics, setTopics] = useState([]);
  const [editingTopic, setEditingTopic] = useState(null);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const data = await getAllTopics();
      setTopics(data);
    } catch (error) {
      console.error("❌ Lỗi khi tải topic:", error);
      toast.error("Không thể tải danh sách chủ đề.");
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingTopic) {
        await updateTopic(editingTopic._id, formData);
        toast.success("✅ Cập nhật chủ đề thành công!");
      } else {
        await createTopic(formData);
        toast.success("✅ Thêm chủ đề thành công!");
      }

      setEditingTopic(null);
      fetchTopics();
    } catch (error) {
      console.error("❌ Lỗi khi gửi chủ đề:", error);
      toast.error("Không thể gửi chủ đề.");
    }
  };

  const handleEdit = (topic) => setEditingTopic(topic);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xoá chủ đề này không?")) {
      try {
        await deleteTopic(id);
        toast.success("🗑️ Xoá chủ đề thành công");
        fetchTopics();
      } catch (err) {
        console.error("❌ Lỗi khi xoá:", err);
        toast.error("Không thể xoá chủ đề.");
      }
    }
  };

  return (
    <div className={cx("wrapper")}>
      <h2>Quản lý Chủ đề TOEIC</h2>
      <TopicForm onSubmit={handleSubmit} initialData={editingTopic} />
      <TopicList topics={topics} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default Topics;
