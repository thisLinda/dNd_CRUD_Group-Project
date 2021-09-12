

const events = [];

// Creates modal to display for user to enter information on
const eventModal = new bootstrap.Modal(document.getElementById('create-event-modal'));
const encounterModal = new bootstrap.Modal(document.getElementById('create-encounter'));
const battleModal = new bootstrap.Modal(document.getElementById('create-battle'));

// Keeps track of the events by giving them ids
let currentEventToEditId = -1;
let nextEventId = 0;


// Deletes the event
function deleteEvent(id) {
    let eventIndex = events.findIndex(e => e.id === id);
    events.splice(eventIndex, 1);
    renderEvents(); 
}


// Renders a battle/event and returns it to the renderEvents function
// (We were originally planning to have the user enter the monsters/npcs on the battle/encounter itself 
// but ran out of time, which is why these cards are created with an area to create a monster/npc)
function renderEvent(event) {
    if ((event['eventType']) === "battle"){
        return (
        `<div id="${event.id}" class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-sm-9"><h2>${event.name}</h2></div>
                    <div class="col-sm-3">
                        <button class="btn btn-danger" onclick="openBattleToEditModal('${event._id}')">Edit</button>
                        <button class="btn btn-danger" onclick="deleteEvent('${event._id}')">Delete</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h4>Description</h4>
                <div class="card">
                    <div id="${event.id}-battle-description">
                    ${event.description}
                    </div>
                </div>
                <br>
                <br>
                <h5>Monsters</h5>
                <div class="card">
                    <div class="row">
                       <form>     
                            <div class="row" id="new-monster">  
                            
                             <div class="col-sm-4">
                                 <label for="monster-name" class="form-label">Monster</label>
                                 <input type="text" class="form-control" id="monster-name">
                             </div>
                            
                             <div class="col-sm-4">
                                 <label for="monster-type" class="form-label">Type</label>
                                 <input type="text" class="form-control" id="monster-type">
                             </div>
                            
                             <div class="col-sm-2">
                                 <label for="m-health-points" class="form-label">HP</label>
                                 <input type="number" class="form-control" id="m-health-points">
                             </div>
                            
                             <div class="col-sm-2">
                                 <div class="button-box"> 
                                     <button type="button" id="add-monster" class="btn btn-primary">Create</button> 
                                 </div>
                             </div>
                             </div>
                         </form>
                         <div>
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
            `<div id="${event.id}" class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-sm-9"><h2>${event.name}</h2></div>
                        <div class="col-sm-3">
                            <button class="btn btn-danger" onclick="openEncounterToEditModal('${event.id}')">Edit</button>
                            <button class="btn btn-danger" onclick="deleteEvent('${event.id}')">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h4>Description</h4>
                    <div class="card">
                        <div id="${event.id}-encounter-description">
                        ${event.description}
                        </div>
                    </div>
                    <br>
                    <br>
                    <h5>NPCs</h5>
                    <div class="card">
                        <form>
                            <div class="row"> 
                                <div class="col-sm-3">
                                    <label for="npc-name" class="form-label">NPC Name</label>
                                    <input type="text" class="form-control" id="${event.id}-npc-name">
                                </div>
                                <!--NPC plot points-->
                                <div class="col-sm-7">
                                    <label for="npc-plot" class="form-label">Plot Points</label>
                                    <textarea class="form-control" id="${event.id}-npc-plot" name="npc-plot" 
                                    rows="8" cols="100" placeholder="Write a plot point"></textarea>
                                </div>
                                <!--Save Button-->
                                <div class="col-sm-2">
                                    <div class="button-box"> 
                                        <button type="button" id="add-npcs" class="btn btn-primary">Create</button>            
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            <hr>
                            <div id="${event.id}-NPC-list"> 
                            </div>
                        </div>
                    </div>
                </div>
            </div><br>`
        )
    }
}


// Renders any events that have been added to the events array 
// and puts in the campaign list at the bottom of the webpage 
function renderEvents() {
    $("#campaign").empty().append(
        events.map(event => renderEvent(event))
    );
}



// Starts the page with rendered events if there are any
$(() => {
    renderEvents();
})


// Opens the Event Modal so the user can enter information
function openEventModal(id) {
    let event = events.find(e => e.id === id);
    if(!event) {
        event = {
            id: nextEventId,
            name: "",
            description: ""
        }
        nextEventId++;
    }

    currentEventToEditId = event.id;

    $("#battle-name").val(event.name);
    $('#encounter-name').val(event.name);
    $('#battle-description').val(event.description);
    $('#encounter-description').val(event.description);

    eventModal.show();
}


// Opens the Battle Modal so the user can enter information
function openBattleToEditModal(id) {
    let event = events.find(e => e.id === id);
    if(!event) {
        event = {
            id: nextEventId,
            name: "",
            description: ""
        }
        nextEventId++;
    }

    currentEventToEditId = event.id;

    $("#battle-name").val(event.name);
    $('#battle-description').val(event.description);
     
    battleModal.show();
    
}


// Opens the Encounter Modal so the user can enter information
function openEncounterToEditModal(id) {
    let event = events.find(e => e.id === id);
    if(!event) {
        event = {
            id: nextEventId,
            name: "",
            description: ""
        }
        nextEventId++;
    }

    currentEventToEditId = event.id;

    $("#encounter-name").val(event.name);
    $('#encounter-description').val(event.description);
     
    encounterModal.show();
    
}


// Saves an entered encounter event
function saveEditEncounter(id) {  
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
    event.description = $("#encounter-description").val();
    
    encounterModal.hide();

    renderEvents();
    console.log((event['eventType']))
}


// Saves an entered battle event
function saveEditBattle() {  
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
    event.description = $("#battle-description").val();
    
    battleModal.hide();

    renderEvents();
    console.log((event['eventType']))
}


