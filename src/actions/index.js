import * as constants from './constantes';

export function handleEditCharacter (char) {
    return {
        type: constants.EDIT_CHARACTER,
        char
    }
}

export function showDetailCharacter (id) {
    return {
        type: constants.DETAIL_CHARACTER,
        id
    }
}

export function saveCharacter (char) {
    return {
        type: constants.SAVE_CHARACTER,
        char
    }
}