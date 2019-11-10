import md5 from 'js-md5'

export async function getAllCharacters() {
    const timestamp = Number(new Date())

    const characters = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=50&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${gerateHash()}`)
        .then(response => response.json())
        .then(responseJson => responseJson['data']['results'])
        .catch(err => console.error('Erro ao carregar dados da api: ', err));

    return characters;
}

export async function getSeries (id) {

    const series = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${gerateHash()}`)
        .then(response => response.json())
        .then(responseJson => responseJson['data']['results'])
        .catch(err => console.error('Erro ao carregar dados da api: ', err));

    return series;
}

export async function getDetailsCharacter (id) {

    const series = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${gerateHash()}`)
        .then(response => response.json())
        .then(responseJson => responseJson['data']['results'])
        .catch(err => console.error('Erro ao carregar dados da api: ', err));

    return series;
}

export async function getCharacterByName (name) {

    const character = fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${gerateHash()}`)
        .then(response => response.json())
        .then(responseJson => responseJson['data']['results'])
        .catch(err => console.error('Erro ao carregar dados da api: ', err));

    return character;
}

export function gerateHash() {
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(`${timestamp}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`)

    return hash;
}