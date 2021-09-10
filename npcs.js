//to hold the data
const npcs = [
  {
  "_id": 1,
  "event_id": 1,
"name": "Lydia Bennet",
"plot": "will tell you where the soldiers are stationed"
},
{  "_id": 2,
"event_id": 1,
"name": "Lady Catherine de Bourgh",
"plot": "will condescend to tell you how to better arrange your pack"
},
{  "_id": 3,
"event_id": 1,
"name": "Jennifer Strange",
"plot": "will tell you about quark beasts"
}
]

//add npc
  document.getElementById('add-npcs').addEventListener('click', () => {
  npcs.push({ 
    id: npcs.length+=2,
    name: `${document.getElementById('npc-name').value}`,
    plot: `${document.getElementById('npc-plot').value}`
  });
  for (let npc of npcs) {
    console.log(npcs);
    $('#undefined-NPC-list').append(
      `<p>
      <span id="name-${npcs._id}"><strong>ID:</strong> ${npcs._id}</span>
      <span id="name-${npcs._id}"><strong>Name:</strong> ${npcs.name}</span>
      <span id="name-${npcs._id}"><strong>Plot:</strong> ${npcs.plot}</span> 
      </p>
      <button type="button" id="edit-npc" class="btn btn-success" onclick="editNPC()">Edit</button>
      <button type="button" id="delete-npc" class="btn btn-danger" onclick="deleteNPC()">Delete</button>`
    );
};
  //showAllNpcs();
  }); //end add npc

function editNpcPlot() {
console.log("npc plot edited");
}


document.getElementById('saveEvent').addEventListener('click', () => {
  for (let npc of npcs) {
    console.log(npcs);
    $('#undefined-NPC-list').append(
      `<p>
      <span id="name-${npcs._id}"><strong>ID:</strong> ${npcs._id}</span>
      <span id="name-${npcs._id}"><strong>Name:</strong> ${npcs.name}</span>
      <span id="name-${npcs._id}"><strong>Plot:</strong> ${npcs.plot}</span> 
      </p>
      <button type="button" id="edit-npc" class="btn btn-success" onclick="editNPC()">Edit</button>
      <button type="button" id="delete-npc" class="btn btn-danger" onclick="deleteNPC()">Delete</button>`
    );
};
});

function showAllNpcs() {
        //$('#undefined-NPC-list').empty();
        for (let npc of npcs) {
          $('#undefined-NPC-list').append(
            `<p>
            <span id="name-${npcs.id}""><strong>ID:</strong> ${npcs.id}</span>
            <span id="name-${npcs.id}""><strong>Name:</strong> ${npcs.name}</span>
            <span id="name-${npcs.id}""><strong>Plot:</strong> ${npcs.plot}</span> 
            </p>
            <button type="button" id="edit-npc" class="btn btn-success" onclick="editNPC()">Edit</button>
            <button type="button" id="delete-npc" class="btn btn-danger" onclick="deleteNPC()">Delete</button>`
          );
  }
}


// function deleteNpc() {
// //slice or splice
// }
