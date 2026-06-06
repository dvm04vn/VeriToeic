import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';

import style from './Register.module.scss';
import { register } from '~/services/auth.service';

const cx = classNames.bind(style);

function Register() {
    const navigate = useNavigate();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateForm = () => {
        if (!fullname.trim()) {
            toast.error('Vui lòng nhập họ và tên');
            return false;
        }

        if (fullname.trim().length < 2) {
            toast.error('Họ và tên phải có ít nhất 2 ký tự');
            return false;
        }

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

        if (!confirmPassword.trim()) {
            toast.error('Vui lòng nhập lại mật khẩu');
            return false;
        }

        if (confirmPassword !== password) {
            toast.error('Mật khẩu nhập lại không khớp');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const res = await register(fullname.trim(), email.trim(), password);

            toast.success(res?.message || 'Đăng ký tài khoản thành công');

            navigate('/login');
        } catch (error) {
            const message =
                error?.response?.data?.message ||
                error?.message ||
                'Đăng ký thất bại. Vui lòng thử lại.';

            toast.error(message);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('registerBox')}>
                <div className={cx('header')}>
                    <h1>Đăng ký</h1>
                    <p>Tạo tài khoản để bắt đầu học TOEIC cùng VeriToeic</p>
                </div>

                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('formGroup')}>
                        <label htmlFor="fullname">Họ và tên</label>

                        <input
                            id="fullname"
                            type="text"
                            placeholder="Nhập họ và tên của bạn"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className={cx('input')}
                        />
                    </div>

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

                    <div className={cx('formGroup')}>
                        <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>

                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={cx('input')}
                        />
                    </div>

                    <button type="submit" className={cx('submitBtn')}>
                        Đăng ký
                    </button>
                </form>

                <p className={cx('loginText')}>
                    Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;