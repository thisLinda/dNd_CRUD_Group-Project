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
]

//displays any exisng npcs
$(() => {renderNPCS(); })
console.log('hello');

const npcModal = new bootstrap.Modal(document.getElementById('create-npc-modal'));
let currentNpcToEditId = -1;
let nextNpcId = npcs.length;
console.log(npcs);
//=============================================================

function editNPC(id) {
  let npc = npcs.find(npc => npc._id === id);
  console.log(npc);
  console.log(n.id);
  console.log(id);
  if(!npc) {
    npc = {
          _id: nextNpcId,
          name: "",
          plot: "",
      }
      nextNpcId++;
  }

  currentNpcToEditId = npc._id;

  $("#dish-name").val(dish.name);
  $("#dish-type").val(dish.type);
  $("#dish-price").val(dish.price);

  modal.show();
}

function saveNPC(id) {
  let npc = npcs.find(npc => npcs.id === currentNpcToEditId);
  if(!npc) {
      npc = { 
          _id: currentNpcToEditId,
          name: "",
          plot: "",
      }  
      npcs.push(npc);
  }
  npc.name = `${$('#npc-name').val()}`;
  npc.plot = `${$('#npc-plot').val()}`;
  npcModal.hide();
  renderNPCS();
}

//creates a single npc and returns it to the renderNPCS function
function renderNPC(npc) {
  return (
    `<div id="${npc._id}" class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-sm"><h2>${npc.name}</h2></div>
                <div class="col-sm"><button class="btn btn-danger"  id="add-npc" onclick="saveNPC('${npc._id}')">Edit</button></div>
                <div class="col-sm"><button class="btn btn-danger" onclick="deleteNPC('${npc._id}')">Delete</button></div>
            </div>
        </div>
        <div class="card-body">
            <div class="card">
                <div class="row">
                    <div class="col-sm">
                        <div id="${npc._id}-npc-plot">
                        ${npc.plot}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br>`
  )
}

//renders all NPCs
function renderNPCS() {
  $("#NPC-list").empty().append(npcs.map(npc => renderNPC(npc)));
}

// DELETE
function deleteNPC(id) {
  let npcIndex = npcs.findIndex(npc => npc._id === id); 
  npcs.splice(npcIndex, 1);
  renderNPCS(); 
}

// document.getElementById('saveEvent').addEventListener('click', () => {
//   for (let npc of npcs) {
//     console.log(npcs);
//     $('#undefined-NPC-list').append(
//       `<p>
//       <span id="name-${npcs._id}"><strong>ID:</strong> ${npcs._id}</span>
//       <span id="name-${npcs._id}"><strong>Name:</strong> ${npcs.name}</span>
//       <span id="name-${npcs._id}"><strong>Plot:</strong> ${npcs.plot}</span> 
//       </p>
//       <button type="button" id="edit-npc" class="btn btn-success" onclick="editNPC()">Edit</button>
//       <button type="button" id="delete-npc" class="btn btn-danger" onclick="deleteNPC()">Delete</button>`
//     );
// };
// });

// function showAllNpcs() {
//         //$('#undefined-NPC-list').empty();
//         for (let npc of npcs) {
//           $('#undefined-NPC-list').append(
//             `<p>
//             <span id="name-${npcs.id}""><strong>ID:</strong> ${npcs.id}</span>
//             <span id="name-${npcs.id}""><strong>Name:</strong> ${npcs.name}</span>
//             <span id="name-${npcs.id}""><strong>Plot:</strong> ${npcs.plot}</span> 
//             </p>
//             <button type="button" id="edit-npc" class="btn btn-success" onclick="editNPC()">Edit</button>
//             <button type="button" id="delete-npc" class="btn btn-danger" onclick="deleteNPC()">Delete</button>`
//           );
//   }
// }


// function deleteNpc() {
// //slice or splice
// }
