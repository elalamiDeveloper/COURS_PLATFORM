import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { colors, apiUrl } from '../assets/constants';
import { ProfilNavBar } from '../components';

const HeaderContainer = styled.header`
  background: ${colors.principalColor600};
  padding: 3rem 9rem;
  width: 100%;
  position: relative;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;

    .nav-link {
      font-size: 1.6rem;
      transition: 0.3s;

      &:hover {
        color: ${colors.principalColor400};
        scale: 1.05;
      }

      &.profil {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        background: transparent;

        .profil-img {
          width: 5rem;
          border-radius: 50%;
          overflow: hidden;
        }
      }
    }
  }
`;

const Header = () => {
  const { isAuth, jwt } = useSelector(({ auth }) => auth);
  const [profilNavBarShown, setProfilNavBarShown] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    photo: '',
  });
  const { firstName, lastName, imageURL } = userInfo;

  useEffect(() => {
    if (!isAuth) return;
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get(
        `${apiUrl}/users/getMe?fields=firstName,lastName,imageURL`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      setUserInfo(data.user);
    };

    getData();
  }, [isAuth, jwt]);

  const showProfilNavBarHandler = () =>
    setProfilNavBarShown((prevVal) => setProfilNavBarShown(!prevVal));

  const navContent = isAuth ? (
    <>
      <NavLink to={'/cours'} className="nav-link">
        Mon Tableau de bord
      </NavLink>

      <button className="nav-link profil" onClick={showProfilNavBarHandler}>
        <span className="text">{`${firstName[0]}. ${lastName}`}</span>
        <div className="profil-img">
          <img src={imageURL} alt="" />
        </div>
      </button>
    </>
  ) : (
    <NavLink to={'/login'} className="nav-link">
      se connecter
    </NavLink>
  );

  return (
    <HeaderContainer>
      <nav className="nav">{navContent}</nav>
      <ProfilNavBar
        onShowProfilNavBar={showProfilNavBarHandler}
        className={profilNavBarShown && 'active'}
      />
    </HeaderContainer>
  );
};

export default Header;
