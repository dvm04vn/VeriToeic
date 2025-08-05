import * as httpRequest from '../utils/httpsRequest';

// Gọi API để lấy thông tin profile người dùng
export const Profile_ME = async () => {
  try {
    const res = await httpRequest.get('/profile/me');
    return res;
  } catch (error) {
    console.error("❌ Lỗi khi lấy profile:", error);
    throw error;
  }
};

export const updateProfile = async ({
    first_name,
    last_name,
    avatar,
    bio,
    facebook_url,
    instagram_url,
    tiktok_url,
}) => {
    try {
        let data;

        if (avatar) {
            const formData = new FormData();
            formData.append('avatar', avatar);
            // Thêm các trường khác vào formData
            if (first_name) formData.append('first_name', first_name);
            if (last_name) formData.append('last_name', last_name);
            if (bio) formData.append('bio', bio);
            if (facebook_url) formData.append('facebook_url', facebook_url);
            if (instagram_url) formData.append('instagram_url', instagram_url);
            if (tiktok_url) formData.append('tiktok_url', tiktok_url);

            data = formData;
        } else {
            // Sử dụng spread operator để tạo đối tượng dữ liệu
            data = {
                ...(first_name && { first_name }),
                ...(last_name && { last_name }),
                ...(bio && { bio }),
                ...(facebook_url && { facebook_url }),
                ...(instagram_url && { instagram_url }),
                ...(tiktok_url && { tiktok_url }),
            };
        }

        const res = await httpRequest.patch('/profile/edit', data); // Đảm bảo httpRequest.patch được định nghĩa
        return res.data; // Trả về dữ liệu
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error; // Ném lại lỗi để xử lý ở nơi gọi
    }
};