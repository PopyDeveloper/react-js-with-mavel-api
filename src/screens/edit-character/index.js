import React, { useState, useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { Container, Form, Image, TextField, TextAreaField, Button } from './style';

import { useSelector } from 'react-redux';

const EditCharacter = ({ history }) => {

    const { character } = useSelector(
        state => ({character: state})
    )

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        if(character) {
            setName(character['name'])
            setDescription(character['description'])
            persistCharacter(character);
        }
    }, [character])

    const persistCharacter = char => {
        localStorage.setItem('char', JSON.stringify(char))
    }

    const handleSubmit = (_character) => {
        const character = {
            name: _character.name,
            description: _character.description,
            thumbnail: {
                path: _character['thumbnail']['path'],
                extension: _character['thumbnail']['extension']
            }
        }

        if(localStorage.hasOwnProperty('myCharacters')) {
            const myCharacters = JSON.parse(localStorage.getItem('myCharacters'));
            myCharacters.push(character);

            localStorage.setItem('myCharacters', JSON.stringify(myCharacters));

        } else {
            localStorage.setItem('myCharacters', JSON.stringify([_character]));
        }


        history.goBack()
    }

    return (
        <Container>
            {
                character && character['thumbnail'] ? (
                <Form>
                    <Image alt={character['name']} src={`${character['thumbnail']['path']}.${character['thumbnail']['extension']}`} />

                    <TextField
                        value={name}
                        onChange={event => setName(event.target.value)}/>
                    <TextAreaField
                        rows="5"
                        value={description}
                        onChange={event => setDescription(event.target.value)} />
                    <Button onClick={() => handleSubmit(character)} >
                        SALVAR
                    </Button>
                </Form>
                ) : (
                    <Redirect to='/' />
                )

            }
        </Container>
    )
}

export default withRouter(EditCharacter);