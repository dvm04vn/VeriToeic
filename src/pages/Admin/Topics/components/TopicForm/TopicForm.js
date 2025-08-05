import { useEffect, useState } from "react";
import styles from "./TopicForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TopicForm({ onSubmit, initialData }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [part, setPart] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setPart(initialData.part || "");
    } else {
      setName("");
      setDescription("");
      setPart("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Vui lòng nhập tên chủ đề.");
      return;
    }
    if (!part.trim()) {
      alert("Vui lòng chọn Part.");
      return;
    }

    const formData = {
      name: name.trim(),
      description: description.trim(),
      part: part.trim(),
    };

    onSubmit(formData);
    setName("");
    setDescription("");
    setPart("");
  };

  return (
    <form className={cx("form")} onSubmit={handleSubmit}>
      <h3>{initialData ? "📝 Chỉnh sửa Chủ đề" : "➕ Thêm Chủ đề"}</h3>

      <div className={cx("form-group")}>
        <label htmlFor="name">Tên chủ đề:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ví dụ: Hành động của mắt"
        />
      </div>

      <div className={cx("form-group")}>
        <label htmlFor="description">Mô tả:</label>
        <textarea
          id="description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Giới thiệu ngắn về chủ đề"
        ></textarea>
      </div>

      <div className={cx("form-group")}>
        <label htmlFor="part">Phần thi (Part):</label>
        <select
          id="part"
          value={part}
          onChange={(e) => setPart(e.target.value)}
        >
          <option value="">-- Chọn Part --</option>
          <option value="Part 1">Part 1</option>
          <option value="Part 2">Part 2</option>
          <option value="Part 3">Part 3</option>
          <option value="Part 4">Part 4</option>
          <option value="Part 5">Part 5</option>
          <option value="Part 6">Part 6</option>
          <option value="Part 7">Part 7</option>
        </select>
      </div>

      <button type="submit" className={cx("btn")}>
        {initialData ? "Cập nhật" : "Thêm mới"}
      </button>
    </form>
  );
}

export default TopicForm;
