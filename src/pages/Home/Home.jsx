import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const FEATURES = [
    {
        title: 'Luyện tập theo chủ đề',
        description:
            'Ôn luyện câu hỏi TOEIC được chia theo từng chủ đề giúp bạn học có định hướng hơn.',
        icon: '📚',
    },
    {
        title: 'Làm đề thi online',
        description:
            'Thực hành các bài test TOEIC trực tuyến để làm quen với cấu trúc đề thi thực tế.',
        icon: '📝',
    },
    {
        title: 'Theo dõi kết quả',
        description:
            'Xem lại kết quả đã luyện tập để biết điểm mạnh, điểm yếu và cải thiện từng ngày.',
        icon: '📊',
    },
];

const LEARNING_STEPS = [
    {
        number: '01',
        title: 'Chọn chủ đề',
        description:
            'Bắt đầu với các topic TOEIC quen thuộc như công việc, du lịch, email, họp hành.',
    },
    {
        number: '02',
        title: 'Luyện câu hỏi',
        description:
            'Trả lời từng câu hỏi, ghi nhớ từ vựng và cách dùng trong ngữ cảnh thực tế.',
    },
    {
        number: '03',
        title: 'Kiểm tra kết quả',
        description:
            'Xem lại đáp án, kết quả luyện tập và tiếp tục cải thiện kỹ năng.',
    },
];

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <section className={cx('hero')}>
                    <div className={cx('hero-content')}>
                        <span className={cx('label')}>
                            VeriToeic Learning Platform
                        </span>

                        <h1>
                            Học TOEIC dễ hiểu hơn, luyện tập đều đặn hơn cùng{' '}
                            <span>VeriToeic</span>
                        </h1>

                        <p>
                            VeriToeic giúp bạn luyện tập tiếng Anh TOEIC theo
                            chủ đề, làm đề thi online và theo dõi kết quả học
                            tập một cách rõ ràng, dễ sử dụng.
                        </p>

                        <div className={cx('hero-actions')}>
                            <Link to="/topic" className={cx('primary-btn')}>
                                Bắt đầu luyện tập
                            </Link>

                            <Link to="/test" className={cx('secondary-btn')}>
                                Làm đề online
                            </Link>
                        </div>
                    </div>

                    <div className={cx('hero-card')}>
                        <div className={cx('card-header')}>
                            <span>TOEIC Practice</span>
                            <strong>Online</strong>
                        </div>

                        <div className={cx('score-box')}>
                            <p>Điểm mục tiêu</p>
                            <h2>650+</h2>
                        </div>

                        <div className={cx('progress-list')}>
                            <div className={cx('progress-item')}>
                                <span>Từ vựng</span>
                                <strong>80%</strong>
                            </div>

                            <div className={cx('progress-bar')}>
                                <span style={{ width: '80%' }}></span>
                            </div>

                            <div className={cx('progress-item')}>
                                <span>Luyện đề</span>
                                <strong>65%</strong>
                            </div>

                            <div className={cx('progress-bar')}>
                                <span style={{ width: '65%' }}></span>
                            </div>

                            <div className={cx('progress-item')}>
                                <span>Theo dõi kết quả</span>
                                <strong>90%</strong>
                            </div>

                            <div className={cx('progress-bar')}>
                                <span style={{ width: '90%' }}></span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={cx('features')}>
                    <div className={cx('section-heading')}>
                        <span>Tính năng chính</span>
                        <h2>Học TOEIC theo cách rõ ràng và dễ theo dõi</h2>
                    </div>

                    <div className={cx('feature-grid')}>
                        {FEATURES.map((feature) => (
                            <div
                                className={cx('feature-card')}
                                key={feature.title}
                            >
                                <div className={cx('feature-icon')}>
                                    {feature.icon}
                                </div>

                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={cx('learning')}>
                    <div className={cx('section-heading')}>
                        <span>Lộ trình sử dụng</span>
                        <h2>Bắt đầu học TOEIC chỉ với 3 bước</h2>
                    </div>

                    <div className={cx('step-list')}>
                        {LEARNING_STEPS.map((step) => (
                            <div className={cx('step-card')} key={step.number}>
                                <span className={cx('step-number')}>
                                    {step.number}
                                </span>

                                <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={cx('cta')}>
                    <div>
                        <h2>Sẵn sàng bắt đầu luyện TOEIC?</h2>
                        <p>
                            Chọn một chủ đề, làm bài luyện tập và theo dõi kết
                            quả học tập của bạn ngay hôm nay.
                        </p>
                    </div>

                    <Link to="/topic" className={cx('cta-btn')}>
                        Luyện tập ngay
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default Home;
