import { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Player } from 'video-react';

const VideoContentContainer = styled.section`
  grid-row: span 2;
`;

const VideoContent = () => {
  const playerRef = useRef();
  const { url } = useSelector(({ activateVideo }) => activateVideo);
  console.log(url);

  const playVideoHandler = () => {
    const player = playerRef.current;
    console.log('Video Finished');
    console.log(player.duration());
  };

  return (
    <VideoContentContainer>
      <Player
        onEnded={playVideoHandler}
        playsInline
        src={url}
        ref={playerRef}
      />
    </VideoContentContainer>
  );
};

export default VideoContent;
