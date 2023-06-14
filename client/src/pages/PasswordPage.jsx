import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { apiUrl, colors } from '../assets/constants';
import { PrimaryButton } from '../components/UI';

const PasswordPageContainer = styled.section`
  .title {
    font-size: 4.2rem;
    margin-bottom: 5rem;
  }

  .password-form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .item {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      label {
        font-size: 1.8rem;
      }

      input {
        padding: 1rem;
        border-radius: 0.2rem;
        background: ${colors.principalColor100};
        border: 0.2rem solid transparent;

        &.error-input {
          border-color: ${colors.errorColor};
          background: ${colors.errorColorBg};
        }
      }
    }

    .valid-text {
      color: ${colors.validColor};
      font-size: 1.6rem;
    }

    .error-text {
      color: ${colors.errorColor};
      font-size: 1.6rem;
    }

    .password-form-btn {
      margin-right: auto;
    }
  }
`;

const PasswordPage = () => {
  const { jwt } = useSelector(({ auth }) => auth);
  const [error, setError] = useState({ valid: false, message: '' });
  const [inputs, setInputs] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const { currentPassword, newPassword, confirmPassword } = inputs;

  const inputsChangeHandler = (e) =>
    setInputs((prevVal) => ({ ...prevVal, [e.target.name]: e.target.value }));

  const changePasswordSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      await axios.post(`${apiUrl}/users/updatePassword`, inputs, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      setError({
        valid: false,
        message: 'votre nouveau mot de passe est enregistré',
      });
      setInputs({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (err) {
      setError({
        valid: true,
        message: err.response.data.message,
      });
      setInputs({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <PasswordPageContainer>
      <h2 className="title">Changer le mot de passe</h2>

      <form className="password-form" onSubmit={changePasswordSubmitHandler}>
        <div className="item">
          <label htmlFor="currentPassword">Mot de passe actuel</label>
          <input
            className={error.valid ? 'error-input' : undefined}
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            onChange={inputsChangeHandler}
          />
        </div>

        <div className="item">
          <label htmlFor="newPassword">Changer le mot de passe</label>
          <input
            className={error.valid ? 'error-input' : undefined}
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={inputsChangeHandler}
          />
        </div>

        <div className="item">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            className={error.valid ? 'error-input' : undefined}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={inputsChangeHandler}
          />
        </div>

        <span className={error.valid ? 'error-text' : 'valid-text'}>
          {error.message}
        </span>
        <PrimaryButton type="submit" className="password-form-btn">
          Enregistrer
        </PrimaryButton>
      </form>
    </PasswordPageContainer>
  );
};

export default PasswordPage;
