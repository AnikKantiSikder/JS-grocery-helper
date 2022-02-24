// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);



// ****** FUNCTIONS **********

function addItem(e){
    e.preventDefault();
    const groceryValue = grocery.value;

    // create unique id for every grocery item using getTime()
    const id = new Date().getTime().toString();

    if(groceryValue !== '' && editFlag === false){
        const element = document.createElement('article');
        //add class
        element.classList.add('grocery-item');
        //add id
        const attr  = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
            <p class="title">${groceryValue}</p>
            <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
            </div>
        `;
        // accessing edit and delete button
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

        // apend child
        groceryList.appendChild(element);
        // display success alert
        displayAlert('item added successfully', 'success');
        // show container
        groceryContainer.classList.add('show-container');
        // set back to default
        setBackToDefault();
    }
    else if(groceryValue !== '' && editFlag === true){
        editElement.innerHTML = groceryValue;
        displayAlert('item updated successfully', 'success');
        // set back to default
        setBackToDefault();
    }
    else{
        displayAlert('please enter value', 'danger');
    }
}

// display alert function
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

// set back to default function
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
}

//delete item function
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    console.log(id);
    groceryList.removeChild(element);
    // remove the clear items button when items is 0
    if(groceryList.children.length === 0){
        groceryContainer.classList.remove('show-container');
    }
    // display success alaert
    displayAlert('item removed', 'danger');
    setBackToDefault();
}

//edit item function
let editElement;
let editFlag = false;
let editId = "";

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = 'edit';
}

// clear items function
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    //remove all items from the list
    if(items.length > 0){
        items.forEach(function(item){
            groceryList.removeChild(item);
        })
    }
    // remove the clear items button
    groceryContainer.classList.remove('show-container');
    // display sucess alert
    displayAlert('all items removed successfully', 'success');
    setBackToDefault();
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){

}
function removeFromLocalStorage(id){

}
// ****** SETUP ITEMS **********
