import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  StyledLoginForm,
  LoginFormGroup,
  Label,
  Input,
  ErrorText,
  PasswordArea,
  TogglePasswordButton,
} from './LoginFormStyle';
import { LoginFormInput } from '../../../types/loginTypes';
import { AuthRes } from '../../../types/authTypes';
import Button from '../../@Shared/Buttons/Button/Button';
import { Eye, EyeOff } from 'react-feather'; // 아이콘을 위한 라이브러리
import { signIn } from '../../../apis/AuthApi/authApi';

// 로그인 폼 컴포넌트
const LoginForm: React.FC = () => {
  // useForm 훅을 사용하여 폼 상태 관리
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    mode: 'onBlur', // 입력 필드에서 포커스가 벗어날 때 유효성 검사 수행
  });

  const navigate = useNavigate();

  // 폼 제출 핸들러
  const onSubmit: SubmitHandler<LoginFormInput> = async data => {
    try {
      const response: AuthRes = await signIn(data.email, data.password);
      // 로그인 성공 시 토큰 저장 및 리다이렉트 처리
      localStorage.setItem('accessToken', response.accessToken);
      navigate('/');
    } catch (error) {
      // 로그인 실패 시 에러 처리
      console.error('로그인 실패: ', error);
      alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
    }
  };

  // 비밀번호 가시성 상태 관리
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <LoginFormGroup>
        <Label htmlFor="email">이메일</Label>
        <Input
          type="email"
          id="email"
          {...register('email', {
            required: '이메일은 필수 항목입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '이메일 형식으로 작성해 주세요.',
            },
          })}
          placeholder="codeit@codeit.com"
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      </LoginFormGroup>
      <LoginFormGroup>
        <Label htmlFor="password">비밀번호</Label>
        <PasswordArea>
          <Input
            type={showPassword ? 'text' : 'password'} // 비밀번호 가시성에 따라 타입 변경
            id="password"
            autoComplete="on"
            {...register('password', {
              required: '비밀번호는 필수 항목입니다.',
              minLength: {
                value: 8,
                message: '8자 이상 작성해 주세요.',
              },
            })}
            placeholder="비밀번호를 입력하세요"
          />
          <TogglePasswordButton
            type="button"
            onClick={() => setShowPassword(prev => !prev)} // 아이콘 클릭 시 가시성 토글
          >
            {showPassword ? <Eye size={16} /> : <EyeOff size={16} />} {/* 아이콘 변경 */}
          </TogglePasswordButton>
        </PasswordArea>
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
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
