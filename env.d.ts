interface ImportMetaEnv {
  readonly VITE_API_URL: string; // Thay thế bằng các biến môi trường thực tế của bạn
  readonly VITE_APP_NAME: string;
  // Thêm các biến môi trường khác nếu cần
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}