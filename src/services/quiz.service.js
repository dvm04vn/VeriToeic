import * as httpRequest from '../utils/httpsRequest';

// export const createAnswer = async(options) => {
//     const result = await post(`answers`, options);
//     return result;
// }
export const Answer = async(options) => {
    try {
        const res = await httpRequest.post(`answers`, {
            options,
        })
        return res;
    } catch(err) {
        return {
            error: true,
            message: err.respone?.data?.message || "Loi may chu"
        };
        
    }
}