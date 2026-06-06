import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';

import style from './Login.module.scss';
import { login } from '~/services/auth.service';

const cx = classNames.bind(style);

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateForm = () => {
        if (!email.trim()) {
            toast.error('Vui lòng nhập email');
            return false;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            toast.error('Email không hợp lệ');
            return false;
        }

        if (!password.trim()) {
            toast.error('Vui lòng nhập mật khẩu');
            return false;
        }

        if (password.length < 6) {
            toast.error('Mật khẩu phải có ít nhất 6 ký tự');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const res = await login(email.trim(), password);

            const { accessToken, user } = res;

            if (!accessToken || !user) {
                toast.error('Dữ liệu đăng nhập không hợp lệ');
                return;
            }

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('user', JSON.stringify(user));

            toast.success('Đăng nhập thành công');

            navigate('/');
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                error?.message ||
                'Đăng nhập thất bại. Vui lòng thử lại.';

            toast.error(message);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('loginBox')}>
                <div className={cx('header')}>
                    <h1>Đăng nhập</h1>
                    <p>Chào mừng bạn quay lại VeriToeic</p>
                </div>

                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('formGroup')}>
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Nhập email của bạn"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={cx('input')}
                        />
                    </div>

                    <div className={cx('formGroup')}>
                        <label htmlFor="password">Mật khẩu</label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={cx('input')}
                        />
                    </div>

                    <div className={cx('forgotPassword')}>
                        <Link to="/forgot-password">Quên mật khẩu?</Link>
                    </div>

                    <button type="submit" className={cx('submitBtn')}>
                        Đăng nhập
                    </button>
                </form>

                <p className={cx('registerText')}>
                    Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;