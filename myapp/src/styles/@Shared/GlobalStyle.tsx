import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
  }

html{
  font-size:62.5%;
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
