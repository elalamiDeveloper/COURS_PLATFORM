import { useState } from 'react';
import styled from 'styled-components';

import { SearchBar } from '../components/UI';
import { CoursList } from '../components';

const CoursPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 3.2rem;
    }
  }

  .select-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;

    .select {
      padding: 1rem;
    }
  }
`;

const CoursPage = () => {
  const [coursStateValue, setCoursStateValue] = useState('tous');

  const changeCoursStateHandler = (e) => {
    setCoursStateValue(e.target.value);
  };

  return (
    <CoursPageContainer>
      <header className="header">
        <h2 className="title">Mes Cours</h2>
        <SearchBar />
      </header>

      <form className="select-form">
        <label htmlFor="coursState">Voir d&apos;autre cours</label>

        <select
          name="coursState"
          className="select"
          id="coursState"
          value={coursStateValue}
          onChange={changeCoursStateHandler}
        >
          <option value="tous">Tous</option>
          <option value="encours">En cours</option>
          <option value="termine">Terminé</option>
          <option value="expire">Expiré</option>
        </select>
      </form>

      <CoursList />
    </CoursPageContainer>
  );
};

export default CoursPage;
