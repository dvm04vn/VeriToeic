import { get } from "../utils/httpsRequest";
import { getCookie } from "../helpers/cookie";
import * as Request from "../utils/httpsRequest";
// đã fix
export const getAnswersByUsersID = async (userId) => {
  try {
    // const userId = getCookie("id");
    const res = await Request.get(`answers?userId=${userId}`, {
      userId,
    });
    return res;
  } catch (err) {
    return {
      error: true,
      message: err.response?.data?.message || "lỗi máy chủ!",
    };
  }
};
// Lấy kết quả theo user hoặc quiz, Answer
export const getResultByQuiz = async (id) => {
  try {
    const res = await Request.get(`/results/quiz/${id}`, {
      id,
    });
    return res;
  } catch (err) {
    return {
      error: true,
      message: err.response?.data?.message || "Lỗi máy chủ!",
    };
  }
};

// Gửi kết quả bài làm
export const submitResult = async (payload) => {
  try {
    const response = await Request.post('/results/submit', payload);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi nộp bài:', error);
    throw error;
  }
};
