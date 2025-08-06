import axios from "axios";

const httpsRequest = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
});

// ✅ Gửi token trong mỗi request
const token = localStorage.getItem('token');

httpsRequest.interceptors.request.use(
    (config) => {
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => Promise.reject(error),
);
// ✅ Xử lý lỗi token hết hạn trong response

export const get = async (path, config = {}) => {
  try {
    const response = await httpsRequest.get(path, config);
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi
  }
};

export const post = async (path, data = {}, config = {}) => {
  try {
    const response = await httpsRequest.post(path, data, config);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi
  }
};

export const put = async (path, data = {}, config = {}) => {
  try {
    const response = await httpsRequest.put(path, data, config);
    return response.data;
  } catch (error) {
    console.error("Error in PUT request:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi
  }
};

export const patch = async (path, data = {}, config = {}) => {
  try {
    const response = await httpsRequest.patch(path, data, config);
    return response.data;
  } catch (error) {
    console.error("Error in PATCH request:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi
  }
};

export const del = async (path, config = {}) => {
  try {
    const response = await httpsRequest.delete(path, config);
    return response.data;
  } catch (error) {
    console.error("Error in DELETE request:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi
  }
};

export default httpsRequest;
