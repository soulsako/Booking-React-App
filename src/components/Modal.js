import React from 'react';
import styled from 'styled-components';
import { MdHelpOutline, MdAccountCircle, MdAssignmentTurnedIn } from 'react-icons/md';

const ModalContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 6.5rem;
  left: 0;
  flex: 1;
`;

const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 1.5rem 0px 1.5rem 1.5rem;
  color: #096FB9;
`;

export const Modal = ({props}) => {
  return (  
    <ModalContainer>
      <Ul>
        <Li>
          <MdAssignmentTurnedIn size={30} color="#096FB9" style={{marginRight: '10px'}} />
          Manage a booking
        </Li>
        <Li>
          <MdAccountCircle size={30} color="#096FB9" style={{marginRight: '10px'}} />
          Sign in 
        </Li>
        <Li>
          <MdHelpOutline size={30} color="#096FB9" style={{marginRight: '10px'}} />
          Help
        </Li>
      </Ul>
    </ModalContainer>
  );
}
 