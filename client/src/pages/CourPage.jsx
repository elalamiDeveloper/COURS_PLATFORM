import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { formationActions } from '../redux/features/formationSlice';
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
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get(`${apiUrl}/formations/${id}`);

      dispatch(formationActions.initFormation(data.formation));
    };

    getData();
  }, [id, dispatch]);

  // console.log(formation);

  return (
    <CourPageContainer>
      <ProgressionBar />
      <VideoContent />
      <ChaptersList />
    </CourPageContainer>
  );
};

export default CourPage;
