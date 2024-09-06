import React from 'react';
import SignupNavigationButtons from '../SignupNavigationButtons/SignupNavigationButtons';
import SignupForm from '../SignupForm/SignupForm';
import { StyledSignupContainer } from './SignupContainerStyle';

// 회원가입 페이지 전체 컨테이너 컴포넌트
const SignupContainer: React.FC = () => {
  return (
    <StyledSignupContainer>
      <SignupNavigationButtons />
      <SignupForm />
    </StyledSignupContainer>
  );
};

export default SignupContainer;
