import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { CourContent } from '../components';

const CourPageContainer = styled.main``;

const CourPage = () => {
  return (
    <CourPageContainer className="l">
      <CourContent />
    </CourPageContainer>
  );
};

export default CourPage;
