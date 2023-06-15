import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from './components';
import { authActions } from './redux/features/authSlice';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { path } = useSelector(({ auth }) => auth);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) return;
    dispatch(authActions.login({ jwt, path: window.location.pathname }));
  }, [dispatch]);

  useEffect(() => {
    navigate(path);
  }, [path, navigate]);

  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default App;
