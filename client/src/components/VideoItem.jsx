/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { activateVideoActions } from '../redux/features/activateVideoSlice';
import { colors } from '../assets/constants';

const VideoItemContainer = styled.li`
  border-bottom: 0.1rem solid #333;

  button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2.5rem;
    padding: 1.5rem;
    font-size: 1.6rem;
    width: 100%;
    text-align: start;

    .validation {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 0.25rem solid #f6f6f6;
      outline: ${colors.principalColor300} solid;
    }

    .text {
      color: ${colors.principalColor400};
    }
  }
`;

const VideoItem = ({ title, url, finished }) => {
  const dispatch = useDispatch();

  const videoChangeHandler = () =>
    dispatch(activateVideoActions.playVideo({ url }));

  return (
    <VideoItemContainer onClick={videoChangeHandler}>
      <button>
        <div
          className="validation"
          style={{ background: finished && colors.principalColor400 }}
        ></div>
        <p className="text">{title}</p>
      </button>
    </VideoItemContainer>
  );
};

export default VideoItem;
