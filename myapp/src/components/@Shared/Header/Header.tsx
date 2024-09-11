import { useNavigate } from 'react-router-dom';
import Button from '../Buttons/Button/Button';
import LogoButton from '../Buttons/LogoButton/LogoButton';
import {
  FavoriteBtn,
  HeaderContainer,
  HeaderList,
  LogoutBtn,
  ProfileBtn,
  ProfileImg,
  ProfileNickName,
  ProFileSection,
} from './HeaderStyle';
import { useEffect, useState } from 'react';
import { getUserInfo } from '../../../apis/AuthApi/authApi';
import { UserRes } from '../../../types/authTypes';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserRes>();
  const navigate = useNavigate();

  const handleLoginBtn = () => {
    navigate('/login');
  };

  const handleLogoutBtn = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    navigate('/login');
  };
  const handleClickProfileBtn = () => {
    setIsVisible(prev => !prev);
  };

  const fetchUserInfo = async () => {
    const response = await getUserInfo();

    setUserProfile(response);
  };

  const isTokenExpired = (token: string): boolean => {
    // 토큰의 payload 부분을 문자열로 디코딩
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));

    // 현재 시간과 토큰 만료 시간 비교 (exp는 초 단위이므로 1000 곱함)
    const currentTime = Date.now() / 1000;
    return decodedPayload.exp < currentTime;
  };

  const checkTokenAndRedirect = () => {
    const token = localStorage.getItem('accessToken');
    if (token && isTokenExpired(token)) {
      // 토큰이 만료되었으면 삭제하고 로그아웃 상태로 설정
      localStorage.removeItem('accessToken');
      alert('토큰이 만료되었습니다. 다시 로그인 해주세요.');
      setIsLoggedIn(false); // 로그아웃 상태
    } else if (token) {
      // 토큰이 유효하면 로그인 상태로 설정
      fetchUserInfo();
      setIsLoggedIn(true); // 로그인 상태
    } else {
      // 토큰이 없으면 로그아웃 상태로 설정
      setIsLoggedIn(false); // 로그아웃 상태
    }
  };
  // 페이지 로드 시 토큰 만료 여부 확인
  useEffect(() => {
    checkTokenAndRedirect();
  }, []);
  return (
    <HeaderContainer>
      <HeaderList>
        <LogoButton width={'9rem'} height={'2rem'} />
        {isLoggedIn ? (
          <ProFileSection>
            <FavoriteBtn to="/favorite">⭐️ 즐겨찾기</FavoriteBtn>
            <ProfileBtn onClick={handleClickProfileBtn}>
              <ProfileImg src={userProfile?.imageSource} alt="profileImg" />
              <ProfileNickName>{userProfile?.name}</ProfileNickName>
              <LogoutBtn $show={isVisible} onClick={handleLogoutBtn}>
                로그아웃
              </LogoutBtn>
            </ProfileBtn>
          </ProFileSection>
        ) : (
          <Button onClick={handleLoginBtn}>로그인</Button>
        )}
      </HeaderList>
    </HeaderContainer>
  );
};

export default Header;
