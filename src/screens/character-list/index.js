import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../../services/data/data.service';
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as CharacterActions from '../../actions'

import { SubTitle, Container, Row, Column } from './styles';

import CardPerson from '../../components/card-person';


const CharacterList = (props) => {

    const [characters, setCharacters] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        localStorage.setItem('characters', JSON.stringify(characters))
    }, [characters])

    const editCharacter = char => {
        dispatch(CharacterActions.handleEditCharacter(char))
        props.history.push('/editCharacter');
    }

    const showDetails = char => {
        localStorage.setItem('charView', JSON.stringify(char))
        dispatch(CharacterActions.showDetailCharacter(char))
        props.history.push(`/character`)
    }

    const loadData = async () => {
        await getAllCharacters().then(setCharacters)
    }


    return (
        <Container>

            <SubTitle>Personagens</SubTitle>


            {
                characters &&
                characters.length > 0 ? (
                    <Row>
                        { characters.map(char =>
                                <Column grid='3' key={String(char.id)}>
                                    <CardPerson person={char} showDetails={() => showDetails(char)} editPerson={editCharacter}/>
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


export default withRouter(CharacterList);