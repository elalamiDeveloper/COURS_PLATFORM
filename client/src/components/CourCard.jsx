/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../assets/constants';

const CourCardContainer = styled.li`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${colors.principalColor300};
  color: #333;
  gap: 2rem;
  text-align: center;
  border-radius: 0.5rem;

  .img-container {
  }

  .title {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  .text {
    font-size: 1.6rem;
    line-height: 1.4;
    text-align: start;
  }

  .progression {
    height: 2rem;
    width: 100%;
    background: #f6f6f6;
    border-radius: 5rem;
    overflow: hidden;

    .progression-ok {
      background: ${colors.principalColor400};
      height: 100%;
    }
  }

  .progression-title {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const CourCard = (props) => {
  console.log(props);
  const { _id, image, title, duration, durationValidated, description } = props;
  const progression = Number.parseInt((durationValidated * 100) / duration);

  console.log(progression);

  return (
    <CourCardContainer>
      <div className="img-container">
        <img src={image} alt="cour img" />
      </div>
      <h3 className="title">{title}</h3>
      <p className="text">{description.slice(0, 500)}...</p>
      <div className="progression">
        <div
          className="progression-ok"
          style={{ width: `${progression}%` }}
        ></div>
      </div>
      <span className="progression-title">{progression}%</span>
      <Link to={_id} className="link">
        Cours
      </Link>
    </CourCardContainer>
  );
};

export default CourCard;
