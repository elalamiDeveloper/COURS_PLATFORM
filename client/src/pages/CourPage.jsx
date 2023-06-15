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
  const { chapitres, title, durationValidated, duration } = formation;
  const progression = Number.parseInt((durationValidated * 100) / duration);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get(`${apiUrl}/formations/${id}`);

      setFormation(data.formation);
    };

    getData();
  }, [id]);

  console.log(formation);

  return (
    <CourPageContainer>
      <ProgressionBar progression={progression} title={title} />
      <VideoContent />
      <ChaptersList chapitres={chapitres} />
    </CourPageContainer>
  );
};

export default CourPage;
