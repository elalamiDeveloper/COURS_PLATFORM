import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { CourCard } from '.';
import { apiUrl } from '../assets/constants';

const CoursListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
`;

const CoursList = () => {
  const [cours, setCours] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get(
        `${apiUrl}/formations?fields=_id,image,title,duration,durationValidated,description`
      );

      setCours(data.formations);
    };

    getData();
  }, []);

  return (
    <CoursListContainer>
      {cours.map((cour) => (
        <CourCard key={cour._id} {...cour} />
      ))}
    </CoursListContainer>
  );
};

export default CoursList;
