import React from 'react';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.home}>

      <section className={styles.hero}>
        <h1 className={styles.title}>Nâng cao TOEIC của bạn - Hoàn toàn miễn phí!</h1>
        <p className={styles.subtitle}>
          Tham gia ngay để luyện thi TOEIC với bộ đề chuẩn, bài giảng chi tiết, và cộng đồng học tập sôi nổi.
        </p>
        <button className={styles.startBtn} onClick={() => window.location.href = '/register'}>
          Bắt đầu học ngay
        </button>
      </section>

      <section className={styles.features}>
        <h2 className={styles.featuresTitle}>Tại sao chọn chúng tôi?</h2>
        <div className={styles.featuresList}>

          <div className={styles.featureItem}>
            <h3>📚 Tài liệu chuẩn quốc tế</h3>
            <p>Bộ đề và bài giảng theo chuẩn ETS mới nhất, giúp bạn làm quen với cấu trúc đề thi thật.</p>
          </div>

          <div className={styles.featureItem}>
            <h3>🚀 Luyện tập mọi lúc mọi nơi</h3>
            <p>Giao diện thân thiện, học trên máy tính hay điện thoại đều tiện lợi.</p>
          </div>

          <div className={styles.featureItem}>
            <h3>👩‍🏫 Hỗ trợ cộng đồng</h3>
            <p>Tham gia diễn đàn học tập, trao đổi kinh nghiệm cùng các bạn và giảng viên.</p>
          </div>

          <div className={styles.featureItem}>
            <h3>✅ Miễn phí 100%</h3>
            <p>Không giới hạn tài khoản, không quảng cáo làm phiền.</p>
          </div>

        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Bạn đã sẵn sàng để đạt điểm TOEIC cao chưa?</h2>
        <button className={styles.ctaBtn} onClick={() => window.location.href = '/register'}>
          Đăng ký miễn phí ngay
        </button>
      </section>

    </div>
  );
}

export default Home;
