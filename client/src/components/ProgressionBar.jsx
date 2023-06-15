import styled from 'styled-components';

const ProgressionBarContainer = styled.div`
  background: #f6f6f6;
  padding: 1.5rem;
  color: #333;
  border-radius: 0.5rem;

  .title {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .progression {
    border: 0.1rem solid #333;
    border-radius: 50px;
    overflow: hidden;
    height: 2rem;
    margin-bottom: 1rem;
  }

  .text {
    font-size: 1.6rem;
  }
`;

const ProgressionBar = () => {
  return (
    <ProgressionBarContainer>
      <h3 className="title">Title</h3>
      <div className="progression">
        <div className="progression-ok"></div>
      </div>
      <span className="text">0% effectuer</span>
    </ProgressionBarContainer>
  );
};

export default ProgressionBar;
