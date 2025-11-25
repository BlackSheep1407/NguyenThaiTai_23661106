import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rhdnydvtpyksbagesfxu.supabase.co";
const SUPABASE_API_KEY = "sb_publishable_kjcKirCE8PEKLVyJQN1XYg_PEs6_DU7";


export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
// //GỌI Supabase thủ công (mẫu cho file khác dùng)
// const createSupabaseClient = (url, key) => {
//     // Trong môi trường này, chúng ta không thể import,
//     // nên ta sẽ giả lập một client đơn giản để gọi fetch
//     // thay thế cho Supabase SDK chính thức, nhưng vẫn giữ cấu trúc gọi API.
//     return {
//         from: (tableName) => ({
//             select: (columns) => ({
//                 order: (columnName, options) => {
//                     const params = new URLSearchParams();
//                     params.append('select', columns);
//                     params.append('order', `${columnName}.${options.ascending ? 'asc' : 'desc'}`);
                    
//                     const apiUrl = `${url}/rest/v1/${tableName}?${params.toString()}`;

//                     return {
//                         data: null, // Placeholder
//                         error: null, // Placeholder
//                         // Tự gọi fetch API thay thế cho client.from().select()...execute()
//                         then: async (resolve, reject) => {
//                             try {
//                                 const response = await fetch(apiUrl, {
//                                     headers: {
//                                         'apikey': key,
//                                         'Authorization': `Bearer ${key}`,
//                                         'Content-Type': 'application/json'
//                                     }
//                                 });
//                                 if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//                                 const data = await response.json();
//                                 // Trả về cấu trúc giống SDK (data, error)
//                                 resolve({ data: data, error: null });
//                             } catch (err) {
//                                 reject({ data: null, error: { message: err.message } });
//                             }
//                         }
//                     };
//                 }
//             })
//         })
//     };
// };


