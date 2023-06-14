import styled from 'styled-components';

import { VideoItem } from '.';

const VideosListContainer = styled.ul``;

const VideosList = () => {
  return (
    <VideosListContainer>
      <VideoItem />
    </VideosListContainer>
  );
};

export default VideosList;
