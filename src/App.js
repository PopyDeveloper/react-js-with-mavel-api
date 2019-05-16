import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import CharacterList from './components/character-list';


function App() {
  return (
    <Provider store={store}>
      <CharacterList>
      </CharacterList>
    </Provider>
    
  );
}

export default App;
