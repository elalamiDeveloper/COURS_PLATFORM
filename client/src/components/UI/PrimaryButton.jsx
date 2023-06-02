import styled from 'styled-components';
import { colors } from '../../assets/constants';

const PrimaryButtonContainer = styled.button`
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 0.5rem;
  background: ${colors.secondaryColor400};
  color: ${colors.principalColor600};
  transition: 0.3s;

  &:hover {
    background: ${colors.secondaryColor500};
  }
`;

const PrimaryButton = ({ children, className, type, onClick }) => {
  return (
    <PrimaryButtonContainer
      type={type || 'button'}
      className={className}
      onClick={onClick}
    >
      {children}
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;
