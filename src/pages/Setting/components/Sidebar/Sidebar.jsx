import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar'
import styles from './Sidebar.module.scss';
import images from '../../../../assets';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <Link to='/' className={cx('logo')}>
        <img src={images.Logo} alt='logo'/>
      </Link>
      <div className={cx('title_sidebar')}>
        <h3>Cài đặt tài khoản</h3>
        <p>
            Quản lý cài đặt tài khoản của bạn
        </p>
      </div>
      <div className={cx('navbar')}>
            <Navbar/>
      </div>
    </div>
  )
}

export default Sidebar
