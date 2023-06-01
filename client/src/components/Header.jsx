import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header``;

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to={'/login'}>se connecter</NavLink>
    </HeaderContainer>
  );
};

export default Header;
