import React from 'react'
import { Container, Title, Image } from './styles';

export default function Serie (props) {
  const { data } = props;

  return (
    <Container>
      {
        data['title'] &&
        <>
          <Title>{data['title']}</Title>
          <Image src={`${data['thumbnail']['path']}.${data['thumbnail']['extension']}`} alt={data['title']}/>
        </>
      }

    </Container>
  )
}
