import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { SideBar } from '../components';

const AccountContainer = styled.div`
  display: flex;
  gap: 5rem;

  .account-section {
    flex: 1;
  }
`;

const AccountPage = () => {
  return (
    <AccountContainer>
      <SideBar />
      <section className="account-section">
        <Outlet />
      </section>
    </AccountContainer>
  );
};

export default AccountPage;
