import { useRef } from "react";
import QuestionItem from "../QuestionItem";
import styles from "./QuizForm.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button"; // Giả định bạn để Button ở src/components/ui/

const cx = classNames.bind(styles);

function QuizForm({ questions = [], onSubmit }) {
  const formRef = useRef(null);

  return (
    <div className={cx("wrapper")}>
      <form
        ref={formRef}
        className={cx("quiz-form")}
        onSubmit={onSubmit}
        autoComplete="off"
      >
        {questions.length === 0 ? (
          <p className={cx("no-questions")}>
            Không có câu hỏi nào trong chủ đề này.
          </p>
        ) : (
          questions.map((question, index) => (
            <QuestionItem key={question._id} question={question} index={index} />
          ))
        )}

        <div className={cx("submit-wrapper")}>
          <Button primary text type="submit">Nộp bài</Button>
        </div>
      </form>
    </div>
  );
}

export default QuizForm;
