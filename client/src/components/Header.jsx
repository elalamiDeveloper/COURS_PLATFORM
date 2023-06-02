import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../assets/constants';

const HeaderContainer = styled.header`
  background: ${colors.principalColor600};
  padding: 3rem 9rem;
  width: 100%;

  .nav {
    display: flex;
    align-items: center;
    gap: 5rem;

    .nav-link {
      font-size: 1.6rem;
      transition: 0.3s;

      &:hover {
        color: ${colors.principalColor400};
        scale: 1.05;
      }
    }
  }
`;

const Header = () => {
  const isAuth = useSelector(({ auth }) => auth.isAuth);

  const navContent = isAuth ? (
    <>
      <NavLink to={'/account'} className="nav-link">
        Profil
      </NavLink>
      <NavLink to={'/cours'} className="nav-link">
        Mon Tableau de bord
      </NavLink>
    </>
  ) : (
    <NavLink to={'/login'} className="nav-link">
      se connecter
    </NavLink>
  );

  return (
    <HeaderContainer>
      <nav className="nav">{navContent}</nav>
    </HeaderContainer>
  );
};

export default Header;
