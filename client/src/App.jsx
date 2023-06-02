import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from './components';
import { authActions } from './redux/features/authSlice';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(({ auth }) => auth.isAuth);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) dispatch(authActions.login(jwt));
  }, []);

  useEffect(() => {
    if (isAuth) navigate('/cours');
    if (!isAuth) navigate('/login');
  }, [isAuth]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
