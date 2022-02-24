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

// ****** FUNCTIONS **********

function addItem(e){
    e.preventDefault();
    const groceryValue = grocery.value;
    // create unique id for every grocery item using getTime()
    const id = new Date().getTime().toString();

    if(groceryValue !== '' && editFlag === false){

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


// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
