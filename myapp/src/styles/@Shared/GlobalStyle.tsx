import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

html{
  font-size:62.5%;
}
body{
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

button {
    border: none;
    cursor: pointer;
    padding: 0;

    &:disabled {
      cursor: not-allowed;
    }
  }
  
  a {
    text-decoration: none;
  }

  input, textarea {
    outline: none;
    border: none;
  }

  textarea{
    resize: none;
  }
  .modal-open {
  overflow: hidden;
}
`;

export default GlobalStyle;
