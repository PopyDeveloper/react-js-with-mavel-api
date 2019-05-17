import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import EditPersonFormView from './editCharacterView';

class EditCharacterController extends Component {

    constructor(props){
        super(props)
        const character = props['location']['state']['character']
        const path =character['thumbnail']['path']
        const extension = character['thumbnail']['extension']
        this.state = {
           name: character['name'],
           description: character['description'],
           image: `${path}.${extension}`
        }
    }

    handleSubmit = values => {
        console.log(values)
    }

    _onChangeName = e => {
        this.setState({
            ...this.state,
            name: e['target']['value']
        })
    };

    _onChangeDescription = e => {
        this.setState({
            ...this.state,
            description: e['target']['value']
        })
    }



    render() {
        return <EditPersonFormView 
            handleSubmit={() => this.handleSubmit.bind(this)} 
            handlerName={this._onChangeName.bind(this)} 
            handlerDescription={this._onChangeDescription.bind(this)}
            {...this.state} />
    }
    
}

export default withRouter(EditCharacterController);