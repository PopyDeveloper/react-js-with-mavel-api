import React from 'react';

import { Container, Avatar, Name } from './styles';

export default function CardPerson({person, showDetails, editPerson}) {

  return (
    <Container>
        <Avatar
        src={`${person['thumbnail']['path']}.${person['thumbnail']['extension']}`}
        onClick={() => showDetails(person['id'])}>
        </Avatar>
        <Name>{person['name']}</Name>
        <p
        onClick={() => editPerson(person)}
        >Edit</p>
    </Container>
  );
}
