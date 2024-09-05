import React from 'react';
import LoginNavigationButtons from '../LoginNavigationButtons/LoginNavigationButtons';
import LoginForm from '../LoginForm/LoginForm';
import SocialLogin from '../SocialLogin/SocialLogin';
import { StyledLoginContainer } from './LoginContainerStyle';

// 로그인 페이지 전체 컨테이너 컴포넌트
const LoginContainer: React.FC = () => {
  return (
    <StyledLoginContainer>
      <LoginNavigationButtons />
      <LoginForm />
      <SocialLogin />
    </StyledLoginContainer>
  );
};

export default LoginContainer;
