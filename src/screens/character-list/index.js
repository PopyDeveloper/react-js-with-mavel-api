import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../../services/data/data.service';
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as CharacterActions from '../../store/ducks/character';

import { CircularProgress } from '@material-ui/core';

import { SubTitle, Container, Row, Column, ContainerLoading } from './styles';
import CardPerson from '../../components/card-person';

const CharacterList = (props) => {

    const [characters, setCharacters] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        loadData();
    }, [])

    const editCharacter = char => {
        dispatch(CharacterActions.handleEditCharacter(char))
        props.history.push('/editCharacter');
    }

    const showDetails = char => {
        dispatch(CharacterActions.showDetailCharacter(char))
        props.history.push(`/character`)
    }

    const loadData = async () => {
        await getAllCharacters().then(setCharacters)
    }

    return (
        <Container>
            {
                characters &&
                characters.length > 0 ? (
                    <Container>
                        <SubTitle>Personagens</SubTitle>
                        <Row>
                            { characters.map(char =>
                                    <Column grid='3' key={String(char.id)}>
                                        <CardPerson person={char} showDetails={() => showDetails(char)} editPerson={editCharacter}/>
                                    </Column>
                            )}
                        </Row>
                    </Container>
                ):(
                    <ContainerLoading>
                        <CircularProgress />
                    </ContainerLoading>
                )
            }
        </Container>
    )
}

export default withRouter(CharacterList);