import React from 'react';
import CardPerson from './../../components/card-person';
import { withRouter } from 'react-router-dom' 

import { Grid, SubTitle, Container, Row, Column } from './styles';

const CharacterListView = (props) => {
    const {characters, editChar, showDetail } = props;
    
    return (
        <Container>

        {
            characters.length > 0 ? (
                <Row>
                    { characters.map(char => 
                            <Column grid='3' key={String(char.id)}>
                                <CardPerson person={char}/>
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