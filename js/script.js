// ARRAY 


// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

// const title = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ]

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]


// SCRIPT CON HTML COLLECTION

// Variabili necessarie 

const items = document.getElementsByClassName("item");
// console.log(items);
const mitems = document.getElementsByClassName("mini-item");
// console.log(minItems);
let contatore = 0;
// console.log(contatore);
const up = document.querySelector(".up");
// console.log(up);
const down = document.querySelector(".down");
// console.log(down);

down.addEventListener("click", function(){
    contatore--;
    if (contatore < 0) {
        contatore = items.length -1;
    }
   console.log(contatore);

});

up.addEventListener("click", function(){
    contatore++;
    if (contatore > items.length - 1) {
        contatore = 0;
    }

    console.log(contatore);

});


