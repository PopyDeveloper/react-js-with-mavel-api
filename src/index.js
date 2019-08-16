import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DetailCharacterController from './screens/datails-character'
import EditCharacterController from './screens/edit-character'
import { Provider } from 'react-redux';
import store from './store';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch >
                <Route path="/" exact={true} component={App} />
                <Route path="/character" component={DetailCharacterController} />
                <Route path="/editCharacter" component={EditCharacterController} />
            </Switch>
        </Router>
    </Provider>

, document.getElementById('root'));