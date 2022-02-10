export function renderCharacters(character) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const nameP = document.createElement('p');

    div.classList.add('character-select');
    
    img.src = `/assets/${character.image}.png`;
    img.classList.add('character-image');

    nameP.textContent = character.name;
    nameP.classList.add('character-name');


    a.href = `./character-page/?id=${character.id}`;

    div.append(img, nameP);
    a.append(div);

    return a;
}

export function renderCharacter(character) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameP = document.createElement('p');
    const quoteP = document.createElement('p');
    const occupationP = document.createElement('p');
    const likesP = document.createElement('p');

    div.classList.add('character-select');
    
    img.src = `/assets/${character.image}.png`;
    img.classList.add('character-image');

    nameP.textContent = character.name;
    nameP.classList.add('character-name');

    quoteP.textContent = character.quote;
    quoteP.classList.add('character-quote');

    occupationP.textContent = character.occupation;
    occupationP.classList.add('character-occupation');

    likesP.textContent = character.likes;
    likesP.classList.add('character-likes');

    div.append(img, nameP, quoteP, occupationP, likesP);
    return div;

}