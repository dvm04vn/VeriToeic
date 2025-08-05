import { useEffect, useState } from 'react';
import styles from './Questions.module.scss';
import classNames from 'classnames/bind';

import QuestionForm from './components/QuestionForm';
import QuestionList from './components/QuestionList';

import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuizByTopicId,
} from '../../../services/questionsService';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Questions() {
  const {slug} = useParams();
  const [questions, setQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchQuestions();
    }
  }, [slug]);

  const fetchQuestions = async () => {
    try {
      const data = await getQuizByTopicId(slug);
      setQuestions(data);
    } catch (error) {
      console.error('❌ Lỗi khi lấy câu hỏi:', error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingQuestion) {
        await updateQuestion(editingQuestion._id, formData);
      } else {
        await createQuestion(formData);
      }
      setEditingQuestion(null);
      fetchQuestions();
    } catch (error) {
      console.error('❌ Lỗi khi gửi câu hỏi:', error);
    }
  };

  const handleEdit = (question) => {
    setEditingQuestion(question);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xoá câu hỏi này không?')) {
      try {
        await deleteQuestion(id);
        fetchQuestions();
      } catch (error) {
        console.error('❌ Lỗi khi xoá câu hỏi:', error);
      }
    }
  };

  return (
    <div className={cx('wrapper')}>
      <h2>Quản lý Câu hỏi - {slug}</h2>
      <QuestionForm
        onSubmit={handleSubmit}
        initialData={editingQuestion}
        topicSlug={slug} // ✅ Sửa tại đây
      />
      <QuestionList
        questions={questions}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Questions;
