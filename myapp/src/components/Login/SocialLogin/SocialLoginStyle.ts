import styled from 'styled-components';

// 소셜 로그인 전체 컨테이너 스타일
export const StyledSocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--gray20);
  color: #373740; // 피그마 기준으로 설정했지만, 검정색이 더 나아보이긴합니다.
  border: 0.1rem solid var(--gray30);
  border-radius: 0.8rem;
  width: 100%;
  height: 6.6rem;
  padding: 1.2rem 2.4rem;
  margin-top: 3.2rem;
`;

// 텍스트 스타일
export const Text = styled.span`
  font-size: 1.4rem;
`;

export const IconButtonArea = styled.div`
  display: flex;
  gap: 1.6rem;
`;

// 아이콘 버튼 스타일
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 4.2rem;
    height: auto; // 비율 유지
  }
`;
