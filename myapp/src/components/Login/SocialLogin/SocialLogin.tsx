import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledSocialLogin, IconButton, Text } from './SocialLoginStyle';
import { GoogleUser, GoogleAuth } from '../../../types/google';
import googleIc from '../../../assets/Icons/google.png';
import kakaoIc from '../../../assets/Icons/kakao.png';
import { signInWithProvider } from '../../../apis/AuthApi/authApi';
import { GoogleLogin } from '@react-oauth/google';

// 소셜 로그인 컴포넌트
const SocialLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      // 구글 API 인스턴스를 얻습니다.
      const auth2 = window.gapi.auth2.getAuthInstance() as GoogleAuth;
      if (!auth2) {
        throw new Error('Google Auth instance is not initialized.');
      }

      // 구글 로그인 시도
      const googleUser = (await auth2.signIn()) as GoogleUser;
      const token = googleUser.getAuthResponse().id_token; // 구글 ID 토큰

      // 서버에 로그인 요청
      const response = await signInWithProvider(token, window.location.origin, 'google');
      console.log('Google login response:', response);

      // 로그인 성공 시 랜딩 페이지로 이동
      navigate('/');
    } catch (error) {
      // 에러 타입이 Google API 오류인 경우
      if (error instanceof Error) {
        if (error.message === 'popup_closed_by_user') {
          // 팝업이 닫혔다는 것을 사용자에게 알림
          alert('구글 로그인 팝업이 닫혔습니다. 다시 시도해 주세요.');
        } else {
          console.error('Google login error:', error.message);
        }
      } else {
        console.error('Unexpected Google login error:', error);
      }
    }
  };

  const handleKakaoLogin = () => {
    // 카카오 로그인 처리 로직 (임시)
    console.log('Kakao login clicked');
    /**
     * @TODO
     * 카카오 로그인을 시도합니다.
     * 로그인이 성공하면 "/"페이지로 이동합니다.
     */
  };

  return (
    <StyledSocialLogin>
      <Text>소셜 로그인</Text>
      <div>
        <IconButton onClick={handleGoogleLogin}>
          <img src={googleIc} alt="구글 로그인" />
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </IconButton>
        <IconButton onClick={handleKakaoLogin}>
          <img src={kakaoIc} alt="카카오 로그인" />
        </IconButton>
      </div>
    </StyledSocialLogin>
  );
};

export default SocialLogin;
