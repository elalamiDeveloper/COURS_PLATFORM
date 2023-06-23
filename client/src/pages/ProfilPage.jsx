import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { PrimaryButton } from '../components/UI';
import { colors, apiUrl } from '../assets/constants';
import { useSelector } from 'react-redux';

const ProfilPageContainer = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5rem;

  .title {
    grid-column: span 2;
    font-size: 4.2rem;
  }

  .img-container {
    align-self: start;
    justify-self: center;

    .img {
      width: 20rem;
      overflow: hidden;
      border-radius: 50%;
      margin: auto;
      margin-bottom: 2.5rem;
    }

    .text {
      font-size: 1.6rem;
      text-align: center;
    }
  }

  .info-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;

    .item {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &.long {
        grid-column: span 2;
      }

      label {
        font-size: 1.8rem;
      }

      input {
        padding: 1rem;
        border-radius: 0.2rem;
        background: ${colors.principalColor100};
      }
    }
  }
`;

const ProfilPage = () => {
  const { isAuth, jwt } = useSelector(({ auth }) => auth);
  const [inputs, setInputs] = useState({
    email: '',
    firstName: '',
    lastName: '',
    society: '',
    imageURL: '',
  });
  const { email, firstName, lastName, society, imageURL } = inputs;

  useEffect(() => {
    if (!isAuth) return;
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get(
        `${apiUrl}/users/getMe?fields=firstName,lastName,imageURL,email,society`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      setInputs(data.user);
    };

    getData();
  }, [isAuth, jwt]);

  const changeInputsHandler = (e) =>
    setInputs((prevVal) => ({ ...prevVal, [e.target.name]: e.target.value }));

  const submitInputsHandler = async (e) => {
    e.preventDefault();
    await axios.patch(`${apiUrl}/users/updateMe`, inputs, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  };

  return (
    <ProfilPageContainer>
      <h2 className="title">Modifier le profil</h2>

      <div className="img-container">
        <div className="img">
          <img src={imageURL} alt="photo de profil" />
        </div>
        <p className="text">TÉLÉCHARGER UNE NOUVELLE IMAGE</p>
      </div>

      <form className="info-form" onSubmit={submitInputsHandler}>
        <div className="item long">
          <label htmlFor="email">Courriel</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={changeInputsHandler}
          />
        </div>

        <div className="item">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={changeInputsHandler}
          />
        </div>

        <div className="item">
          <label htmlFor="lastName">nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={changeInputsHandler}
          />
        </div>

        <div className="item long">
          <label htmlFor="society">Entreprise</label>
          <input
            type="text"
            id="society"
            name="society"
            value={society}
            onChange={changeInputsHandler}
          />
        </div>

        <PrimaryButton type="submit">Enregistrer</PrimaryButton>
      </form>
    </ProfilPageContainer>
  );
};

export default ProfilPage;
