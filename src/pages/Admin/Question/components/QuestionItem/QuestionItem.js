import styles from './QuestionItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function QuestionItem({ question, index, onEdit, onDelete }) {
  return (
    <div className={cx('item')}>
      <div className={cx('header')}>
        <h4>
          {index + 1}. {question.questionText}
        </h4>
        <div className={cx('actions')}>
          <button className={cx('btn', 'edit')} onClick={() => onEdit(question)}>
            ✏️ Sửa
          </button>
          <button className={cx('btn', 'delete')} onClick={() => onDelete(question._id)}>
            🗑️ Xoá
          </button>
        </div>
      </div>

      {question.imageUrl && (
        <img src={question.imageUrl} alt="Hình minh hoạ" className={cx('media')} />
      )}
      {question.audioUrl && (
        <audio controls src={question.audioUrl} className={cx('media')}></audio>
      )}

      <ul className={cx('options')}>
        {question.options.map((opt, idx) => (
          <li
            key={idx}
            className={cx({ correct: idx === question.correctAnswer })}
          >
            {String.fromCharCode(65 + idx)}. {opt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionItem;
