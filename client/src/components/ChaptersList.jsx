/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { ChapterItem } from '.';

const ChaptersListContainer = styled.aside`
  background: #f6f6f6;
  color: #333;
  border-radius: 0.5rem;

  .chapters-list {
    display: flex;
    flex-direction: column;
  }
`;

const ChaptersList = ({ chapitres }) => {
  const chaptersListContent = chapitres.map((chapter, i) => (
    <ChapterItem key={i} nbrOfChapter={i + 1} {...chapter} />
  ));

  return (
    <ChaptersListContainer>
      <ul className="chapters-list">{chaptersListContent}</ul>
    </ChaptersListContainer>
  );
};

export default ChaptersList;
