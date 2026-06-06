import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classNames from 'classnames/bind';

import styles from './PublicLayout.module.scss';

const cx = classNames.bind(styles);

function PublicLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <ToastContainer autoClose={2000} />

            <Header />

            <div className={cx('container')}>
                <div className={cx('content')}>
                    <main className={cx('main')}>{children}</main>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PublicLayout;