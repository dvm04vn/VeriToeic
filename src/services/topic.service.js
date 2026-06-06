// import { get } from "../utils/httpsRequest";
import * as Request from '../utils/httpsRequest'

// ✅ Lấy danh sách tất cả các chủ đề
// export const getListTopic = async () => {
//   const result = await get(`topics`);
//   return result;
// };
// Lấy danh sách các đề TOEIC
export const getAllTopics = async() => {
  try {
    const res = await Request.get(`/topics`);
    return res;
  } catch(err){
    return {
      error: true,
      message: err.respone?.data?.message || "loi may chu"
    }
  }
}

// Lấy 1 chủ đề theo id
// export const getTopic = async (id) => {
//   const result = await get(`topics/${id}`);
//   return result;
// };
// Lấy 1 topic theo slug
export const getTopicById = async (slug) => {
  try {
    const res = await Request.get(`/topics/${slug}`);
    return res;
  } catch (err) {
    console.error('Lỗi khi lấy topic:', err);
    throw err;
  }
};

// Tạo topic mới createTopic
export const createTopic = async (formData) => {
  try {
    const res = await Request.post("/topics", formData);
    return res.data; // ✅ TRẢ VỀ DỮ LIỆU GỒM _id
  } catch (error) {
    console.error("❌ createTopic:", error?.response?.data || error.message);
    throw error.response?.data || { message: "Lỗi không xác định" };
  }
};

// Cập nhật topic
export const updateTopic = async (id, data) => {
  try {
    const response = await Request.put(`/topics/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi cập nhật topic:", error);
    throw error;
  }
};

// Xoá topic
export const deleteTopic = async (id) => {
  try {
    const response = await Request.del(`/topics/${id}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi xoá topic:", error);
    throw error;
  }
};