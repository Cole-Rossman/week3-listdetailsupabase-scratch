export function renderCharacters(character) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('character-select');
    
    img.src = `/assets/${character.image}.png`;
    img.classList.add('character-image');

    p.textContent = character.name;
    p.classList.add('character-name');


    a.href = `./character-page/?id=${character.id}`;

    div.append(img, p);
    a.append(div);

    return a;
}