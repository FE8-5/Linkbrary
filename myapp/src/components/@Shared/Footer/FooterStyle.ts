import styled from 'styled-components';

export const FooterContainer = styled.div`
  max-width: 100%;
  max-height: 160px;
  height: 160px;
  background-color: #111322;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const FooterBox = styled.div`
  padding: 32px;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    padding: 32px 104px 108px;
  }
  @media screen and (min-width: 1200px) {
    padding: 32px 104px 108px;
  }
`;

export const FooterLinkBar = styled.div`
  color: #cfcfcf;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const SinceText = styled.p`
  position: absolute;
  top: 126px;
  color: #676767;
  font-size: 16px;
  font-weight: 400;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    position: static;
  }
  @media screen and (min-width: 1200px) {
    position: static;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
  justify-content: left;
  font-size: 16px;
  font-weight: 400;
  a {
    text-decoration: none;
    color: #cfcfcf;
  }
`;

export const MiniLogoBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
