import * as httpRequest from '../utils/httpsRequest';

// Đăng ký người dùng
export const register = async (fullname, email, password) => {
  try {
    const res = await httpRequest.post('auth/register', {
      fullname,
      email,
      password,
    });
    return res;
  } catch (error) {
    console.error('Lỗi khi đăng ký:', error);
    throw error;
  }
};

// Đăng nhập người dùng
export const login = async (email, password) => {
  try {
    const res = await httpRequest.post("auth/login", {
      email,
      password,
    });
    return res;
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    throw error;
  }
};


// Lấy thông tin profile người dùng
// export const getProfile = async () => {
//   try {
//     const res = await httpRequest.get('user/profile-me');
//     return res;
//   } catch (error) {
//     console.error('Lỗi khi lấy profile:', error);
//     throw error;
//   }
// };

export const logout = async() => {
  try {
    const res = await httpRequest.post('auth/logout')
    return res;
  } catch(err) {
    console.error("lỗi khi logout:", err);
    throw err;
  }
}
// Đăng xuất người dùng
// export const logout = () => {
//   localStorage.removeItem('token');
// };
