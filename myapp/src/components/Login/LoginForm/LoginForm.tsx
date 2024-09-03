import React, { useState } from 'react';
import { StyledLoginForm, LoginFormGroup, Label, Input } from './LoginFormStyle'; // 스타일 컴포넌트를 임포트
import Button from '../../@Shared/Buttons/Button/Button';

// 로그인 폼 컴포넌트
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 처리 로직
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
        <Input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
          required
        />
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
