
const dishes = [
  { "id": 1,
    "name": "Helms Deep",
  "type": "battle",
"price": "thing 1"
},
{ "id": 2,
"name": "Appomattox",
"type": "battle",
"price": "thing 2"
},
{ "id": 3,
"name": "At The Last Drop",
"type": "encounter",
"price": "thing 3"
},
];

$(() => {
    renderDishes();
})

// READ

function renderDishes() {
    $("#dishes-container").empty().append(
        dishes.map(dish => renderDish(dish))
    );
}

function renderDish(dish) {
    return (
        `<div class="card" style="width: 15rem;">
        <div class="card-body">
        <h3 class="card-title">${dish.id}: ${dish.name}</h3>
        <h6>${dish.type}</h6>
        <p class="card-text">${dish.price}</p>
        </div>
        <div class="card-body">
        <button class="btn btn-sm btn-primary" onclick="openEditDishModal(${dish.id})">Update Event</button>
                <button class="btn btn-sm btn-danger" onclick="deleteDish(${dish.id})">Delete Event</button>
                </div>
    <div class="card-body" id="put-sub-code-here">
    </div>
        </div>`
    )
}



// DELETE

function deleteDish(id) {
    let dishIndex = dishes.findIndex(d => d.id === id);
    dishes.splice(dishIndex, 1);
    renderDishes();
}

// CREATE & UPDATE

const modal = new bootstrap.Modal(document.getElementById('edit-dish-modal'));
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
//add things
const npc_modal = new bootstrap.Modal(document.getElementById('edit-dish-modal'));

const monster_modal = new bootstrap.Modal(document.getElementById('edit-dish-modal'));
