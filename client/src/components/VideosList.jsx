/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { VideoItem } from '.';

const VideosListContainer = styled.ul`
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  display: none;
  transition: 0.3s;

  &.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    display: block;
  }
`;

const VideosList = ({ videos, className }) => {
  const videosContent = videos.map((video, i) => (
    <VideoItem key={i} {...video} />
  ));

  return (
    <VideosListContainer className={className}>
      {videosContent}
    </VideosListContainer>
  );
};

export default VideosList;
