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

//?does this work?

  document.getElementById('add-npcs').addEventListener('click', () => {
  npcs.push({ 
    id: npcs.length+=2,
    name: `${document.getElementById('npc-name').value}`,
    plot: `${document.getElementById('npc-plot').value}`
  });
  console.log(npcs);
  }); //end arrow function

function editNpcPlot() {
console.log("npc plot edited");
}

function showAllNpcs() {

}

function deleteNpc() {
//slice or splice
}

function calculateId() {
  // equals npcs.length + 1?
}