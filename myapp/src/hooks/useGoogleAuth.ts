import { useEffect } from 'react';

/**
 * 구글 API 초기화 커스텀 훅
 * 이 훅은 컴포넌트가 마운트될 때 구글 API를 로드하고 인증을 초기화합니다.
 */

// 환경변수에서 구글 클라이언트 ID를 가져옵니다.
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const useGoogleAuth = () => {
  useEffect(() => {
    // 환경변수가 설정되지 않았을 때 에러처리
    if (!GOOGLE_CLIENT_ID) {
      console.error('Google Client ID is not defined. Please set the VITE_GOOGLE_CLIENT_ID environment variable.');
      return;
    }

    // 구글 API 스크립트를 동적으로 로드하는 함수입니다.
    const loadGapiScript = () => {
      return new Promise((resolve, reject) => {
        // 구글 API 스크립트 요소 생성
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error('Failed to load gapi script'));
        document.body.appendChild(script); // 스크립트 요소를 문서에 추가
      });
    };

    // 구글 API를 초기화하는 함수입니다.
    const initGoogleAuth = async () => {
      try {
        await loadGapiScript(); // 구글 API 스크립트 로드
        // 구글 API 로드 후 인증 인스턴스 초기화
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: GOOGLE_CLIENT_ID,
          });
        });
      } catch (error) {
        console.error('Error initializing gapi:', error);
      }
    };

    initGoogleAuth(); // 초기화 함수 호출
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행
};

export default useGoogleAuth;
