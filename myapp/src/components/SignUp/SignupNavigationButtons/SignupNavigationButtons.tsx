import React from 'react';
import { StyledSignupNavigationButtons, LoginButtonArea, LoginButton } from './SignupNavigationButtonsStyle';
import LogoButton from '../../@Shared/Buttons/LogoButton/LogoButton';
import { Link } from 'react-router-dom';

// 로고 버튼과 로그인 페이지 이동 버튼을 포함하는 컴포넌트
const SignupNavigationButtons: React.FC = () => {
  return (
    <div>
      <StyledSignupNavigationButtons>
        <LogoButton />
        <LoginButtonArea>
          <p>이미 회원이신가요?</p>
          <LoginButton>
            <Link to={'/login'}>로그인 하기</Link>
          </LoginButton>
        </LoginButtonArea>
      </StyledSignupNavigationButtons>
    </div>
  );
};

export default SignupNavigationButtons;
