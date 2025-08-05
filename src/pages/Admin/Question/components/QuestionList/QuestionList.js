import styles from "./QuestionList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function QuestionList({ questions, onEdit, onDelete }) {
  if (!questions.length) {
    return <p className={cx("empty")}>Chưa có câu hỏi nào.</p>;
  }

  return (
    <div className={cx("list")}>
      {questions.map((q, index) => (
        <div key={q._id || index} className={cx("question-item")}>
          <div className={cx("info")}>
            <h4>{index + 1}. {q.questionText}</h4>

            {q.imageUrl && (
              <img src={q.imageUrl} alt="Hình minh hoạ" className={cx("media")} />
            )}

            {q.audioUrl && (
              <audio controls src={q.audioUrl} className={cx("media")}></audio>
            )}

            <ul className={cx("options")}>
              {q.options.map((opt, idx) => (
                <li
                  key={idx}
                  className={cx({ correct: idx === q.correctAnswer })}
                >
                  {String.fromCharCode(65 + idx)}. {opt}
                </li>
              ))}
            </ul>
          </div>

          <div className={cx("actions")}>
            <button className={cx("btn", "edit")} onClick={() => onEdit(q)}>Sửa</button>
            <button className={cx("btn", "delete")} onClick={() => onDelete(q._id)}>Xoá</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
