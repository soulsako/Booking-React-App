import styled from 'styled-components';

export const Button = styled.button`

  cursor: pointer;
  background-color: #00874D;
  font-size: 2.5rem;
  border-radius: 3px;
  color: #fff;
  border: 2px solid #00874D;
  padding: 1rem 3rem;
  transition: 0.5s all ease-out;
  width: 100%;

  &:hover {
    opacity: .8;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: ${props => props.marginRight ? '1rem' : null};
  flex: ${props => props.fullWidth ? '1 1 0' : null};
`;

export const Label = styled.label`
  margin-bottom: .5rem;
`;

export const Text = styled.p`

  font-size: ${props => props.large ? '3.5rem' : '1rem'};
  margin-right: ${props => props.large ? '1rem' : null};
`;

