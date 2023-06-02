import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { authActions } from '../redux/features/authSlice';

import { PrimaryButton } from '../components/UI';
import { colors, apiUrl } from '../assets/constants';

const LoginPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  min-height: calc(100vh - 7.6rem);

  .text {
    font-size: 5.2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 90%;
    max-width: 70rem;
    padding: 4rem;
    background: ${colors.principalColor600};
    border-radius: 0.5rem;

    .invalid-inputs-text {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${colors.errorColor};
    }

    .form-item {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .label {
        font-size: 1.6rem;
        font-weight: 500;
      }

      .input {
        padding: 1rem;
        background: ${colors.principalColor100};
        border: 2px solid transparent;
        border-radius: 0.5rem;

        &.invalid {
          border-color: ${colors.errorColor};
        }
      }
    }
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  const [inuputs, setInputs] = useState({ email: '', password: '' });
  const [inputsError, setInputsError] = useState({ valid: false, message: '' });
  const { email, password } = inuputs;

  useEffect(() => {
    if (!isAuth) return;
    navigate('/cours');
  }, []);

  // Handlers functions
  const inputChangeHandler = (e) =>
    setInputs((prevVal) => ({ ...prevVal, [e.target.name]: e.target.value }));

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(`${apiUrl}/users/login`, {
        email,
        password,
      });
      dispatch(authActions.login(data.token));
    } catch (err) {
      setInputsError((prevVal) => ({
        valid: true,
        message: err.response.data.message,
      }));
    }
  };

  return (
    <LoginPageContainer>
      <h1 className="text">Bienvenue !</h1>
      <form className="form" onSubmit={loginHandler}>
        {inputsError.valid && (
          <h2 className="invalid-inputs-text">{inputsError.message}</h2>
        )}
        <div className="form-item">
          <label htmlFor="email" className="label">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className={`input ${inputsError.valid && 'invalid'}`}
            placeholder="Entrer votre email"
            onChange={inputChangeHandler}
          />
        </div>

        <div className="form-item">
          <label htmlFor="password" className="label">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className={`input ${inputsError.valid && 'invalid'}`}
            placeholder="Entrer votre mot de passe"
            onChange={inputChangeHandler}
          />
        </div>

        <PrimaryButton type="submit">connect</PrimaryButton>
      </form>
    </LoginPageContainer>
  );
};

export default LoginPage;
