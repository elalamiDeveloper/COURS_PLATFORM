import styled from 'styled-components';

import { VideosList } from '.';

const ChaptersListContainer = styled.ul``;

const ChaptersList = ({ chapters }) => {
  return (
    <ChaptersListContainer>
      <h4>
        Chapitre {nbrOfChapter} : {title}
      </h4>
      <VideosList />
    </ChaptersListContainer>
  );
};

export default ChaptersList;
