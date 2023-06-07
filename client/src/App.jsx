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
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) navigate('/cours');
    if (!isAuth) navigate('/login');
  }, [isAuth, navigate]);

  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
