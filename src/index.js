import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DetailCharacterController from './containers/datails-character'
import EditCharacterController from './containers/edit-character'
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const mapStateProps = {{reducerCharacter} => {{}}}