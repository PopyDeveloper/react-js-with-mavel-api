import React from 'react';
import CharacterList from './screens/character-list';
import DetailCharacter from './screens/datails-character'
import EditCharacterController from './screens/edit-character'
import { Provider } from 'react-redux';
import store from './store';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

export default function Routes() {
  return (
    <Provider store={store}>
        <Router history={history}>
            <Switch >
                <Route path="/" exact={true} component={CharacterList} />
                <Route path="/character" component={DetailCharacter} />
                <Route path="/editCharacter" component={EditCharacterController} />
            </Switch>
        </Router>
    </Provider>
  );
}
