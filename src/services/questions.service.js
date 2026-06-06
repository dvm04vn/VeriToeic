import * as Request from "../utils/httpsRequest";
// export const getListQuestion = async (topicId) => {
//   const result = await get(`questions?topicId=${topicId}`);
//   return result;
// };
// đã fix
// Lấy danh sách câu hỏi theo đề
// export const getQuestionsByTopic  = async (topicId) => {
//   try {
//     const res = await Request.get(`questions?topicId=${topicId}`, {
//       topicId,
//     });
//     return res;
//   } catch (err) {
//     return {
//       error: true,
//       message: err.responese?.data?.message || "lỗi máy chủ",
//     };
//   }
// };


export const getQuizByTopicId = async (slug) => {
  try {
    const res = await Request.get(`/questions/${slug}`);
    return res;
  } catch (err) {
    return {
      error: true,
      message: err.responese?.data?.message || "lỗi máy chủ",
    };
  }
};

// update 
// ✅ Tạo mới câu hỏi
export const createQuestion = async (questionData) => {
  try {
    const response = await Request.post("/questions", questionData);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi tạo câu hỏi:", error);
    throw error;
  }
};

// ✅ Cập nhật câu hỏi
export const updateQuestion = async (id, updatedData) => {
  try {
    const response = await Request.put(`/questions/${id}`, updatedData);
    return response;
  } catch (error) {
    console.error("Lỗi khi cập nhật câu hỏi:", error);
    throw error;
  }
};

// ✅ Xoá câu hỏi
export const deleteQuestion = async (id) => {
  try {
    const response = await Request.del(`/questions/${id}`);
    return response;
  } catch (error) {
    console.error("Lỗi khi xoá câu hỏi:", error);
    throw error;
  }
};