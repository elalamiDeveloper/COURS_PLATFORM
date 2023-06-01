import { Outlet } from 'react-router-dom';

import { Header } from './components';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
