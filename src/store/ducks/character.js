const Types = {
  EDIT: 'EDIT',
  DETAIL: 'DETAIL',
  SAVE: 'SAVE'
}

export default function reducer(state = [], action) {
    switch(action.type){
        case Types.EDIT:
            return action.char
        case Types.DETAIL:
            return action.char
        default:
            return state
    }
}

export function handleEditCharacter (char) {
    return {
        type: Types.EDIT,
        char
    }
}

export function showDetailCharacter (char) {
    return {
        type: Types.DETAIL,
        char
    }
}

export function saveCharacter (char) {
    return {
        type: Types.SAVE,
        char
    }
}