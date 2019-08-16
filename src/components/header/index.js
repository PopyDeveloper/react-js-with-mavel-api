import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

export default function Header() {
  return (
      <Container>
          <Link to={'/'} style={{'text-decoration': 'none'}}>
            <Title>MARVEL</Title>
          </Link>

      </Container>
  );
}
