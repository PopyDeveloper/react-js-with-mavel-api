import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DetailCharacterController from './components/datails-character'
import EditCharacterController from './components/edit-character'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';

ReactDOM.render(
<BrowserRouter history={history}>
    <Switch >
        <Route path="/" exact={true} component={App} />
        <Route path="/character/:id" component={DetailCharacterController} />
        <Route path="/editCharacter" component={EditCharacterController} />
    </Switch>
</BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const mapStateProps = {{reducerCharacter} => {{}}}