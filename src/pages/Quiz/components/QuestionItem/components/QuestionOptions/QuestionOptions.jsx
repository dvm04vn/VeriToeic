import styles from "./QuestionOptions.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function QuestionOptions({ questionId, options = [], correctAnswer }) {
  if (!Array.isArray(options) || options.length === 0) {
    return (
      <div className={cx("no-options")}>Không có đáp án nào để hiển thị.</div>
    );
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("options")}>
        {options.map((opt, index) => (
          <div key={index} className={cx("option")}>
            <input
              type="radio"
              name={questionId}
              value={index}
              id={`${questionId}-${index}`}
              className={cx("radio-input")}
            />
            <label
              htmlFor={`${questionId}-${index}`}
              className={cx("radio-label")}
            >
              {String.fromCharCode(65 + index)}. {opt} {/* A, B, C, D */}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionOptions;