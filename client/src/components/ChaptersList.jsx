import styled from 'styled-components';

import { VideosList } from '.';

const ChaptersListContainer = styled.ul``;

const ChaptersList = () => {
  return (
    <ChaptersListContainer>
      <h4></h4>
      <VideosList />
    </ChaptersListContainer>
  );
};

export default ChaptersList;
