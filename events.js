//stuff from HTML:
// <!--Battle Name-->
//                         <div class="mb-3">
//                             <label for="battle-name" class="form-label">Battle Name</label>
//                             <input type="text" class="form-control" id="battle-name">
//                         </div>
//                         <!--Monster Info-->
//                         <div class="row" id="new-monster">  
//                             <!--Monster Name-->
//                             <div class="col-sm-6">
//                                 <label for="monster-name" class="form-label">Monster</label>
//                                 <input type="text" class="form-control" id="monster-name">
//                             </div>
//                             <!--Monster HP-->
//                             <div class="col-sm-2">
//                                 <label for="monster-hp" class="form-label">HP</label>
//                                 <input type="number" class="form-control" id="monster-hp">
//                             </div>
//                             <!--Save Button-->
//                             <div class="col-sm-4">
//                                 <div class="button-box"> <!--calling this button box so you can more easily target it, Marc-->
//                                     <button type="button" id="add-monster" class="btn btn-primary">Create</button>
//                 <!--Use the code below in your render function to make these buttons show up next to the NPC you're appending-->  
//                                     <button type="button" id="edit-monster" class="btn btn-success" onclick="editMonster()">Edit</button>
//                                     <button type="button" id="delete-monster" class="btn btn-danger" onclick="deleteMonster()">Delete</button>
//                                 </div>
//                             </div>
//                         </div>

// <!--Encounter Info-->
// <div class="mb-3">
//   <label for="encounter-name" class="form-label">Encounter Name</label>
//  <input type="text" class="form-control" id="encounter-name">
//</div>
// <!--Name Info-->
// <div class="row"> 
//     <!--NPC Name--> 
//     <div class="col-sm-3">
//         <label for="npc-name" class="form-label">NPC Name</label>
//         <input type="text" class="form-control" id="npc-name">
//     </div>
//     <!--NPC plot points-->
//     <div class="col-sm-5">
//         <label for="plot-points" class="form-label">Plot Points</label>
//         <textarea class="form-control" id="plot-points" name="plot-points"  
//         rows="8" cols="100" placeholder="Write a plot point"></textarea>
//     </div>
//     <!--Save Button-->
//     <div class="col-sm-4">
//         <div class="button-box"> <!--calling this button box so you can more easily target it, Marc-->
//             <button type="button" id="add-npcs" class="btn btn-primary">Create</button>
// <!--Use the code below in your render function to make these buttons show up next to the NPC you're appending-->                                
//             <button type="button" id="edit-npc" class="btn btn-success" onclick="editNPC()">Edit</button>
//             <button type="button" id="delete-npc" class="btn btn-danger" onclick="deleteNPC()">Delete</button>
//         </div>
//     </div>
// </div>

























//  ----------------BELOW IS IMPORTANT STUFF FOR MARC POSSIBLY-----------------------------

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

    renderCharacters();
    console.log(character.name);
    console.log(character.race);
    console.log(character.class);
    console.log(character.hp);
    console.log(currentCharacterToEditId);

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
                            <div id="${character._id}">
                            ${character.race}
                            </div>
                        </div>
                        <div class="col-sm">
                            <div id="${character._id}">
                            ${character.class}
                            </div>
                        </div>
                        <div class="col-sm">
                            <div id="${character._id}">
                            ${character.hp}
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

const events = [];

// DELETE

function deleteEvent(id) {
    let eventIndex = events.findIndex(event => event.id === id);
    events.splice(eventIndex, 1);
    renderEvents(); 
}


// CREATE

// renders a battle/event and returns it to the renderEvents function
function renderEvent(event) {
    if ((event['eventType']) === "battle"){
        return (
        `<div id="${event._id}" class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-sm"><h2>${event.name}</h2></div>
                    <div class="col-sm"><button class="btn btn-danger" onclick="openBattleToEditModal('${event._id}')">Edit</button></div>
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
                                <label for="m-health-points" class="form-label">HP</label>
                                <input type="number" class="form-control" id="m-health-points">
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
                            <div id="${event.id}-monster-list"> 
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
                        <div class="col-sm"><button class="btn btn-danger" onclick="openEncounterToEditModal('${event._id}')">Edit</button></div>
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



// renders any events that have been added to the events array 
//and puts in the campaign list at the bottom of the webpage 
function renderEvents() {
    $("#campaign").empty().append(
        events.map(event => renderEvent(event))
    );
}


// -------DO NOT USE ---------------
// function renderEvents() {
//     $("#campaign").empty();
//     for (let event of events) {
//         $("#campaign").append(
//         events.map(event => renderEvent(event))
//     );
//     // for (let being of event.eventBeings){
//     //     $(`#${event._id}`).find('#monster-list').append(
//     //         `<p>
//     //         <span id="name-${monster._id}"><strong>Name: </strong> ${monster.name}</span>
//     //         <span id="area-${monster._id}"><strong>Type: </strong> ${monster.type}</span>
//     //         <span id="area-${monster._id}"><strong>HP: </strong> ${monster.hp}</span>
//     //         <button class="btn btn-danger" onclick="deleteMonster('${event._id}', '${monster._id}')">Delete Monster</button>
//     //         `
//     //     )
//     // }
//     }
// }

//starts the page with rendered events if there are any
$(() => {
    renderEvents();
})


console.log(events);

//--------------EDIT---Need to work on-------------------------------------------

// function openEventToEditModal(id) {
//     let event = events.find(event => event.id === id);
//     if(!event) {
//         event = {
//             // id: nextEventId,
//             // name: '',
//             // monsters: '',
//             // hp: '',
//         }
//         // nextEventId++;

//     }
//     console.log((event['eventType']))
    
//     if ((event['eventType']) === "encounter"){
//         encounterModal.show();
//         console.log("this is an encounter")
//     } else {
//         battleModal.show();
//         console.log("this is a battle")  
//     }

//     currentEventToEditId = event.id;

//     // $("event-name").val(event.name);
//     // $("monster-name").val(event.monsters);
//     // $("monster-hp").val(event.hp);
   
//     console.log(events);
// }

const eventModal = new bootstrap.Modal(document.getElementById('create-event-modal'));
const encounterModal = new bootstrap.Modal(document.getElementById('create-encounter'));
const battleModal = new bootstrap.Modal(document.getElementById('create-battle'));
let currentEventToEditId = -1;
let nextEventId = 0;

function openEventModal(id) {
    let event = events.find(e => e.id === id);
    if(!event) {
        event = {
            id: nextEventId,
            name: "",
            // type: "Main",
            // price: 2
        }
        nextEventId++;
    }

    currentEventToEditId = event.id;

    $("#battle-name").val(event.name);
    $('#encounter-name').val(event.name);

    eventModal.show();
}

function openBattleToEditModal(id) {
    let event = events.find(e => e.id === id);
    if(!event) {
        event = {
            id: nextEventId,
            name: "",
            // type: "Main",
            // price: 2
        }
        // nextEventId++;
    }

    currentEventToEditId = event.id;

    $("#battle-name").val(event.name);
     
    battleModal.show();
    
}

function openEncounterToEditModal(id) {
    let event = events.find(e => e.id === id);
    if(!event) {
        event = {
            id: nextEventId,
            name: "",
            // type: "Main",
            // price: 2
        }
        // nextEventId++;
    }

    currentEventToEditId = event.id;

    $("#encounter-name").val(event.name);
     
    encounterModal.show();
    
}


// saves an entered encounter event
function saveEditEncounter() {    //put id back in if need to
    let event = events.find(e => e.id === currentEventToEditId);
    if(!event) {
        event = { 
            id: currentEventToEditId,
            eventType: "encounter", 
            eventBeings: []
        }
        
        events.push(event);
    }

    event.name = `The Village of ${$('#encounter-name').val()}`;
    
    encounterModal.hide();

    renderEvents();
    console.log((event['eventType']))
}

//saves an entered battle event
function saveEditBattle() {  //put id back in if need to
    let event = events.find(e => e.id === currentEventToEditId);
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