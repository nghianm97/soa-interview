 

export let apiPrefix = "";
export let publicApiPrefix = "";
export const CHATBOT_WORKBOOK_TOKEN =
  process.env.NEXT_PUBLIC_CHATBOT_WORK_BOOK_TOKEN!;
export const CHATBOT_BOOK_TOKEN = process.env.NEXT_PUBLIC_CHATBOT_BOOK_TOKEN!;
// NEXT_PUBLIC_API_PREFIX=/console/api NEXT_PUBLIC_PUBLIC_API_PREFIX=/api npm run start
if (
  process.env.NEXT_PUBLIC_API_PREFIX &&
  process.env.NEXT_PUBLIC_CHATBOT_API_PREFIX
) {
  apiPrefix = process.env.NEXT_PUBLIC_API_PREFIX;
  publicApiPrefix = process.env.NEXT_PUBLIC_CHATBOT_API_PREFIX;
}

export const API_PREFIX: string = apiPrefix;
export const PUBLIC_CHAT_BOT_API_PREFIX: string = publicApiPrefix;
export const IMAGE_DOMAIN_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
// export const TOOLBAR_REACT_QUILL = {
//   toolbar: [
//     [{ header: [1, 2, 3, 4, 5] }, { font: [] }],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["bold", "italic", "underline", "strike"], // Các nút định dạng văn bản
//     [{ color: [] }, { background: [] }], // Tùy chọn màu chữ và nền
//     [{ align: [] }], // Căn lề
//     ["link"], // Chèn liên kết, ảnh, video
//     ["clean"], // Nút để xóa định dạng
//   ],
// };
// export const FORMATS_REACT_QUILL = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "align",
//   "link",
//   "video",
//   "color",
//   "background",
// ];

export const configs = {
  authUrl: process.env.NEXT_PUBLIC_API_AUTH,
  sgkUrl: process.env.NEXT_PUBLIC_API_PREFIX,
};
