import GlobalStyle from './styles/@Shared/GlobalStyle';
import PageRouter from './PageRouter';
import '../src/styles/@Shared/init.css';
import useGoogleAuth from './hooks/useGoogleAuth';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  useGoogleAuth(); // 구글 API 초기화 훅 호충

  return (
    <GoogleOAuthProvider clientId="VITE_GOOGLE_CLIENT_ID">
      <GlobalStyle />
      <PageRouter />
    </GoogleOAuthProvider>
  );
}

export default App;
