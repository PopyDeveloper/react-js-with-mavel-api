import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import CharacterList from './containers/character-list';

function App() {
  return (
    <Provider store={store}>
      <CharacterList />
    </Provider>
  );
}

export default App;
