import React, {
    useState,
    useEffect
} from 'react';
import {
    getAllCharacters
} from '../../services/data/data.service';
import CharacterListView from './characterListView';
import {
    withRouter
} from 'react-router-dom'
import {
    connect
} from 'react-redux'
import * as CharacterActions from '../../actions'


const CharacterListController = (props) => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        localStorage.setItem('characters', JSON.stringify(characters))
    }, [characters])

    const editCharacter = char => {
        props.editCharacter(char)
        props.history.push('/editCharacter');
    }

    const showDetails = char => {
        localStorage.setItem('charView', JSON.stringify(char))
        props.showCharacterDetails(char)
        props.history.push(`/character`)
    }

    const loadData = async () => {
        await getAllCharacters().then(setCharacters)
    }


    return <CharacterListView
        showDetail = { char => showDetails(char)}
        editChar = { char => editCharacter(char) }
        characters = { characters }
    />
}

const mapDispatchToProps = dispatch => ({
    editCharacter: char => {
        dispatch(CharacterActions.handleEditCharacter(char))
    },
    showCharacterDetails: char => {
        dispatch(CharacterActions.showDetailCharacter(char))
    }
})


export default withRouter(connect(null, mapDispatchToProps)(CharacterListController));