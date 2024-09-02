import facebookIc from '../../../assets/Icons/facebook.png';
import twitterIc from '../../../assets/Icons/twitter.png';
import youtubeIc from '../../../assets/Icons/youtube.png';
import instagramIc from '../../../assets/Icons/instagram.png';
import { FooterBox, FooterContainer, FooterLinkBar, FooterLinks, MiniLogoBox, SinceText } from './footerStyle';

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
              <img src={facebookIc} width="2.0rem" height="2.0rem" alt="페이스북 링크 아이콘" />
            </a>
            <a href="https://www.codeit.kr" target="_blank">
              <img src={twitterIc} width="2.0rem" height="2.0rem" alt="트위터 링크 아이콘" />
            </a>
            <a href="https://www.codeit.kr" target="_blank">
              <img src={youtubeIc} width="2.0rem" height="2.0rem" alt="유튜브 링크 아이콘" />
            </a>
            <a href="https://www.codeit.kr" target="_blank">
              <img src={instagramIc} width="2.0rem" height="2.0rem" alt="인스타그램 링크 아이콘" />
            </a>
          </MiniLogoBox>
        </FooterLinkBar>
      </FooterBox>
    </FooterContainer>
  );
}

export default Footer;
