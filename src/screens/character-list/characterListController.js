import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../../services/data/data.service';
import CharacterListView from './characterListView';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as CharacterActions from '../../actions'


const CharacterListController = (props) =>  {

    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        loadData();
    }, [])


    const editCharacter = char => {
        props.editCharacter(char)
        props.history.push('/editCharacter');
    }

    const showDetails = id => {
        props.showCharacterDetails(id)
        props.history.push(`/character`)
    }

    const loadData = async () => {
        await getAllCharacters().then(setCharacters)
    }

    
        return <CharacterListView showDetail={id => showDetails(id)} editChar={char => editCharacter(char)} characters={characters}  />
}

const mapDispatchToProps = dispatch => ({
    editCharacter: char => {dispatch(CharacterActions.handleEditCharacter(char))},
    showCharacterDetails: id => {dispatch(CharacterActions.showDetailCharacter(id))}
})


export default withRouter(connect(null, mapDispatchToProps)(CharacterListController));