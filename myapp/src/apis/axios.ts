import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

instance.interceptors.request.use(
  config => {
    // accessToken을 어떤식으로 저장해서 사용할지 잘 모르겠어서 일단 빈문자열로 넣었습니다.
    // 일단 swagger에서 직접 access토큰 받아서 임시로 'token'변수에 넣어서 사용하시면 될 것 같습니다.
    const token = '';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
