import * as Response from '../utils/httpsRequest';

export const successGG = async ({ _id }) => {
    try {
        const res = await Response.post('api/auth/success', { _id });
        console.log("Respone full từ server", res.data);
        return res;
    } catch (error) {
        console.log("Gọi API /auth/success thất bại",error);
    }
};
// SuccessService.js