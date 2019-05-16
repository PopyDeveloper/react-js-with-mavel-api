import * as constants from './constantes';
import * as dataService from '../services/data/data.service';

export function getCharacters () {
    return {
        type: constants.GET_CHARACTERS,
        payload: dataService.getAllCharacters()
    }
}