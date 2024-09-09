import facebookIc from '../../../assets/Icons/facebook.png';
import twitterIc from '../../../assets/Icons/twitter.png';
import youtubeIc from '../../../assets/Icons/youtube.png';
import instagramIc from '../../../assets/Icons/instagram.png';
import { FooterBox, FooterContainer, FooterLinkBar, FooterLinks, MiniLogoBox, SinceText } from './FooterStyle';

function Footer() {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterLinkBar>
          <SinceText>©codeit - 2023</SinceText>
          <FooterLinks>
            <a href="https://www.codeit.kr" target="_blank">
              Privacy Policy
            </a>
            <a href="https://www.codeit.kr" target="_blank">
              FAQ
            </a>
          </FooterLinks>
          <MiniLogoBox>
            <a href="https://www.codeit.kr" target="_blank">
              <img src={facebookIc} width="20.0rem" height="20.0rem" alt="페이스북_링크_아이콘" />
            </a>
            <a href="https://www.codeit.kr" target="_blank">
              <img src={twitterIc} width="20.0rem" height="20.0rem" alt="트위터_링크_아이콘" />
            </a>
            <a href="https://www.codeit.kr" target="_blank">
              <img src={youtubeIc} width="20.0rem" height="20.0rem" alt="유튜브_링크_아이콘" />
            </a>
            <a href="https://www.codeit.kr" target="_blank">
              <img src={instagramIc} width="20.0rem" height="20.0rem" alt="인스타그램_링크_아이콘" />
            </a>
          </MiniLogoBox>
        </FooterLinkBar>
      </FooterBox>
    </FooterContainer>
  );
}

export default Footer;
