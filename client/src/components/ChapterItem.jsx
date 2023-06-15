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

    .title {
      font-size: 1.8rem;
      font-weight: 700;

      span {
        text-transform: uppercase;
        font-weight: inherit;
        margin-right: 0.5rem;
      }
    }

    .arrow-btn {
      font-size: 2.5rem;
      color: inherit;
      font-weight: 700;
      background: transparent;
    }
  }
`;

const ChapterItem = ({ nbrOfChapter, titre, videos }) => {
  const [videoListActive, setVideoListActive] = useState(false);

  const toggleVideosListHandler = () =>
    setVideoListActive((prevVal) => !prevVal);

  return (
    <ChapterItemContent>
      <div className="header">
        <h4 className="title">
          <span>Chapitre {nbrOfChapter}</span>: {titre}
        </h4>
        <button className="arrow-btn" onClick={toggleVideosListHandler}>
          <FaArrowDown />
        </button>
      </div>

      <VideosList videos={videos} className={videoListActive ? 'active' : ''} />
    </ChapterItemContent>
  );
};

export default ChapterItem;
