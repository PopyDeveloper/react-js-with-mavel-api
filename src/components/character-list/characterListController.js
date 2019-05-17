import React, { Component } from 'react';
import { getAllCharacters } from '../../services/data/data.service';
import CharacterListView from './characterListView';
import history from '../../history'
import { withRouter } from 'react-router-dom' 


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

    handlerEdit = char => {
        this.props.history.push('/editCharacter',{character: char} )
    }

    showDetails = id => {
        this.props.history.push(`/character/${id}`)
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
        return <CharacterListView showDetail={id => this.showDetails(id)} editFn={char => this.handlerEdit(char)} {...this.state}  />
    }
}

export default withRouter(CharacterListController);