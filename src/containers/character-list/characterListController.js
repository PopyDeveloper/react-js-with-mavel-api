import React, { Component } from 'react';
import { getAllCharacters } from '../../services/data/data.service';
import CharacterListView from './characterListView';
import { withRouter } from 'react-router-dom' 
import { connect } from 'react-redux'
import * as CharacterActions from '../../actions'


class CharacterListController extends Component {
    constructor() {
        super()
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    editCharacter = char => {
        console.log(char)
        this.props.editCharacter(char)
        this.props.history.push('/editCharacter');
    }

    showDetails = id => {
        this.props.showCharacterDetails(id)
        this.props.history.push(`/character`)
    } 

     loadData = async () => {
        await getAllCharacters().then( data => {
            if(data) {
                this.setState({
                    characters: data
                })
            }
        }) 
    }

    render() {
        return <CharacterListView showDetail={id => this.showDetails(id)} editChar={char => this.editCharacter(char)} {...this.state}  />
    }
}

const mapDispatchToProps = dispatch => ({
    editCharacter: char => {dispatch(CharacterActions.handleEditCharacter(char))},
    showCharacterDetails: id => {dispatch(CharacterActions.showDetailCharacter(id))}
})


export default withRouter(connect(null, mapDispatchToProps)(CharacterListController));