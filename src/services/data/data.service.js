import md5 from 'js-md5'

const PUBLIC_KEY = '8609cc64d92ae2230f687909ce922ada';
const PRIVATE_KEY = '27c7d5f0dc43a13f7716df100a80b6f42a8b7ce8';

export async function getAllCharacters() {
    const timestamp = Number(new Date())

    const characters = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${gerateHash()}`)
        .then(response => response.json())
        .then(responseJson => responseJson['data']['results'])
        .catch(err => console.error('Erro ao carregar dados da api: ', err));
     
    return characters;
}

export async function getSeries (id) {
  
    const series = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=${PUBLIC_KEY}&hash=${gerateHash()}`)
        .then(response => response.json())
        .then(responseJson => responseJson['data']['results'])
        .catch(err => console.error('Erro ao carregar dados da api: ', err));

    return series;
}

export async function getCharacterByName (name) {

    const character = fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${PUBLIC_KEY}&hash=${gerateHash()}`)
        .then(response => response.json())
        .then(responseJson => responseJson['data']['results'])
        .catch(err => console.error('Erro ao carregar dados da api: ', err));

    return character;
}

export function gerateHash() {
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`)

    return hash;
}