import React from 'react';
import { StyledNavigationButtons, SignUpButtonArea, SignUpButton } from './NavigationButtonsStyle';
import LogoButton from '../../@Shared/Buttons/LogoButton/LogoButton';
import { Link } from 'react-router-dom';

// 로고 버튼과 회원가입 페이지 이동 버튼을 포함하는 컴포넌트
const NavigationButtons: React.FC = () => {
  return (
    <div>
      <StyledNavigationButtons>
        <LogoButton />
        <SignUpButtonArea>
          <p>회원이 아니신가요?</p>
          <SignUpButton>
            <Link to={'/signup'}>회원 가입하기</Link>
          </SignUpButton>
        </SignUpButtonArea>
      </StyledNavigationButtons>
    </div>
  );
};

export default NavigationButtons;
