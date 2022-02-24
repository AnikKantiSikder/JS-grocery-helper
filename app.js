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
    
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
