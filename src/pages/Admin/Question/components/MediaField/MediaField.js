import { useState } from 'react';
import styles from './MediaField.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MediaField({ label, accept, value, onChange, previewType = 'image' }) {
  const [preview, setPreview] = useState(value || '');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      onChange(reader.result); // Base64 hoặc có thể truyền file nếu cần
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={cx('wrapper')}>
      <label className={cx('label')}>{label}</label>
      <input type="file" accept={accept} onChange={handleFileChange} />

      {preview && (
        <div className={cx('preview')}>
          {previewType === 'image' ? (
            <img src={preview} alt="preview" />
          ) : (
            <audio controls src={preview} />
          )}
        </div>
      )}
    </div>
  );
}

export default MediaField;
