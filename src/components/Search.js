import React, { Component } from 'react';
import styled from 'styled-components';
import { InputContainer, Label, Text, Button } from '../sharedStyles';
import DateInput from './DateInput';

const Container  = styled.div`

padding: 1rem;
background-color: #f3ce56;
width: 100%;
`;

const Input = styled.input`
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 1.5rem;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 1.4rem;
  font-weight: 300;
  background: #fafafa;
  width: 100%;
  &:active,
  &:focus {
    text-align: left;
  }
`;

const CheckboxInput = styled.input`
  margin-right: .5rem;
`;

const PickerContainer = styled.div`

  display: flex;
  align-items:center;
  justify-content: ${props => props.checkbox ? 'flex-start' : 'space-between'};
  margin: ${props => props.checkbox ? '1.5rem 0px' : null};
`;

const Heading = styled.h1`padding: 1rem 0px 2.5rem 0px;`

export default class Search extends Component {

  render() {
    return (
      <Container> 
        <Heading>Lets find your ideal car</Heading>

        <InputContainer>
          <Label>Pick-up Location</Label>
          <Input type="text" placeholder="city, airport, station, region, district" />
        </InputContainer>

        <PickerContainer checkbox>
          <CheckboxInput type="checkbox" />
          <Text>Drop off car at different location</Text>
        </PickerContainer>

        <PickerContainer>
          <DateInput label="Pick up Date:" date="5" month="Nov" day="Tue" time="10:00" marginRight={true}/>
          <DateInput label="Drop off Date:" date="8" month="Nov" day="Fri" time="10:00"/>
        </PickerContainer>

        <PickerContainer checkbox>
          <CheckboxInput type="checkbox" checked />
          <Text>Driver aged between 30-65?</Text>
        </PickerContainer>

        <Button>Search</Button>
      
      </Container>
    );
  }
}


