import { renderCharacters } from '../render-utils.js';

const test = QUnit.test;

test('renderCharacters should create a div displaying character image, name and anchor tag to click', (expect) => {
    const expected = `<a href="./character-page/?id=4"><div class="character-select"><img src="/assets/pleakley.png" class="character-image"><p class="character-name">Wendy Pleakley</p></div></a>`;

    const agentPleakley = {
        id: '4',
        name: 'Wendy Pleakley',
        quote: 'Notable Quote: "HERE! Educate yourself."',
        occupation: 'Occupation: United Galactic Federation Agent',
        likes: 'Agent Pleakley enjoys the following: Cleanliness, mosquitos and disguises.',
        image: 'pleakley',
    };
    const actual = renderCharacters(agentPleakley);

    expect.equal(actual.outerHTML, expected);

});
