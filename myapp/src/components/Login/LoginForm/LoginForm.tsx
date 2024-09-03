import React, { useState } from 'react';
import { StyledLoginForm, LoginFormGroup, Label, Input, PasswordArea, TogglePasswordButton } from './LoginFormStyle';
import Button from '../../@Shared/Buttons/Button/Button';
import { Eye, EyeOff } from 'react-feather'; // 아이콘을 위한 라이브러리

// 로그인 폼 컴포넌트
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 가시성 상태

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 처리 로직 (임시)
    console.log('Logging in with', email, password);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <LoginFormGroup>
        <Label htmlFor="email">이메일</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="codeit@codeit.com"
          required
        />
      </LoginFormGroup>
      <LoginFormGroup>
        <Label htmlFor="password">비밀번호</Label>
        <PasswordArea>
          <Input
            type={showPassword ? 'text' : 'password'} // 비밀번호 가시성에 따라 타입 변경
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
          />
          <TogglePasswordButton
            type="button"
            onClick={() => setShowPassword(prev => !prev)} // 아이콘 클릭 시 가시성 토글
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />} {/* 아이콘 변경 */}
          </TogglePasswordButton>
        </PasswordArea>
      </LoginFormGroup>
      <Button
        type="submit"
        size={{ width: '100%', height: '5.3rem' }}
        padding={{ vertical: '1.6rem', horizontal: 'auto' }}
        fontSize="1.8rem">
        로그인
      </Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
