import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '~/assets';

const cx = classNames.bind(styles);

const FOOTER_NAV = [
    {
        to: '/',
        title: 'Trang chủ',
    },
    {
        to: '/topic',
        title: 'Luyện tập theo chủ đề',
    },
    {
        to: '/answers',
        title: 'Kết quả đã luyện tập',
    },
    {
        to: '/test',
        title: 'Đề thi online',
    },
];

const FOOTER_ACCOUNT = [
    {
        to: '/login',
        title: 'Đăng nhập',
    },
    {
        to: '/register',
        title: 'Đăng ký',
    },
    {
        to: '/profile',
        title: 'Tài khoản cá nhân',
    },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={cx('footer')}>
            <div className={cx('inner')}>
                <div className={cx('brand')}>
                    <Link to="/" className={cx('logo')}>
                        <img
                            src={images.Logo}
                            alt="Logo VeriToeic"
                            className={cx('logo-img')}
                        />
                    </Link>

                    <p className={cx('description')}>
                        VeriToeic là website hỗ trợ học TOEIC, giúp người dùng
                        luyện tập theo chủ đề, làm đề online và theo dõi kết quả
                        học tập một cách dễ dàng.
                    </p>
                </div>

                <div className={cx('column')}>
                    <h3>Điều hướng</h3>

                    <ul>
                        {FOOTER_NAV.map((item) => (
                            <li key={item.to}>
                                <Link to={item.to}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={cx('column')}>
                    <h3>Tài khoản</h3>

                    <ul>
                        {FOOTER_ACCOUNT.map((item) => (
                            <li key={item.to}>
                                <Link to={item.to}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={cx('column')}>
                    <h3>Liên hệ</h3>

                    <ul>
                        <li>
                            <span>Email: vanmanh.150504@gmail.com</span>
                        </li>
                        <li>
                            <span>Website luyện thi TOEIC trực tuyến</span>
                        </li>
                        <li>
                            <span>Hỗ trợ học tiếng Anh mọi lúc, mọi nơi</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('bottom')}>
                <p>© {currentYear} VeriToeic. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
