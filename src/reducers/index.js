import { combineReducers } from 'redux';
import getCharacter from './getCharacters';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    form: formReducer,
    getCharacter
})