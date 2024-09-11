// src/env.d.ts
interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  // 다른 환경 변수들도 여기에 선언할 수 있습니다.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
