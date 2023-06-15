import styled from 'styled-components';
import { Player } from 'video-react';

const VideoContentContainer = styled.section`
  grid-row: span 2;
`;

const VideoContent = () => {
  const playVideoHandler = (e) => {
    console.log(e.target.duration);
  };

  return (
    <VideoContentContainer>
      <Player
        onPlay={playVideoHandler}
        playsInline
        src="https://res.cloudinary.com/df8jkm00a/video/upload/v1686744540/Comment_utiliser_les_chemins_de_votre_syst%C3%A8me_de_fichier_en_Node.js_-_Show_me_Node.js_Ep._14_pukxl3.mp4"
      />
    </VideoContentContainer>
  );
};

export default VideoContent;
