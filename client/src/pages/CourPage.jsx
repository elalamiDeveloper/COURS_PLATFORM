import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { CourContent } from '../components';
import { apiUrl } from '../assets/constants';

const CourPageContainer = styled.main``;

const CourPage = () => {
  const params = useParams();
  const { id } = params;
  const [formation, setFormation] = useState({});

  useEffect(() => {
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get(`${apiUrl}/formations/${id}`);

      setFormation(data.formation);
    };

    getData();
  }, [id]);

  return (
    <CourPageContainer className="l">
      <CourContent />
      <VideoContent />
    </CourPageContainer>
  );
};

export default CourPage;
