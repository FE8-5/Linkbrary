import React from 'react';
import { StyledNavigationButtons, SignUpButtonArea, SignUpButton } from './NavigationButtonsStyle';
import LogoButton from '../../@Shared/Buttons/LogoButton/LogoButton';
import { Link } from 'react-router-dom';

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
