import styles from './Test.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const categories = [
  "Tất cả", "IELTS Academic", "IELTS General", "TOEIC",
  "Digital SAT", "TOPIK II", "TOPIK I", "Tiếng Anh THPTQG",
   "SAT", "ACT"
]

const mockTests = [
  { title: 'Đề thi IELTS Academic 2023', subject: 'IELTS Academic', questionCount: 40 },
  { title: 'Đề TOEIC Listening & Reading', subject: 'TOEIC', questionCount: 100 },
  { title: 'Đề HSK 4 tổng hợp', subject: 'HSK 4', questionCount: 120 },
  { title: 'SAT Math Practice Test', subject: 'SAT', questionCount: 50 },
  { title: 'Tiếng Anh THPTQG', subject: 'SAT', questionCount: 50 },
  { title: 'TOEIC', subject: 'SAT', questionCount: 50 }
]

function Test() {
  return (
    <div className={cx('testContainer')}>
      <h1 className={cx('title')}>Thư viện đề thi</h1>

      <div className={cx('filterBar')}>
        {categories.map((cat, idx) => (
          <span key={idx} className={cx('filterItem', { active: idx === 0 })}>
            {cat}
          </span>
        ))}
      </div>

      <div className={cx('searchBar')}>
        <input type="text" placeholder="Nhập từ khoá: tên sách, dạng câu hỏi..." />
        <button>Tìm kiếm</button>
      </div>

      <div className={cx('cardList')}>
        {mockTests.map((test, idx) => (
          <div key={idx} className={cx('card')}>
            <h3>{test.title}</h3>
            <p>Môn: {test.subject}</p>
            <p>Số câu hỏi: {test.questionCount}</p>
            <button>Làm bài</button>
          </div>
        ))}
      </div>

      <div className={cx('pagination')}>
        <button className={cx('active')}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
  )
}

export default Test
