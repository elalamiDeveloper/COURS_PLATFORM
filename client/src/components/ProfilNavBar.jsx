import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../assets/constants';

import { authActions } from '../redux/features/authSlice';

const ProfilNavBarContainer = styled.nav`
  position: absolute;
  top: 100%;
  right: 0;
  padding: 1.5rem 9rem 2rem 3rem;
  min-width: 30rem;
  background: ${colors.principalColor600};
  border-radius: 0 0 0 0.5rem;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  transition: 0.3s;

  &.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: hidden;

    .item * {
      background: transparent;
      font-size: 1.6rem;
      transition: 0.3s;

      &:hover {
        color: ${colors.principalColor400};
        padding-left: 1.5rem;
      }
    }
  }
`;

const ProfilNavBar = ({ onShowProfilNavBar, className }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    onShowProfilNavBar();
  };

  return (
    <ProfilNavBarContainer className={className}>
      <ul className="list">
        <li className="item">
          <NavLink to={'/account'} onClick={onShowProfilNavBar}>
            Mon Compte
          </NavLink>
        </li>
        <li className="item">
          <button onClick={logoutHandler}>Se Déconnecter</button>
        </li>
      </ul>
    </ProfilNavBarContainer>
  );
};

export default ProfilNavBar;
