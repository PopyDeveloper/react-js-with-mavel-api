import React from 'react';

import { Container, Avatar, Name } from './styles';

export default function CardPerson({person}) {
  return (
    <Container> 
        <Avatar src={`${person['thumbnail']['path']}.${person['thumbnail']['extension']}`}></Avatar>
        <Name>{person['name']}</Name>
        <p>Edit</p>
    </Container>
  );
}
