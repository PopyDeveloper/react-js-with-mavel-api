import React from 'react';
import CharacterList from './screens/character-list';
import DetailCharacter from './screens/datails-character'
import EditCharacter from './screens/edit-character'
import { Provider } from 'react-redux';
import store from './store';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

export default function Routes() {
  return (
    <Provider store={store}>
        <Router history={history}>
            <Switch >
                <Route path="/" exact component={CharacterList} />
                <Route path="/character" component={DetailCharacter} />
                <Route path="/editCharacter" component={EditCharacter} />
            </Switch>
        </Router>
    </Provider>
  );
}
