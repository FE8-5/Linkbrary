import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Links from './pages/Links';
import Favorite from './pages/Favorite';

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/links'} element={<Links />} />
        <Route path={'/favorite'} element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
