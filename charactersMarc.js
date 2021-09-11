
const characters = [];

const characterModal = new bootstrap.Modal(document.getElementById('create-character-modal'));

let currentCharacterToEditId = -1;
let nextCharacterId = 0;

function saveCharacter() {
    let character = characters.find(character => characters.id === currentCharacterToEditId);
    if(!character) {
        character = { id: currentCharacterToEditId }
        characters.push(character);
    }

    character.name = $('#character-name').val();
    character.race = $('#character-race').val();
    character.class = $('#character-class').val();
    character.hp = $('#health-points').val();

    characterModal.hide();
	clearInput();

    renderCharacters();
    console.log(character.name);
    console.log(character.race);
    console.log(character.class);
    console.log(character.hp);
    console.log(currentCharacterToEditId);

}

function clearInput(){
	document.getElementById("character-name").value = '';
	document.getElementById("character-race").value = '';
	document.getElementById("character-class").value = '';
	document.getElementById("health-points").value = '';
}



function renderCharacter(character) {
    return (
        `<div id="${character._id}" class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-sm"><h2>${character.name}</h2></div>
                    <div class="col-sm"><button class="btn btn-danger" onclick="deleteEvent('${character._id}')">Delete</button></div>
                </div>
            </div>
            <div class="card-body">
                <div class="card">
                    <div class="row">
                        <div class="col-sm">
                            <div id="${character.race}">
                            </div>
                        </div>
                        <div class="col-sm">
                            <div id="${character.class}">
                            </div>
                        </div>
                        <div class="col-sm">
                            <div id="${character.hp}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><br>`
    )

}


function renderCharacters() {
    $("#character-list").empty().append(
        characters.map(character => renderCharacter(character))
    );
}


function deleteCharacter(id){
	let characterIndex = monsters.findIndex(character => character.id === id);
	characters.splice(characterIndex, 1);
	renderCharacters();
}

//________________________________________________________________________________
//not sure if I need this in here or not, I probably don't

// document.getElementById("save-character").addEventListener('click', () =>{
// 	characters.push({
// 		id: characters.length += 2,
// 		name: `${document.getElementById("character-name").value}`,
// 		race: `${document.getElementById("character-race").value}`,
// 		class: `${document.getElementById("character-class").value}`,
// 		hp: `${document.getElementById("health-points").value}`
// 	})
// })

//_____________below is probably all being deleted___________________

// let characters = [];


// document.getElementById("save-character").addEventListener('click', () =>{
// 	characters.push({
// 		id: characters.length += 2,
// 		name: `${document.getElementById("character-name").value}`,
// 		race: `${document.getElementById("character-race").value}`,
// 		class: `${document.getElementById("character-class").value}`,
// 		hp: `${document.getElementById("health-points").value}`
// 	})
// 	clearInput();
// 	for (let i in characters){
// 		characters[i] = 
// 		`<tr>
//             <td>${document.getElementById("character-name").value}</td>
//             <td>${document.getElementById("character-race").value}</td>
//             <td>${document.getElementById("character-class").value}</td>
// 			<td>${document.getElementById("health-points").value}</td>
//         </tr>`
//     table.innerHTML += characters[i];
// 	}
// })


// function clearInput(){
// 	document.getElementById("character-name").value = '';
// 	document.getElementById("character-race").value = '';
// 	document.getElementById("character-class").value = '';
// 	document.getElementById("health-points").value = '';
// }

// console.log(characters)



// let table = document.getElementById('push-characters-here');
// function renderCharacter() {
//     let template =  
//         `<tr>
//             <td>${document.getElementById("character-name").value}</td>
//             <td>${document.getElementById("character-race").value}</td>
//             <td>$${document.getElementById("character-class").value}</td>
// 			<td>$${document.getElementById("health-points").value}</td>
//         </tr>`
//     table.innerHTML += template;
// }






// function deleteCharacter(id){
// 	let characterIndex = characters.findIndex(c => c.id === id);
// 	characters.splice(characterIndex, 1);
// 	return characters;
// }

// addEventListener('click', deleteCharacter())