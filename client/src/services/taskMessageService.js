// import { requestFactory } from "../utils/requester";

// const baseUrl = 'http://localhost:3030/data/messages';

// export const taskMessageServiceFactory = (token) => {
//     const request = requestFactory(token);

//     const getAll = async (taskId) => {
//         const query = encodeURIComponent(`taskId="${taskId}"`);
//         const result = await request.get(`${baseUrl}?where=${query}`);
//         const messages = Object.values(result);
    
//         return messages;
//     };
  
    
//     const create = async (taskId, text) => {
//         const result = await request.post(baseUrl, {taskId, text});
    
//         console.log(result);
    
//         return result;
//     };

//     return {
//         getAll,
//         create,
        
//     }
// }