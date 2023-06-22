import { useState } from 'react';
import styled from 'styled-components';

import { PrimaryButton } from './UI';
import { colors } from '../assets/constants';

const CommentsContainer = styled.section`
  grid-column: span 2;

  h1 {
    font-size: 2.6rem;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  form {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2.5rem;

    input {
      flex: 1;
      font-size: 1.6rem;
      padding: 1.5rem 3rem;
      border-radius: 0.5rem;
      background: ${colors.principalColor200};
    }
  }

  ul {
    padding: 2.5rem;
    background: #f6f6f6;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li {
      font-size: 1.8rem;
      color: #333;
      display: flex;
      position: relative;
      padding-left: 2.5rem;

      &::before {
        content: '';
        position: absolute;
        left: 0rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: #333;
      }

      .val {
        font-weight: 700;
        margin-right: auto;
      }

      .date {
      }
    }
  }
`;

const Comments = () => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const changeQuestionHandler = (e) => setQuestion(e.target.value);

  const submitCommentsHandler = (e) => {
    e.preventDefault();
    setQuestions((prevVal) => [
      ...prevVal,
      { value: question, createdAt: new Date().toJSON().slice(0, 10) },
    ]);
  };

  const questionsContent = questions.map((question, i) => (
    <li key={i}>
      <span className="val">{question?.value}</span>
      <span className="date">{question?.createdAt}</span>
    </li>
  ));

  return (
    <CommentsContainer>
      <h1>
        Si vous avez des questions, posez-les ici et nous vous répondrons le
        plus tôt possible.
      </h1>
      <form onSubmit={submitCommentsHandler}>
        <input
          type="text"
          name="question"
          id="question"
          value={question}
          onChange={changeQuestionHandler}
        />
        <PrimaryButton type="submit">Envoyer</PrimaryButton>
      </form>
      <ul>{questionsContent}</ul>
    </CommentsContainer>
  );
};

export default Comments;
