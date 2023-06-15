/* eslint-disable react/prop-types */
import styled from 'styled-components';

const VideoItemContainer = styled.li`
  border-bottom: 0.1rem solid #333;
  font-weight: 500;

  button {
    padding: 1.5rem;
    font-size: 1.6rem;
    width: 100%;
    text-align: start;
  }
`;

const VideoItem = ({ titre, link }) => {
  const videoChangeHandler = () => {
    console.log(link);
  };

  return (
    <VideoItemContainer>
      <button onClick={videoChangeHandler}>{titre}</button>
    </VideoItemContainer>
  );
};

export default VideoItem;
