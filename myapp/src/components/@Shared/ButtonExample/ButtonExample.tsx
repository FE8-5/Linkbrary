import React from 'react';
import Button from '../Button/Button';

/* Button 컴포넌트의 다양한 사용 예제입니다. */
const ButtonExamples: React.FC = () => {
  return (
    <div>
      <h1>Button Component Examples</h1>

      {/* 기본 버튼 예제 */}
      <div>
        <h2>Default Button</h2>
        <Button
          onClick={() => alert('Default Button Clicked!')} // 버튼 클릭 시 알림
        >
          Default
        </Button>
      </div>

      {/* 사이즈가 작은 버튼 예제 */}
      <div>
        <h2>Small Button</h2>
        <Button
          onClick={() => alert('Small Button Clicked!')} // 버튼 클릭 시 알림
          size={{ width: '80px', height: '37px' }} // 버튼의 너비와 높이를 설정합니다.
          padding={{ vertical: '10px', horizontal: '16px' }} // 버튼의 수직 및 수평 패딩을 설정합니다.
          fontSize="14px" // 버튼 텍스트의 폰트 크기를 설정합니다.
        >
          Small
        </Button>
      </div>

      {/* 사이즈가 중간인 버튼 예제 */}
      <div>
        <h2>Medium Button</h2>
        <Button
          onClick={() => alert('Medium Button Clicked!')} // 버튼 클릭 시 알림
          size={{ width: '325px', height: '53px' }} // 버튼의 너비와 높이를 설정합니다.
          padding={{ vertical: '16px', horizontal: '20px' }} // 버튼의 수직 및 수평 패딩을 설정합니다.
          fontSize="18px" // 버튼 텍스트의 폰트 크기를 설정합니다.
        >
          Medium
        </Button>
      </div>

      {/* 사이즈가 큰 버튼 예제 */}
      <div>
        <h2>Large Button</h2>
        <Button
          onClick={() => alert('Large Button Clicked!')} // 버튼 클릭 시 알림
          size={{ width: '400px', height: '53px' }} // 버튼의 너비와 높이를 설정합니다.
          padding={{ vertical: '16px', horizontal: '20px' }} // 버튼의 수직 및 수평 패딩을 설정합니다.
          fontSize="18px" // 버튼 텍스트의 폰트 크기를 설정합니다.
        >
          Large
        </Button>
      </div>

      {/* 비활성화된 버튼 예제 */}
      <div>
        <h2>Disabled Button</h2>
        <Button
          onClick={() => alert('Disabled Button Clicked!')} // 버튼 클릭 시 알림
          disabled // 버튼을 비활성화 상태로 설정합니다.
        >
          Disabled
        </Button>
      </div>

      {/* 활성화된 버튼 예제 */}
      <div>
        <h2>Active Button</h2>
        <Button
          onClick={() => alert('Active Button Clicked!')} // 버튼 클릭 시 알림
          active // 버튼을 활성화 상태로 설정합니다.
        >
          Active
        </Button>
      </div>
    </div>
  );
};

export default ButtonExamples;
