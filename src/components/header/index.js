import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

export default function Header() {

  function onPop() {
    this.history.onPop();
  }
  return (
      <Container>
          <Link to={'/'} exact="true" style={{'textDecoration': 'none'}}>
            <Title>MARVEL</Title>
          </Link>

      </Container>
  );
}
