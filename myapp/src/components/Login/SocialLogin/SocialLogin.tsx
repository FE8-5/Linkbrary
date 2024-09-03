import React from 'react';
import { StyledSocialLogin, IconButton, Text } from './SocialLoginStyle';
import googleIc from '../../../assets/Icons/google.png';
import kakaoIc from '../../../assets/Icons/kakao.png';

// 소셜 로그인 컴포넌트
const SocialLogin: React.FC = () => {
  const handleGoogleLogin = () => {
    // 구글 로그인 처리 로직 (임시)
    console.log('Google login clicked');
    /**
     * @TODO
     * 구글 로그인을 시도합니다.
     * 로그인이 성공하면 `/`로 이동합니다.
     */
  };

  const handleKakaoLogin = () => {
    // 카카오 로그인 처리 로직 (임시)
    console.log('Kakao login clicked');
    /**
     * @TODO
     * 카카오 로그인을 시도합니다.
     * 로그인이 성공하면 `/`로 이동합니다.
     */
  };

  return (
    <StyledSocialLogin>
      <Text>소셜 로그인</Text>
      <div>
        <IconButton onClick={handleGoogleLogin}>
          <img src={googleIc} alt="구글 로그인" />
        </IconButton>
        <IconButton onClick={handleKakaoLogin}>
          <img src={kakaoIc} alt="카카오 로그인" />
        </IconButton>
      </div>
    </StyledSocialLogin>
  );
};

export default SocialLogin;
