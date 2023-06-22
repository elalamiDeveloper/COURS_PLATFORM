/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../assets/constants';

const ProgressionBarContainer = styled.div`
  background: #f6f6f6;
  padding: 1.5rem;
  color: #333;
  border-radius: 0.5rem;

  .title {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .progression {
    border: 0.1rem solid #333;
    border-radius: 50px;
    overflow: hidden;
    height: 2rem;
    margin-bottom: 1rem;

    .progression-ok {
      background-color: ${colors.principalColor400};
      height: 100%;
    }
  }

  .text {
    font-size: 1.6rem;
  }
`;

const ProgressionBar = () => {
  const { duration, durationValidated, title } = useSelector(
    ({ formation }) => formation
  );
  const progression = Number.parseInt((durationValidated * 100) / duration);

  return (
    <ProgressionBarContainer>
      <h3 className="title">{title}</h3>
      <div className="progression">
        <div
          className="progression-ok"
          style={{ width: `${progression}%` }}
        ></div>
      </div>
      <span className="text">{progression}% effectuer</span>
    </ProgressionBarContainer>
  );
};

export default ProgressionBar;
