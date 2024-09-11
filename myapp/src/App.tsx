import GlobalStyle from './styles/@Shared/GlobalStyle';
import PageRouter from './PageRouter';
import '../src/styles/@Shared/init.css';
import useGoogleAuth from './hooks/useGoogleAuth';

function App() {
  useGoogleAuth(); // 구글 API 초기화 훅 호충

  return (
    <>
      <GlobalStyle />
      <PageRouter />
    </>
  );
}

export default App;
