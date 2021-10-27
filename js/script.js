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

const slideO = document.querySelector(".slide-orizzontali");
const slideV = document.querySelector(".slide-verticali");
let contatore = 0;
const up = document.querySelector(".up");
const down = document.querySelector(".down");

for(let i= 0; i < items.length; i++){
    console.log(items[i]);
    const item = document.createElement("div");
    item.className = "item";
    if (i === contatore) {
       item.classList.add("active"); 
    }
    item.innerHTML = `<img src="${items[i]}" alt="">`;
    slideO.append(item); 
}

for(let i= 0; i < items.length; i++){
    console.log(items[i]);
    const item = document.createElement("div");
    item.className = "mini-item";
    if (i === contatore) {
       item.classList.add("active-mini"); 
    }
    item.innerHTML = `<img src="${items[i]}" alt="">`;
    slideV.append(item); 
}



up.addEventListener("click", function(){
    item[contatore].classList.remove ("active");
    item[contatore].classList.remove ("active-mini");
    contatore--;
    if (contatore < 0) {
        contatore = items.length -1;
    }
//    console.log(contatore);
   item[contatore].classList.add("active");
   item[contatore].classList.add("active-mini");
});

down.addEventListener("click", function(){
    items[contatore].classList.remove ("active");
    mitems[contatore].classList.remove ("active-mini");
    contatore++;
    if (contatore > items.length - 1) {
        contatore = 0;
    }
    // console.log(items[contatore]);
    item[contatore].classList.add("active");
   items[contatore].classList.add("active-mini");
});


