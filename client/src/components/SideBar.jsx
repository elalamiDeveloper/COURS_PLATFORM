import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../assets/constants';

const SideBarContainer = styled.aside`
  .list {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-width: 25rem;

    background: ${colors.principalColor600};
    font-size: 1.6rem;
    border-radius: 0.5rem;

    .item {
      .link {
        &:link,
        &:visited {
          padding: 2rem 3rem 2rem 1.5rem;
          border-left: 0.5rem solid transparent;
          transition: 0.3s;
        }

        &:hover,
        &:active,
        &.active {
          border-color: ${colors.principalColor400};
          color: ${colors.principalColor400};
          padding-left: 3rem;
          padding-right: 1.5rem;
        }
      }
    }
  }
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      <ul className="list">
        <li className="item">
          <NavLink
            to={'profil'}
            className={({ isActive }) => (isActive ? 'active link' : 'link')}
          >
            Profil
          </NavLink>
        </li>

        <li className="item">
          <NavLink
            to={'password'}
            className={({ isActive }) => (isActive ? 'active link' : 'link')}
          >
            Mot de passe
          </NavLink>
        </li>
      </ul>
    </SideBarContainer>
  );
};

export default SideBar;
