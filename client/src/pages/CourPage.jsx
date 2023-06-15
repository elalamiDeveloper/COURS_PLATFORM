import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { ChaptersList, VideoContent, ProgressionBar } from '../components';
import { apiUrl } from '../assets/constants';

const CourPageContainer = styled.main`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: auto 1fr;
  gap: 2.5rem;
`;

const CourPage = () => {
  const params = useParams();
  const { id } = params;
  const [formation, setFormation] = useState({
    chapitres: [],
  });
  const { chapitres } = formation;

  // console.log(formation);

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
    <CourPageContainer>
      <ProgressionBar />
      <VideoContent />
      <ChaptersList chapitres={chapitres} />
    </CourPageContainer>
  );
};

export default CourPage;
