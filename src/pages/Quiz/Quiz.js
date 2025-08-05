import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopicById } from "../../services/topicService";
import {
  getQuestionsByTopic,
  getQuizById,
  getQuizByTopicId,
} from "../../services/questionsService";
import { submitResult } from "../../services/answersService";
import { getCookie } from "../../helpers/cookie";

import QuizHeader from "./components/QuizHeader";
import QuizForm from "./components/QuizForm";

import styles from "./Quiz.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Quiz() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(180); // 3 phút

  // Lấy dữ liệu topic và câu hỏi
  useEffect(() => {
    if (slug) {
      fetchData();
    }
  }, [slug]);

  const fetchData = async () => {
    try {
      const topicData = await getTopicById(slug);
      const questionData = await getQuizByTopicId(slug);

      setTopic(topicData);
      setQuestions(questionData);
    } catch (error) {
      console.error("❌ Lỗi khi tải dữ liệu:", error);
    }
  };
  // Đếm ngược thời gian
  useEffect(() => {
    if (timeLeft <= 0 && formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const selectedAnswers = questions.map((q) => ({
      questionId: q.id,
      answer: parseInt(formData.get(q.id)),
    }));

    if (selectedAnswers.some((a) => isNaN(a.answer))) {
      alert("Vui lòng trả lời tất cả câu hỏi trước khi nộp bài.");
      return;
    }

    const payload = {
      userId: getCookie("id"),
      topicId: slug,
      answers: selectedAnswers,
    };

    try {
      const res = await submitResult(payload);
      if (res?.id) {
        navigate(`/result/${res.id}`);
      } else {
        alert("Đã có lỗi xảy ra khi nộp bài.");
      }
    } catch (err) {
      console.error("Lỗi nộp bài:", err);
      alert("Không thể nộp bài. Vui lòng thử lại.");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <QuizHeader title={topic?.name} description={topic?.description} />

        <QuizForm
          questions={questions}
          formRef={formRef}
          onSubmit={handleSubmit}
          timeLeft={timeLeft}
        />
      </div>
    </div>
  );
}

export default Quiz;
