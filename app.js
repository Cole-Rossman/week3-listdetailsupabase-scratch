import { getCharacters } from './fetch-utils.js';
import { renderCharacters } from './render-utils.js';

const characterList = document.getElementById('character-list');

async function fetchCharacters() {
    const characters = await getCharacters();

    for (let character of characters) {
        const li = renderCharacters(character);
        characterList.append(li);
    }
}
fetchCharacters();