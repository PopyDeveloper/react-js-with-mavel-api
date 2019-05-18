import * as constants from '../actions/constantes'

export default function reducer(state = [], action) {
    console.log(action)
    switch(action.type){
        case constants.EDIT_CHARACTER:
            return action.char
        case constants.DETAIL_CHARACTER:
            return action.id
        default:
            return state
    }
}