export default function getCharacter(state = [], action) {

    switch(action.type){
        case 'GET_CHARACTER':
            return action.payload;
        default:
            return state;
    }
}