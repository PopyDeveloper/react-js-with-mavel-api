import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import EditPersonFormView from './editCharacterView';
import { connect } from 'react-redux';

class EditCharacterController extends Component {

    constructor(props){
        super(props)
        const { character } = this.props;
        const path =character['thumbnail']['path']
        const extension = character['thumbnail']['extension']
        this.state = {
           name: character['name'],
           description: character['description'],
           image: `${path}.${extension}`,
           id: `${character['id']}${character['name']}`
        }

        console.log(this.state)
    }

    componentDidMount() {
        const { character } = this.props;
        localStorage.setItem(`${character['name']}`,JSON.stringify(character))
    }

    componentWillUnmount() {
        const { character } = this.props;
        localStorage.removeItem(`${character['name']}`)
    }

    handleSubmit = () => {
        let index = [localStorage].findIndex(nameCharacter => nameCharacter['name'] === this.state['name'])
        console.info(index)
        if(index < 0) {
            localStorage.setItem(`${this.state['name']}${Number(new Date()).toString()}`, JSON.stringify(this.state))
            console.log(this.state)
        }
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
            handleSubmit={this.handleSubmit.bind(this)} 
            handlerName={this._onChangeName.bind(this)} 
            handlerDescription={this._onChangeDescription.bind(this)}
            {...this.state} />
    }
    
}

const mapStateToProps = state => ({
  character: state
});

export default withRouter(connect(mapStateToProps)(EditCharacterController));