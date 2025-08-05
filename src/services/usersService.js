import * as Request from "../utils/httpsRequest";

// Lấy thông tin người dùng
export const user = async () => {
  try {
    const res = await Request.get('user/profile-me');
    return res.data;
  } catch (error) {
    console.error('Lỗi khi lấy profile:', error);
    throw error;
  }
};
// lấy thông tin kết hợp
// export const combineMe = async ({ username }) => {
//   if (!username || typeof username !== "string" || username.trim() === "") {
//     console.log("⚠️ Username bị undefined hoặc rỗng");
//     return {};
//   }

//   const cleanUsername = username.trim();
//   console.log("📌 Gọi combineMe với username:", cleanUsername);
//   try {
//     const res = await Request.get(`/users/${username.trim()}`, {
//       params: {
//         include: "course",
//         page: 1,
//         limit: 5,
//       },
//       headers: {
//         "Cache-Control": "no-cache", // Chặn 304 nếu muốn test chắc chắn
//       },
//     });
//     if (!username) {
//       console.warn("⚠️ Username bị undefined hoặc rỗng");
//       return {};
//     }
//     console.log("📌 Gọi combineMe với username:", username);
//     const data = res?.data;
//     if (!data || typeof data !== "object") {
//       console.warn("⚠️ Không có dữ liệu trả về từ API combineMe");
//       return {};
//     }
//     // ✅ Chặn lỗi nếu profile là null hoặc undefined
//     if (!data.user && !data.profile) {
//       console.warn("⚠️ Không có user hoặc profile trong dữ liệu");
//       return {};
//     }

//     if (data.profile) {
//       console.log("👤 Profile:", data.profile.first_name);
//     } else {
//       console.warn("⚠️ User này chưa có profile");
//     }

//     return data;
//   } catch (error) {
//     console.error("❌ combineMe error:", error);
//     return {};
//   }
// };

// Kiểm tra đăng ký
// export const checkRegister = async ({ username, email }) => {
//   try {
//     const response = await Request.post("/users/checkRegister", {
//       username,
//       email,
//     });
//     return response.data;
//   } catch (error) {
//     const msg = error?.response?.data?.message;

//     if (msg === "Tên đăng nhập đã tồn tại.") {
//       return { error: "username", message: "Tên đăng nhập đã tồn tại" };
//     } else if (msg === "Email đã tồn tại.") {
//       return { error: "email", message: "Email đã tồn tại" };
//     }

//     console.error(
//       "❌ Lỗi kiểm tra đăng ký:",
//       error.response?.data || error.message
//     );
//     return {
//       error: true,
//       message: "Không thể kiểm tra đăng ký.",
//       details: error.response?.data || error.message,
//     };
//   }
// };
