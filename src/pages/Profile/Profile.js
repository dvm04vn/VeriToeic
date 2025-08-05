import React, { useEffect, useState } from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import { FaUserFriends, FaCalendarAlt } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { ImProfile } from 'react-icons/im';
import { RxAvatar } from 'react-icons/rx';
import images from '../../assets';
import Popper from './components/Popper';
import { formatTime } from '../../services/formatTime';

import { user } from '../../services/usersService';

const cx = classNames.bind(styles);

const Profile = () => {
  const [userResult, setUserResult] = useState(null);
  const [profileResult, setProfileResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await user();
        if (res) {
          setUserResult(res.user);
          setProfileResult(res.profile);
        } else {
          setError(res.message || 'Lỗi không xác định');
        }
      } catch (err) {
        console.error('❌ Lỗi lấy thông tin người dùng:', err);
        setError('Không thể tải thông tin người dùng.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>🔄 Đang tải thông tin người dùng...</p>;
  if (error) return <p style={{ color: 'red' }}>❌ {error}</p>;
  if (!userResult) return <p>Không tìm thấy thông tin người dùng.</p>;

  // Dữ liệu từ profile hoặc fallback về user
  const fullName = `${profileResult?.first_name || ''} ${profileResult?.last_name || ''}`.trim() || userResult.fullname;
  const avatar = profileResult?.avatar || images.noImage;
  const bio = profileResult?.bio || 'Chưa có mô tả cá nhân.';
  const gender = profileResult?.gender || 'Chưa cập nhật';
  const facebook = profileResult?.facebook_url || 'Chưa có';
  const instagram = profileResult?.instagram_url || 'Chưa có';
  const tiktok = profileResult?.tiktok_url || 'Chưa có';

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <div className={cx('profile')}>
            <div className={cx('avatar-container')}>
              <Image src={avatar} alt="avatar" className={cx('avatar')} />
            </div>
            <div className={cx('name')}>
              <h3>{fullName}</h3>
            </div>
          </div>
        </div>

        <div className={cx('body')}>
          <div className={cx('module')}>
            <Popper title="Giới thiệu">
              <div className={cx('info-item')}>
                <FaUserFriends />
                <strong> Vai trò:</strong> {userResult.role}
              </div>
              <div className={cx('info-item')}>
                <RxAvatar />
                <strong> Giới tính:</strong> {gender}
              </div>
            </Popper>

            <Popper title="Hồ sơ">
              <div className={cx('info-grid')}>
                <div className={cx('info-item')}>
                  <RxAvatar />
                  <strong> Họ tên:</strong> {fullName}
                </div>
                <div className={cx('info-item')}>
                  <CgMail />
                  <strong> Email:</strong> {userResult.email}
                </div>
                <div className={cx('info-item')}>
                  <FaCalendarAlt />
                  <strong> Ngày tham gia:</strong> {formatTime(userResult.createdAt)}
                </div>
                <div className={cx('info-item')}>
                  <ImProfile />
                  <strong> Bio:</strong> {bio}
                </div>
                <div className={cx('info-item')}>
                  <strong> Facebook:</strong> {facebook}
                </div>
                <div className={cx('info-item')}>
                  <strong> Instagram:</strong> {instagram}
                </div>
                <div className={cx('info-item')}>
                  <strong> Tiktok:</strong> {tiktok}
                </div>
              </div>
            </Popper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
