import classNames from 'classnames/bind';
import { IoIosCloseCircleOutline, IoIosAdd } from 'react-icons/io';
import { useState } from 'react';
import styles from './Overlay.module.scss';
import Button from '../../../../../../components/Button';
import { updateProfile } from '../../../../../../services/ProfileService';
import Image from '../../../../../../components/Image';
import images from '../../../../../../assets';
import { ToastContainer, toast } from "react-toastify"; // Nhập ToastContainer và toast
import "react-toastify/dist/ReactToastify.css"; // Nhập CSS cho toast

const cx = classNames.bind(styles);
const DefaultFN = () => {};

function Overlay({
    data = {},
    handleOnClose = DefaultFN,
    handleRerender = DefaultFN,
}) {
    const [value, setValue] = useState(data?.content || '');
    const [valueAvatar, setValueAvatar] = useState(data?.content || '');

    // handle
    const handleOnSave = async () => {
        if (value.length === 0 || value === data?.content) {
            return;
        }
        try {
            if (data.key === 'name') {
                const [first_name, last_name] = value.split(' ', 2);
                await fetchAPIUpdate({ first_name, last_name });
            } else if (data.key === 'bio') {
                await fetchAPIUpdate({ bio: value });
            } else if (data.key === 'image') {
                await fetchAPIUpdate({ avatar: value });
            } else if (data.key === 'fb') {
                await fetchAPIUpdate({ facebook_url: value });
            } else if (data.key === 'ig') {
                await fetchAPIUpdate({ instagram_url: value });
            } else if (data.key === 'tiktok') {
                await fetchAPIUpdate({ tiktok_url: value });
            }
            handleRerender();
            handleOnClose();
        } catch (error) {
            toast.error("Có lỗi xảy ra khi lưu!");
        }
    };

    const handleOnUpload = (file) => {
        setValue(file);
        const previewUrl = URL.createObjectURL(file);
        setValueAvatar(previewUrl);
    };

    // fetch api
    const fetchAPIUpdate = async ({
        first_name,
        last_name,
        avatar,
        bio,
        facebook_url,
        instagram_url,
        tiktok_url,
    }) => {
        try {
            const result = await updateProfile({
                first_name,
                last_name,
                avatar,
                bio,
                facebook_url,
                instagram_url,
                tiktok_url,
            });
            console.log(result);
            // Hiển thị thông báo thành công
            if (result.message) {
                toast.success(result.message);
            }
        } catch (error) {
            console.error("Lỗi khi cập nhật hồ sơ:", error);
            toast.error("Có lỗi xảy ra khi cập nhật hồ sơ!");
        }
    };

    return (
        <div className={cx('wrapper')}>
            <ToastContainer 
                position="top-center" // Hiển thị ở giữa màn hình
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
                style={{ textAlign: 'center' }} // Căn giữa
            />
            <div className={cx('inner')}>
                <button
                    className={cx('btn-close')}
                    onClick={() => handleOnClose()}
                >
                    <IoIosCloseCircleOutline />
                </button>
                <div className={cx('header')}>
                    <h3>{data?.titleOverlay}</h3>
                    <p>{data?.contentOverlay}</p>
                </div>
                <div className={cx('body')}>
                    {data?.key === 'image' ? (
                        <div className={cx('inner_img')}>
                            <input
                                type="file"
                                id="avatar"
                                accept="image/*"
                                hidden
                                onInput={(e) =>
                                    handleOnUpload(e.target.files[0])
                                }
                            />
                            <label htmlFor="avatar">
                                <Image
                                    src={valueAvatar || images.noImage}
                                    alt={data?.title}
                                />
                            </label>
                            <label
                                className={cx('action_upload')}
                                htmlFor="avatar"
                            >
                                <span>
                                    <IoIosAdd />
                                </span>
                                <p>Tải ảnh lên</p>
                            </label>
                        </div>
                    ) : (
                        <div>
                            <p>{data?.title}</p>
                            {data?.key === 'bio' ? (
                                <textarea
                                    value={value}
                                    placeholder={data?.placeholder}
                                    onInput={(e) => setValue(e.target.value)}
                                    spellCheck="false"
                                    maxLength="150"
                                ></textarea>
                            ) : (
                                <input
                                    value={value}
                                    type="text"
                                    placeholder={data?.placeholder}
                                    onInput={(e) => setValue(e.target.value)}
                                />
                            )}
                        </div>
                    )}
                </div>
                <div className={cx('action')}>
                    <Button
                        primary
                        large
                        onClick={() => handleOnSave()}
                        disabled={value.length === 0 || value === data?.content}
                    >
                        Lưu Lại
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Overlay;