import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import reducers from './reducers';


const rootReducer = combineReducers({
    reducers,
    'editCharacterForm': formReducer
})


const store = createStore(rootReducer)

export default store 