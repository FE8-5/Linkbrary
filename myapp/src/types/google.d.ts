// Google API에서 사용하는 객체와 타입을 정의합니다.
export interface GoogleUser {
  getBasicProfile(): {
    getId(): string;
    getName(): string;
    getEmail(): string;
  };
  getAuthResponse(): {
    id_token: string;
  };
}

export interface GoogleAuth {
  signIn(): Promise<GoogleUser>;
}

// 전역 변수로 gapi 선언
declare const gapi: {
  auth2: {
    getAuthInstance(): GoogleAuth;
  };
};
