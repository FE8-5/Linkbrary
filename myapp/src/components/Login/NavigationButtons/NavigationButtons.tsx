import React from 'react';
import { StyledNavigationButtons } from './NavigationButtonsStyle';
import LogoButton from '../../@Shared/Buttons/LogoButton/LogoButton';

const NavigationButtons: React.FC = () => {
  return (
    <div>
      <StyledNavigationButtons>
        <LogoButton />
        <p>회원이 아니신가요?</p>
      </StyledNavigationButtons>
    </div>
  );
};

export default NavigationButtons;
