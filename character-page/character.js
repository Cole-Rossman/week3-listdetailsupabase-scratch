import { getCharacter } from '../fetch-utils.js';
import { renderCharacter } from '../render-utils.js';

const info = document.getElementById('info');

async function fetchCharacter() {
    const params = new URLSearchParams(window.location.search);

    const getId = await getCharacter(params.get('id'));

    const character = renderCharacter(getId);
    
    info.append(character);
}
fetchCharacter();