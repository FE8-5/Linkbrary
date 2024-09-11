import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Links from './pages/Links';
import Favorite from './pages/Favorite';
import PrivateRoute from './components/@Shared/PrivateRoute/PrivateRoute';

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route
          path={'/links'}
          element={
            <PrivateRoute>
              <Links />
            </PrivateRoute>
          }
        />
        <Route
          path={'/favorite'}
          element={
            <PrivateRoute>
              <Favorite />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
