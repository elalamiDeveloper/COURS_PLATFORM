import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Player } from 'video-react';

const VideoContentContainer = styled.section`
  grid-row: span 2;
`;

const VideoContent = () => {
  const { url } = useSelector(({ videoActivate }) => videoActivate);

  const playVideoHandler = () => {
    console.log('Video Finished');
  };

  return (
    <VideoContentContainer>
      <Player onEnded={playVideoHandler} playsInline src={url} />
    </VideoContentContainer>
  );
};

export default VideoContent;
