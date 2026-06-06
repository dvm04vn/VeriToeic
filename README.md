# 📘 VeriToeic — Frontend 

**VeriToeic** là website hỗ trợ học tiếng Anh TOEIC, giúp người dùng luyện tập câu hỏi theo chủ đề, làm đề thi online và theo dõi kết quả học tập.

Dự án được xây dựng bằng **ReactJS + Vite**, tập trung vào giao diện hiện đại, dễ sử dụng, responsive và kết nối với Backend API.

---

## 📌 Giới thiệu dự án

**VeriToeic Frontend** là phần giao diện người dùng của hệ thống học TOEIC trực tuyến.

Frontend đảm nhiệm việc xây dựng UI, điều hướng trang, quản lý trạng thái đăng nhập, gọi API và hiển thị dữ liệu học tập cho người dùng.

Người dùng có thể:

* Đăng ký / đăng nhập tài khoản
* Luyện tập câu hỏi TOEIC theo chủ đề
* Làm đề thi TOEIC online
* Xem kết quả sau khi luyện tập
* Theo dõi lịch sử bài làm
* Quản lý thông tin cá nhân

---

## 🚀 Chức năng chính

### 1. Authentication

* Đăng ký tài khoản
* Đăng nhập / đăng xuất
* Lưu accessToken phía client
* Quản lý trạng thái đăng nhập bằng **AuthContext**
* Hiển thị thông báo bằng **React Toastify**

### 2. Home Page

* Hiển thị giao diện giới thiệu VeriToeic
* Trình bày các tính năng nổi bật
* Điều hướng nhanh đến luyện tập theo chủ đề và đề thi online

### 3. Topic Practice

* Hiển thị danh sách chủ đề TOEIC
* Cho phép người dùng chọn chủ đề để luyện tập
* Hiển thị câu hỏi và đáp án
* Gửi kết quả luyện tập đến Backend API

### 4. Online Test

* Hiển thị bài thi TOEIC online
* Cho phép người dùng chọn đáp án
* Gửi bài làm và nhận kết quả sau khi hoàn thành

### 5. Result & History

* Hiển thị kết quả bài làm
* Theo dõi lịch sử luyện tập
* Hỗ trợ người dùng đánh giá quá trình học tập

### 6. Profile & Setting

* Hiển thị thông tin người dùng
* Cập nhật thông tin cá nhân
* Đổi mật khẩu
* Quản lý bảo mật tài khoản

---

## 🛠️ Công nghệ sử dụng

### Frontend

* **ReactJS** – xây dựng giao diện theo component
* **Vite** – khởi tạo và build dự án nhanh
* **JavaScript ES6+** – xử lý logic phía client
* **React Router DOM** – quản lý điều hướng giữa các trang
* **Sass Module** – quản lý style theo từng component
* **classnames** – xử lý className động
* **React Toastify** – hiển thị thông báo

### State & API

* **Context API** – quản lý trạng thái đăng nhập
* **Axios** – giao tiếp với Backend API
* **LocalStorage** – lưu accessToken phía client

### Tools

* **Git / GitHub** – quản lý source code
* **VS Code** – môi trường phát triển
* **ESLint** – kiểm tra và chuẩn hóa code

---

## 👨‍💻 Thông tin tác giả

* **Tên dự án:** VeriToeic — Website hỗ trợ học tiếng Anh TOEIC
* **Người thực hiện:** Đặng Văn Mạnh
* **Vai trò:** Frontend Developer
* **Công nghệ chính:** ReactJS, Vite, JavaScript, Sass Module, Axios
* **GitHub:** https://github.com/dvm04vn


