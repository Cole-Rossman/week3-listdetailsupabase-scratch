import { renderCharacters, renderCharacter } from '../render-utils.js';

const test = QUnit.test;

test('renderCharacters should create a div displaying character image, name and anchor tag to click', (expect) => {
    const expected = `<a href="./character-page/?id=4"><div class="characters-select"><img src="/assets/pleakley.png" class="character-image"><p class="character-name">Wendy Pleakley</p></div></a>`;

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

test('renderCharacter should create a div and display all of the information about the character from supabase', (expect) => {
    const expected = `<div class="character-select"><img src="/assets/pleakley.png" class="character-image"><p class="character-name">Wendy Pleakley</p><p class="character-quote">Notable Quote: "HERE! Educate yourself."</p><p class="character-occupation">Occupation: United Galactic Federation Agent</p><p class="character-likes">Agent Pleakley enjoys the following: Cleanliness, mosquitos and disguises.</p></div>`;

    
    const agentPleakley = {
        id: '4',
        name: 'Wendy Pleakley',
        quote: 'Notable Quote: "HERE! Educate yourself."',
        occupation: 'Occupation: United Galactic Federation Agent',
        likes: 'Agent Pleakley enjoys the following: Cleanliness, mosquitos and disguises.',
        image: 'pleakley',
    };
    const actual = renderCharacter(agentPleakley);

    expect.equal(actual.outerHTML, expected);
});