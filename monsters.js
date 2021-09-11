
// let monsters = [
//   {
//   'id': 1,
//   'event_id': 1,
//   'monster-name': 'Linda',
//   'monster-type': 'zombie',
//   'monster-hp': 6
// },
//   {
//   'id': 2,
//   'event_id': 2,
//   'monster-name': 'notLinda',
//   'monster-type': 'notSmartie',
//   'monster-hp': -3
// },
//   {
//   'id': 3,
//   'event_id': 3,
//   'monster-name': 'thisLinda',
//   'monster-type': 'ambitiono',
//   'monster-hp': 0
//   }
// ]

// const characters = [];

// const characterModal = new bootstrap.Modal(document.getElementById('create-character-modal'));

// let currentCharacterToEditId = -1;
// let nextCharacterId = 0;

// function saveCharacter() {
//     let character = characters.find(character => characters.id === currentCharacterToEditId);
//     if(!character) {
//         character = { id: currentCharacterToEditId }
//         characters.push(character);
//     }

//     character.name = $('#character-name').val();
//     character.race = $('#character-race').val();
//     character.class = $('#character-class').val();
//     character.hp = $('#health-points').val();

//     characterModal.hide();

//     renderCharacters();
//     console.log(character.name);
//     console.log(character.race);
//     console.log(character.class);
//     console.log(character.hp);
//     console.log(currentCharacterToEditId);

// }

// function renderCharacter(character) {
//     return (
//         `<div id="${character._id}" class="card">
//             <div class="card-header">
//                 <div class="row">
//                     <div class="col-sm"><h2>${character.name}</h2></div>
//                     <div class="col-sm"><button class="btn btn-danger" onclick="deleteEvent('${character._id}')">Delete</button></div>
//                 </div>
//             </div>
//             <div class="card-body">
//                 <div class="card">
//                     <div class="row">
//                         <div class="col-sm">
//                             <div id="${character.race}">
//                             </div>
//                         </div>
//                         <div class="col-sm">
//                             <div id="${character.class}">
//                             </div>
//                         </div>
//                         <div class="col-sm">
//                             <div id="${character.hp}">
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div><br>`
//     )

// }


// function renderCharacters() {
//     $("#character-list").empty().append(
//         characters.map(character => renderCharacter(character))
//     );
// }


// DELETE
function deleteMonster(id) {
  let monsterIndex = monsters.findIndex(monster => monster.id === id); //changed this to "findIndex" since that's an array method
  monsters.splice(monsterIndex, 1);
  renderMonsters(); 
}

// CREATE
const monsterModal = new bootstrap.Modal(document.getElementById('create-monster-modal'));
// const battleModal = new bootstrap.Modal(document.getElementById('create-battle'));
// let currentEventToEditId = -1;
let currentMonsterToEditId = -1;
// let nextEventId = 0;
let nextMonsterId = 0;


// renders a battle/event and returns it to the renderEvents function
function renderMonster(monster) {
      return (
        `<div id="${monster.id}" class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-sm"><h2>${monster.name}</h2></div>
                    <div class="col-sm"><button class="btn btn-danger"  id="add-monster" onclick="saveMonster('${monster._id}')">Edit</button></div>
                    <div class="col-sm"><button class="btn btn-danger" onclick="deleteMonster('${monster._id}')">Delete</button></div>
                </div>
            </div>
            <div class="card-body">
                <div class="card">
                    <div class="row">
                        <div class="col-sm">
                            <div id="${monster.id}-monster-type">
                            ${monster.type}
                            </div>
                        </div>
                        <div class="col-sm">
                            <div id="${monster.id}-monster-hp">
                            ${monster.hp}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><br>`
      )
}

// renders any monsters that have been added to the monsters array 
//and puts in the campaign list at the bottom of the webpage 
function renderMonsters() {
    $("#monster-list").empty().append(                  //changed this to "monster-list" so it was going to the right place
        monsters.map(monster => renderMonster(monster)) //changed this to your function name (you will need to make a "renderMonster" function)
    );                                                  // and changed parameter inside to "monster" so it would run function on right thing?
}



//starts the page with rendered monsters if there are any
$(() => {
    renderMonsters();
})
console.log('hello');

function saveMonster(id) {
    let monster = monsters.find(monster => monsters.id === currentMonsterToEditId);
    if(!monster) {
        monster = { 
            id: currentMonsterToEditId,
            name: "",
            type: "",
            hp: 2,
            // monsters: []      I am not sure you need this, or you might want to call it traits if you're storing the monster's information?
        }
        
        monsters.push(monster);
    }

    monster.name = `${$('#monster-name').val()}`; //changed to "#monster-name" from "#add-monster"
    monster.type = `${$('#monster-type').val()}`; //same
    monster.hp = `${$('#monster-hp').val()}`; //same
    
    monsterModal.hide();

    renderMonsters();
    // console.log((event['monsterType']))
}



//to hold the data
let monsters = [
//   {
//   '_id': 1,
//   'event_id': 1,
//   'monster-name': 'Linda',
//   'monster-type': 'zombie',
//   'monster-hp': 6
// },
//   {
//   '_id': 2,
//   'event_id': 2,
//   'monster-name': 'notLinda',
//   'monster-type': 'notSmartie',
//   'monster-hp': -3
// },
//   {
//   '_id': 3,
//   'event_id': 3,
//   'monster-name': 'thisLinda',
//   'monster-type': 'ambitiono',
//   'monster-hp': 0
//   }
]

// document.getElementById('add-monster').addEventListener('click', () => {        //commented out so I could test stuff
//   monsters.push({ 
//     id: monsters.length+=2,
//     name: `${document.getElementById('monster-name').value}`,
//     type: `${document.getElementById('monster-type').value}`,
//     hp: `${document.getElementById('monster-hp').value}`
//   });
//   console.log(monsters);
// });


