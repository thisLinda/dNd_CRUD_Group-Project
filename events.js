// const dishes = [];

const events = [];

// $(() => {
//     renderDishes();
// })


// UNDERSTAND THIS BETTER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// $(() => {
//     renderEvents();
// })

// DOMManager.getAllHouses();


// READ

// function renderDishes() {
//     $("#dishes-container").empty().append(
//         dishes.map(dish => renderDish(dish))
//     );
// }

// // for running at all times?
// function renderEvents(){
//     $('#campaign').empty();
//     for (let event of events){
//         $('#campaign').append(             //Ternary operator on whether it shows a battle or an encounter?
//             `<div id="${event._id}" class="card">
//                 <div class="card-header">
//                     <h2>${event.name}</h2>
//                     <button class="btn btn-danger" onclick="deleteEvent('${event._id}')">Delete</button>
//                 </div>
//                 <div class="card-body">
//                     <div class="card">
//                         <div class="row">
//                             <div class="col-sm">
//                                 ${renderCharacters()}
//                             </div>
//                             <div class="col-sm">
//                                 ${renderMonsters()}
//                             </div>
//                             <div class="col-sm">
//                                 ${renderNPCs()}
//                             </div>
//                         </div>
//                         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
//                     </div>
//                 </div>
//             </div><br>`
//             //Add real functions/see if that works with template literals
//             //Not sure if need card around stuff inside card body?
        





//         //Natalie's code is below:
//         // events.map(event => renderEvents(event))
//         );
//     }
// }

// // for when user click on an event
// function renderEvent(event) {
//     return (
//         `<tr>
//             <td>${dish.name}</td>
//             <td>${dish.type}</td>
//             <td>$${dish.price}</td>
//             <td class="text-end">
//                 <button class="btn btn-sm btn-primary" onclick="openEditDishModal(${dish.id})">Update</button>
//                 <button class="btn btn-sm btn-danger" onclick="deleteDish(${dish.id})">Delete</button>
//             </td>
//         </tr>`
//     )
// }

// DELETE

// function deleteDish(id) {
//     let dishIndex = dishes.findIndex(d => d.id === id);
//     dishes.splice(dishIndex, 1);
//     renderDishes();
// }

function deleteEvent(id) {
    let eventIndex = events.findIndex(event => event.id === id);
    events.splice(eventIndex, 1);
    renderEvents(); // FIx this since not sure if correct function to call???  whole function should work though
}


// CREATE & UPDATE
//currently workin on on 9/9/21 3:04 pm

// const modal = new bootstrap.Modal(document.getElementById('create-event-modal'));
// let currentEditDishId = -1;
// let nextDishId = 0;

const eventModal = new bootstrap.Modal(document.getElementById('create-battle'));
let currentEventToEditId = -1;
let nextEventId = 0;

$('#create-battle').on("click", () => {
    //stores the event's information
    let battleInfo = [];

    //gets the user entered information
    let battleName = document.getElementById('battle-name').val
    // let monsterList = document.getElementById('monster-list').val
    // let characterList = document.getElementById('character-list').val

    //pushes information to battleInfo array
    battleInfo.push(battleName)
    // , characterList, monsterList)

    //updates the next event's id
    nextEventId++;

    //testing to see if it works and will render
    console.log("i am connnected")
    console.log(battleInfo)
    renderEvents();
});


// function openEditDishModal(id) {
//     let dish = dishes.find(d => d.id === id);
//     if(!dish) {
//         dish = {
//             id: nextDishId,
//             name: "",
//             type: "Main",
//             price: 2
//         }
//         nextDishId++;
//     }

//     currentEditDishId = dish.id;

//     $("#dish-name").val(dish.name);
//     $("#dish-type").val(dish.type);
//     $("#dish-price").val(dish.price);

//     modal.show();
// }

// function openEditEventModal(id) {
//     let event = events.find(event => event.id === id);
//     if(!event) {
        
//     }
//         //I gave up here because I don't think I'm going to be able to just change the
//         //information inside like this
    
// }



function saveEditDish() {
    let dish = dishes.find(d => d.id === currentEditDishId);
    if(!dish) {
        dish = { id: currentEditDishId }
        dishes.push(dish);
    }

    dish.name = $('#dish-name').val();
    dish.type = $("#dish-type").val();
    dish.price = $("#dish-price").val();

    modal.hide();

    renderDishes();
}
