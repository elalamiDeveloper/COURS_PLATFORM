/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
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

const ChaptersList = () => {
  const { chapters } = useSelector(({ formation }) => formation);

  const chaptersListContent = chapters.map((chapter, i) => (
    <ChapterItem key={i} nbrOfChapter={i + 1} chapter={chapter} />
  ));

  return (
    <ChaptersListContainer>
      <ul className="chapters-list">{chaptersListContent}</ul>
    </ChaptersListContainer>
  );
};

export default ChaptersList;
