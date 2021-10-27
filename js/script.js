// ARRAY 


const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Variabili necessarie 

const slideO = querySelector(".slide-orizzontali");
const slideV = querySelector(".slide-verticali");
let contatore = 0;
const up = document.querySelector(".up");
const down = document.querySelector(".down");



up.addEventListener("click", function(){
    items[contatore].classList.remove ("active");
    mitems[contatore].classList.remove ("active-mini");
    contatore--;
    if (contatore < 0) {
        contatore = items.length -1;
    }
   console.log(contatore);
   items[contatore].classList.add("active");
   mitems[contatore].classList.add("active-mini");
});

down.addEventListener("click", function(){
    items[contatore].classList.remove ("active");
    mitems[contatore].classList.remove ("active-mini");
    contatore++;
    if (contatore > items.length - 1) {
        contatore = 0;
    }
    console.log(items[contatore]);
    items[contatore].classList.add("active");
   mitems[contatore].classList.add("active-mini");
});


