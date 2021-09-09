// const dishes = [];

const events = [];

// $(() => {
//     renderDishes();
// })


// UNDERSTAND THIS BETTER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(() => {
    renderEvents();
})


// READ

// function renderDishes() {
//     $("#dishes-container").empty().append(
//         dishes.map(dish => renderDish(dish))
//     );
// }

// for running at all times?
function renderEvents(){
    $('#campaign').empty();
    for (let event of events){
        $('#campaign').append(             //Ternary operator on whether it shows a battle or an encounter?
            `<div id="${event._id}" class="card">
                <div class="card-header">
                    <h2>${event.name}</h2>
                    <button class="btn btn-danger" onclick="deleteEvent('${event._id}')">Delete</button>
                </div>
                <div class="card-body">
                    <div class="card">
                        <div class="row">
                            <div class="col-sm">
                                ${renderCharacters()}
                            </div>
                            <div class="col-sm">
                                ${renderMonsters()}
                            </div>
                            <div class="col-sm">
                                ${renderNPCs()}
                            </div>
                        </div>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
                    </div>
                </div>
            </div><br>`
            //Add real functions/see if that works with template literals
            //Not sure if need card around stuff inside card body?
        





        //Natalie's code is below:
        // events.map(event => renderEvents(event))
        );
    }
}

// for when user click on an event
function renderEvent(event) {
    return (
        `<tr>
            <td>${dish.name}</td>
            <td>${dish.type}</td>
            <td>$${dish.price}</td>
            <td class="text-end">
                <button class="btn btn-sm btn-primary" onclick="openEditDishModal(${dish.id})">Update</button>
                <button class="btn btn-sm btn-danger" onclick="deleteDish(${dish.id})">Delete</button>
            </td>
        </tr>`
    )
}

// DELETE

function deleteDish(id) {
    let dishIndex = dishes.findIndex(d => d.id === id);
    dishes.splice(dishIndex, 1);
    renderDishes();
}

// CREATE & UPDATE

const modal = new bootstrap.Modal(document.getElementById('create-event-modal'));
let currentEditDishId = -1;
let nextDishId = 0;

function openEditDishModal(id) {
    let dish = dishes.find(d => d.id === id);
    if(!dish) {
        dish = {
            id: nextDishId,
            name: "",
            type: "Main",
            price: 2
        }
        nextDishId++;
    }

    currentEditDishId = dish.id;

    $("#dish-name").val(dish.name);
    $("#dish-type").val(dish.type);
    $("#dish-price").val(dish.price);

    modal.show();
}

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

// Twinkie Soup, Hot Dog Salad, Deep-Fried Mayonnaise