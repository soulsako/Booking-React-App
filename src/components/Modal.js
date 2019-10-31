import React from 'react';
import styled from 'styled-components';
import { MdHelpOutline, MdAccountCircle, MdAssignmentTurnedIn } from 'react-icons/md';

const ModalContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 65px;
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
  padding: 15px 0px 15px 15px;
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
 