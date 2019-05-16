import React, { Component } from 'react';
import { getAllCharacters } from '../../services/data/data.service';
import CharacterListView from './characterListView';


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
        return <CharacterListView {...this.state}  />
    }
}

export default CharacterListController;