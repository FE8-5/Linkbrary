import React from 'react';
import { StyledLoginNavigationButtons, SignUpButtonArea, SignUpButton } from './LoginNavigationButtonsStyle';
import LogoButton from '../../@Shared/Buttons/LogoButton/LogoButton';
import { Link } from 'react-router-dom';

// 로고 버튼과 회원가입 페이지 이동 버튼을 포함하는 컴포넌트
const LoginNavigationButtons: React.FC = () => {
  return (
    <div>
      <StyledLoginNavigationButtons>
        <LogoButton />
        <SignUpButtonArea>
          <p>회원이 아니신가요?</p>
          <SignUpButton>
            <Link to={'/signup'}>회원 가입하기</Link>
          </SignUpButton>
        </SignUpButtonArea>
      </StyledLoginNavigationButtons>
    </div>
  );
};

export default LoginNavigationButtons;
