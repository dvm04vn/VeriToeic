import { useState, useEffect } from "react";
import styles from "./QuestionForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function QuestionForm({ onSubmit, initialData, topicSlug }) {
  const [questionText, setQuestionText] = useState("");
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  useEffect(() => {
    if (initialData) {
      setQuestionText(initialData.questionText || "");
      setOptions(initialData.options || ["", "", "", ""]);
      setCorrectAnswer(initialData.correctAnswer ?? 0);
      setImage(null); // chỉ chọn lại khi cần
      setAudio(null);
    } else {
      setQuestionText("");
      setOptions(["", "", "", ""]);
      setCorrectAnswer(0);
      setImage(null);
      setAudio(null);
    }
  }, [initialData]);

  const handleOptionChange = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!questionText.trim() || options.some((opt) => !opt.trim())) {
      alert("Vui lòng điền đủ câu hỏi và 4 đáp án.");
      return;
    }

    const basePayload = {
      questionText,
      options,
      correctAnswer,
      topicSlug
    };

    if (!basePayload.topicSlug) {
      alert("thiếu topicSlug");
      return;
    }

    if (image || audio) {
      const formData = new FormData();
      for (const key in basePayload) {
        if (Array.isArray(basePayload[key])) {
          basePayload[key].forEach((opt, i) =>
            formData.append(`options[${i}]`, opt)
          );
        } else {
          formData.append(key, basePayload[key]);
        }
      }
      if (image) formData.append("image", image);
      if (audio) formData.append("audio", audio);

      onSubmit(formData); // POST multipart/form-data
    } else {
      onSubmit(basePayload); // POST JSON
    }
  };

  return (
    <form className={cx("form")} onSubmit={handleSubmit}>
      <h3>{initialData ? "📝 Chỉnh sửa Câu hỏi" : "➕ Thêm Câu hỏi"}</h3>

      <div className={cx("form-group")}>
        <label htmlFor="questionText">Câu hỏi:</label>
        <textarea
          id="questionText"
          rows="3"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Nhập nội dung câu hỏi..."
        />
      </div>

      <div className={cx("form-group")}>
        <label>Hình ảnh (nếu có):</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <div className={cx("form-group")}>
        <label>Audio (nếu có):</label>
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setAudio(e.target.files[0])}
        />
      </div>

      <div className={cx("options-group")}>
        <label>Tuỳ chọn đáp án:</label>
        {options.map((opt, idx) => (
          <div key={idx} className={cx("option-item")}>
            <input
              type="text"
              placeholder={`Đáp án ${idx + 1}`}
              value={opt}
              onChange={(e) => handleOptionChange(e.target.value, idx)}
            />
            <label>
              <input
                type="radio"
                name="correct"
                checked={correctAnswer === idx}
                onChange={() => setCorrectAnswer(idx)}
              />
              Đúng
            </label>
          </div>
        ))}
      </div>

      <button type="submit" className={cx("btn")}>
        {initialData ? "Cập nhật" : "Thêm mới"}
      </button>
    </form>
  );
}

export default QuestionForm;
