import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { PrimaryButton } from './UI';
import { apiUrl, colors } from '../assets/constants';

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
    border-radius: 0.5rem;

    li {
      font-size: 1.8rem;
      color: #f6f6f6;
      padding-left: 2.5rem;

      padding: 1.5rem 1.5rem 4.5rem;
      border-radius: 1rem;
      position: relative;
      min-width: 25rem;
      max-width: 50%;
      word-wrap: break-word;

      .val {
        font-weight: 700;
        margin-right: auto;
      }

      .date {
        position: absolute;
        bottom: 30px;
        right: 10px;
        font-size: 1rem;
      }
    }
  }
`;

const Comments = () => {
  const [questionInput, setQuestionInput] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get(`${apiUrl}/comments`);

      setComments(data.comments);
      console.log(data);
    };

    getData();
  }, []);

  const changeQuestionHandler = (e) => setQuestionInput(e.target.value);

  const submitCommentsHandler = async (e) => {
    e.preventDefault();
    await axios.post(`${apiUrl}/comments`, {
      comment: questionInput,
      writeBy: 'user',
    });
    setComments((prevVal) => [
      ...prevVal,
      {
        comment: questionInput,
        createdAt: `maintenant`,
        writeBy: 'user',
      },
    ]);
    setQuestionInput('');
  };

  const userCommentStyle = {
    clipPath:
      'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 89% 100%, 50% 75%, 0% 75%)',
    background: colors.principalColor400,
    marginRight: 'auto',
  };
  const adminCommentStyle = {
    clipPath:
      'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 33% 100%, 50% 75%, 0% 75%)',
    background: colors.secondaryColor500,
    marginLeft: 'auto',
  };

  const questionsContent = comments.map((comment, i) => (
    <li
      key={i}
      style={comment.writeBy === 'user' ? userCommentStyle : adminCommentStyle}
    >
      <span className="val">{comment?.comment}</span>
      <span className="date">{comment?.createdAt.slice(0, 10)}</span>
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
          value={questionInput}
          onChange={changeQuestionHandler}
        />
        <PrimaryButton type="submit">Envoyer</PrimaryButton>
      </form>
      <ul>{questionsContent}</ul>
    </CommentsContainer>
  );
};

export default Comments;
