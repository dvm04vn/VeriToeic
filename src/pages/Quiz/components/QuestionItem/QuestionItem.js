import styles from "./QuestionItem.module.scss";
import classNames from "classnames/bind";
import QuestionMedia from "./components/QuestionMedia";
import QuestionOptions from "./components/QuestionOptions";

const cx = classNames.bind(styles);

function QuestionItem({ question, index }) {
  return (
    <div className={cx("question-item")}>
      <p className={cx("question-text")}>
        Câu {index + 1}: {question.questionText}
      </p>

      <QuestionMedia image={question.image} audio={question.audio} />

      <QuestionOptions
        questionId={question._id}
        options={question.options}
        correctAnswer={question.correctAnswer}
      />
    </div>
  );
}

export default QuestionItem;
