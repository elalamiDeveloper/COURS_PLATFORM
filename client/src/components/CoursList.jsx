import { Link } from 'react-router-dom';
import { Player } from 'video-react';

import styled from 'styled-components';

const CoursListContainer = styled.ul``;

const CoursList = () => {
  const testID = 'testID';
  return (
    <CoursListContainer>
      <Player
        playsInline
        src="https://res.cloudinary.com/df8jkm00a/video/upload/v1686744540/Comment_utiliser_les_chemins_de_votre_syst%C3%A8me_de_fichier_en_Node.js_-_Show_me_Node.js_Ep._14_pukxl3.mp4"
      />
    </CoursListContainer>
  );
};

export default CoursList;
