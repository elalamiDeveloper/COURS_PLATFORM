/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { FaArrowDown } from '../assets/icons';
import { VideosList } from '.';
import { useState } from 'react';

const ChapterItemContent = styled.li`
  .header {
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.3rem solid #333;
    cursor: pointer;

    .title {
      font-size: 1.8rem;
      font-weight: 700;

      span {
        text-transform: uppercase;
        font-weight: inherit;
        margin-right: 0.5rem;
      }
    }

    .icon {
      font-size: 2.5rem;
      color: inherit;
      font-weight: 700;
      background: transparent;
      transition: 0.3s;
    }
  }
`;

const ChapterItem = ({ nbrOfChapter, titre, videos }) => {
  const [videoListActive, setVideoListActive] = useState(false);

  const toggleVideosListHandler = () =>
    setVideoListActive((prevVal) => !prevVal);

  return (
    <ChapterItemContent>
      <div className="header" onClick={toggleVideosListHandler}>
        <h4 className="title">
          <span>Chapitre {nbrOfChapter}</span>: {titre}
        </h4>
        <FaArrowDown
          className="icon"
          style={{ transform: videoListActive && 'rotate(180deg)' }}
        ></FaArrowDown>
      </div>

      <VideosList videos={videos} className={videoListActive ? 'active' : ''} />
    </ChapterItemContent>
  );
};

export default ChapterItem;
