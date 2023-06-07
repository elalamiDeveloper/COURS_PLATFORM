import { FiAlertTriangle } from '../assets/icons';
import styled from 'styled-components';

const ErrorPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.6rem;
  height: 100vh;

  .title {
    font-size: 6.2rem;
  }

  .icon {
    font-size: 9.2rem;
  }
`;

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <h1 className="title">Page Not Found</h1>
      <FiAlertTriangle className="icon" />
    </ErrorPageContainer>
  );
};

export default ErrorPage;
