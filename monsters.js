
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

const events = [];

// DELETE
function deleteMonster(id) {
  let monsterIndex = monsters.findMonster(monster => monster.id === id);
  monsters.splice(monsterIndex, 1);
  renderMonsters(); 
}

// CREATE
const encounterModal = new bootstrap.Modal(document.getElementById('create-encounter'));
const battleModal = new bootstrap.Modal(document.getElementById('create-battle'));
let currentEventToEditId = -1;
let currentMonsterToEditId = -1;
let nextEventId = 0;
let nextMonsterId = 0;

// I don't need to do render an event
// renders a battle/event and returns it to the renderEvents function
function renderEvent(event) {
    if ((event['eventType']) === "battle"){
        return (
        `<div id="${event._id}" class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-sm"><h2>${event.name}</h2></div>
                    <div class="col-sm"><button class="btn btn-danger" onclick="openEventToEditModal('${event._id}')">Edit</button></div>
                    <div class="col-sm"><button class="btn btn-danger" onclick="deleteEvent('${event._id}')">Delete</button></div>
                </div>
            </div>
            <div class="card-body">
                <div class="card">
                    <div class="row">
                        <form>     
                            <div class="row" id="new-monster">  
                            
                            <div class="col-sm-3">
                                <label for="monster-name" class="form-label">Monster</label>
                                <input type="text" class="form-control" id="monster-name">
                            </div>
                            
                            <div class="col-sm-3">
                                <label for="monster-type" class="form-label">Type</label>
                                <input type="text" class="form-control" id="monster-type">
                            </div>
                            
                            <div class="col-sm-2">
                                <label for="monster-hp" class="form-label">HP</label>
                                <input type="number" class="form-control" id="monster-hp">
                            </div>
                            
                            <div class="col-sm-4">
                                <div class="button-box"> 
                                    <button type="button" id="add-monster" class="btn btn-primary">Create</button> 
                                    <button type="button" id="edit-monster" class="btn btn-success" onclick="editMonster()">Edit</button>
                                    <button type="button" id="delete-monster" class="btn btn-danger" onclick="deleteMonster()">Delete</button>
                                </div>
                            </div>
                            </div>
                        </form>
                        <div>
                            <h5>Monsters</h5>
                            <hr>
                            <div id="${monster.id}-monster-list"> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><br>`
    )
    } else {
        return (
            `<div id="${event._id}" class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-sm"><h2>${event.name}</h2></div>
                        <div class="col-sm"><button class="btn btn-danger" onclick="openEventToEditModal('${event._id}')">Edit</button></div>
                        <div class="col-sm"><button class="btn btn-danger" onclick="deleteEvent('${event._id}')">Delete</button></div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card">
                        <form>
                            <div class="row"> 
                                <div class="col-sm-3">
                                    <label for="npc-name" class="form-label">NPC Name</label>
                                    <input type="text" class="form-control" id="${event._id}-npc-name">
                                </div>
                                <!--NPC plot points-->
                                <div class="col-sm-5">
                                    <label for="npc-plot" class="form-label">Plot Points</label>
                                    <textarea class="form-control" id="${event._id}-npc-plot" name="npc-plot" 
                                    rows="8" cols="100" placeholder="Write a plot point"></textarea>
                                </div>
                                <!--Save Button-->
                                <div class="col-sm-4">
                                    <div class="button-box"> 
                                        <button type="button" id="add-npcs" class="btn btn-primary">Create</button>                                
                                        <button type="button" id="edit-npc" class="btn btn-success" onclick="editNPC()">Edit</button>
                                        <button type="button" id="delete-npc" class="btn btn-danger" onclick="deleteNPC()">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            <h5>NPCs</h5>
                            <hr>
                            <div id="${event._id}-NPC-list"> 
                            </div>
                        </div>
                    </div>
                </div>
            </div><br>`
        )
    }
}

// renders any monsters that have been added to the monsters array 
//and puts in the campaign list at the bottom of the webpage 
function renderMonsters() {
    $("#button-box").empty().append(
        monsters.map(monster => monsterEvent(event))
    );
}

//starts the page with rendered monsters if there are any
$(() => {
    renderMonsters();
})
console.log('hello');

function saveMonster(id) {
    let monster = monsters.find(monster => currentMonsterToEdit.id === currentMonsterToEditId);
    if(!monster) {
        monster = { 
            id: currentMonsterToEditId,
            monsters: [] 
        }
        
        monsters.push(monster);
    }

    monster.name = `${$('#add-monster').val()}`;
    monster.type = `${$('#add-monster').val()}`;
    monster.hp = `${$('#add-monster').val()}`;
    
    encounterModal.hide();

    renderMonsters();
    console.log((event['monsterType']))
}

//saves an entered battle event
function saveEditBattle(id) {
    let event = events.find(event => events.id === currentEventToEditId);
    if(!event) {
        event = { 
            id: currentEventToEditId,
            eventType: "battle",
            eventBeings: [] 
        }

        events.push(event);
    }

    event.name = `The Battle of ${$('#battle-name').val()}`;
    
    battleModal.hide();

    renderEvents();
    console.log((event['eventType']))
}
=======
//to hold the data
let monsters = [
  {
  '_id': 1,
  'event_id': 1,
  'monster-name': 'Linda',
  'monster-type': 'zombie',
  'monster-hp': 6
},
  {
  '_id': 2,
  'event_id': 2,
  'monster-name': 'notLinda',
  'monster-type': 'notSmartie',
  'monster-hp': -3
},
  {
  '_id': 3,
  'event_id': 3,
  'monster-name': 'thisLinda',
  'monster-type': 'ambitiono',
  'monster-hp': 0
  }
]

document.getElementById('add-monster').addEventListener('click', () => {
  monsters.push({ 
    id: monsters.length+=2,
    name: `${document.getElementById('monster-name').value}`,
    type: `${document.getElementById('monster-type').value}`,
    hp: `${document.getElementById('monster-hp').value}`
  })
  console.log(monsters);
});

