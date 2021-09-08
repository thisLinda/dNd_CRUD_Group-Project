const dishes = [];

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