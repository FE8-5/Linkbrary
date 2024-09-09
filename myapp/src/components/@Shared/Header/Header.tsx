import { HeaderContainer, HeaderList, LogoImage } from './HeaderStyle';
import logo from '../../../assets/Images/logo.png';
import CTA from '../../../assets/Images/CTA.png';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderList>
        <LogoImage src={logo} alt="Linkbrary Logo" width="133.0rem" height="24.0rem" />
        <LogoImage src={CTA} alt="Linkbrary Logo" width="128.0rem" height="53.0rem" />
      </HeaderList>
    </HeaderContainer>
  );
};

export default Header;
