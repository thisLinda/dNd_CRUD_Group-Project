//to hold the data
const oldnpcs = [
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

const npcs = [];

function createNPC() {
  npcs.push({ 
    id: npcs.length++,
    //event_id: events._id,
    name: `${document.getElementById('npc-name').value}`,
    plot: `${document.getElementById('npc-plot').value}`
  });
  console.log(npcs);
  for (let npc of npcs) {
    console.log(npc);
    $('#npc-list').append(
      `<p>
      <span><strong>ID:</strong> ${npc._id}</span>
      <span id="name-${npc._id}"><strong>Name:</strong> ${npc.name}</span>
      <span id="name-${npc._id}"><strong>Plot:</strong> ${npc.plot}</span> 
      </p>
      <button type="button" id="edit-npc" class="btn btn-success" onclick="editNPC()">Edit</button>
      <button type="button" id="delete-npc" class="btn btn-danger" onclick="deleteNPC()">Delete</button>`
    );

}
}
// //add npc
//   document.getElementById('create-new-npc').addEventListener('click', () => {
//     console.log(npcs.length);
//   npcs.push({ 
//     id: npcs.length++,
//     //event_id: events._id,
//     name: `${document.getElementById('npc-name').value}`,
//     plot: `${document.getElementById('npc-plot').value}`
//   });
//   console.log(npcs);
//   for (let npc of npcs) {
//     console.log(npc);
//     $('#npc-list').append(
//       `<p>
//       <span><strong>ID:</strong> ${npc._id}</span>
//       <span id="name-${npc._id}"><strong>Name:</strong> ${npc.name}</span>
//       <span id="name-${npc._id}"><strong>Plot:</strong> ${npc.plot}</span> 
//       </p>
//       <button type="button" id="edit-npc" class="btn btn-success" onclick="editNPC()">Edit</button>
//       <button type="button" id="delete-npc" class="btn btn-danger" onclick="deleteNPC()">Delete</button>`
//     );
// };
//   //showAllNpcs();
//   }); //end add npc

function editNpcPlot() {
console.log("npc plot edited");
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
