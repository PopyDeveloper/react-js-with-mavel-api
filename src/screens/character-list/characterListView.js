import React from 'react';
import CardPerson from './../../components/card-person';
import { withRouter } from 'react-router-dom'

import { SubTitle, Container, Row, Column } from './styles';

const CharacterListView = (props) => {
    const {characters, editChar, showDetail } = props;

    return (
        <Container>

      <SubTitle>Personagens</SubTitle>


        {
            characters.length > 0 ? (
                <Row>
                    { characters.map(char =>
                            <Column grid='3' key={String(char.id)}>
                                <CardPerson person={char} showDetails={showDetail}/>
                            </Column>
                    )}
                </Row>
            ):(
                <p>Carregando...</p>
            )
        }
        </Container>
    )
}

export default withRouter(CharacterListView);