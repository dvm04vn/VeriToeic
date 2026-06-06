import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';

import Button from '../../../components/Button';
import styles from './Header.module.scss';
import { useAuth } from '~/context/AuthContext';
import { logout } from '~/services/auth.service';
import images from '~/assets';

const cx = classNames.bind(styles);

const LIST_NAV = [
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

function Header() {
    const { user, isAuthenticated } = useAuth();

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleCloseMenu = () => {
        setIsOpenMenu(false);
    };

    const handleLogout = async () => {
        try {
            await logout();

            localStorage.removeItem('accessToken');

            toast.success('Đăng xuất thành công');

            window.location.href = '/login';
        } catch (error) {
            console.error('Logout error:', error);

            localStorage.removeItem('accessToken');

            toast.warning('Phiên đăng nhập đã được xoá');

            window.location.href = '/login';
        }
    };

    const displayName =
        user?.fullname ||
        user?.fullName ||
        user?.name ||
        user?.email ||
        'Người dùng';

    const avatarName = displayName.charAt(0).toUpperCase();

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('logo')}>
                    <Link
                        to="/"
                        className={cx('logo-link')}
                        onClick={handleCloseMenu}
                    >
                        <img
                            className={cx('img-logo')}
                            src={images.Logo}
                            alt="Logo VeriToeic"
                        />

                        <span className={cx('logo-text')}>
                            Veri<span>Toeic</span>
                        </span>
                    </Link>
                </div>

                <nav className={cx('nav', { active: isOpenMenu })}>
                    {LIST_NAV.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                cx('nav-link', {
                                    active: isActive,
                                })
                            }
                            onClick={handleCloseMenu}
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </nav>

                <div className={cx('action')}>
                    {isAuthenticated ? (
                        <div className={cx('user-box')}>
                            <Link
                                to="/profile"
                                className={cx('user-info')}
                                onClick={handleCloseMenu}
                            >
                                <span className={cx('avatar')}>
                                    {avatarName}
                                </span>

                                <span className={cx('username')}>
                                    {displayName}
                                </span>
                            </Link>

                            <Button onClick={handleLogout}>
                                Đăng xuất
                            </Button>
                        </div>
                    ) : (
                        <div className={cx('auth-buttons')}>
                            <Button to="/login" outline>Đăng nhập</Button>

                            <Button to="/register" primary>
                                Đăng ký
                            </Button>
                        </div>
                    )}

                    <button
                        type="button"
                        className={cx('menu-btn', { active: isOpenMenu })}
                        onClick={() => setIsOpenMenu((prev) => !prev)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;