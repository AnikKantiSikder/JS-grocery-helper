// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editId = "";

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
        // apend child
        groceryList.appendChild(element);
        // display success alert
        displayAlert('item added successfully', 'sucess');
        // show container
        groceryContainer.classList.add('show-container');
        // set back to default
        setBackToDefault();
    }
    else if(groceryValue !== '' && editFlag === true){

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

// ****** SETUP ITEMS **********
