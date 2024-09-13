import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignupFormInput } from '../../../types/signupTypes';
import {
  StyledSignupForm,
  LoginFormGroup,
  Label,
  Input,
  ErrorText,
  PasswordArea,
  TogglePasswordButton,
} from './SignupFormStyle';
import Button from '../../@Shared/Buttons/Button/Button';
import { Eye, EyeOff } from 'react-feather'; // 아이콘을 위한 라이브러리
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../../apis/AuthApi/authApi';

// 회원가입 폼 컴포넌트
const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  // useForm 훅을 사용하여 폼 상태와 유효성 검사 설정
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormInput>();

  // 비밀번호 가시성 상태 관리
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  // 비밀번호 필드의 값을 실시간으로 관찰
  const password = watch('password');

  // 폼 제출 시 호출되는 함수
  const onSubmit: SubmitHandler<SignupFormInput> = async ({ email, password, name }) => {
    try {
      // authApi에서 정의한 signUp 함수 사용
      await signUp(email, password, name);

      alert('가입이 완료되었습니다');
      navigate('/login'); // 회원가입 성공 시 로그인 페이지로 이동
    } catch (error) {
      console.error('회원가입 실패: ', error);
      alert('회원가입 도중 오류가 발생했습니다');
    }
  };

  /**
   * @TODO
   * 1. 이메일 중복 확인 기능을 추가로 구현합니다. (백엔드에 구현)
   * 2. 이용약관 동의 대신에 캡차 기능을 추가로 구현합니다. (코드잇에 문의)
   */

  return (
    <StyledSignupForm onSubmit={handleSubmit(onSubmit)}>
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
        <Label htmlFor="name">이름</Label>
        <Input
          type="text"
          id="name"
          {...register('name', {
            required: '이름은 필수 항목입니다.',
            maxLength: {
              value: 10,
              message: '열 자 이하로 작성해주세요.',
            },
          })}
          placeholder="홍길동"
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </LoginFormGroup>
      <LoginFormGroup>
        <Label htmlFor="password">비밀번호</Label>
        <PasswordArea>
          <Input
            type={showPassword ? 'text' : 'password'} // 비밀번호 가시성에 따라 타입 변경
            id="password"
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
      <LoginFormGroup>
        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <PasswordArea>
          <Input
            type={showConfirmPassword ? 'text' : 'password'} // 비밀번호 가시성에 따라 타입 변경
            id="confirmPassword"
            {...register('confirmPassword', {
              validate: value => value === password || '비밀번호가 일치하지 않습니다.',
            })}
            placeholder="비밀번호를 다시 입력하세요"
          />
          <TogglePasswordButton
            type="button"
            onClick={() => setShowConfirmPassword(prev => !prev)} // 아이콘 클릭 시 가시성 토글
          >
            {showConfirmPassword ? <Eye size={16} /> : <EyeOff size={16} />} {/* 아이콘 변경 */}
          </TogglePasswordButton>
        </PasswordArea>
        {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
      </LoginFormGroup>
      <Button
        type="submit"
        size={{ width: '100%', height: '5.3rem' }}
        $padding={{ vertical: '1.6rem', horizontal: 'auto' }}
        $fontSize="1.8rem">
        회원가입
      </Button>
    </StyledSignupForm>
  );
};

export default SignupForm;
