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
const contentO = document.getElementsByClassName ("item");
const contentV = document.getElementsByClassName ("mini-item");
const slideO = document.querySelector(".slide-orizzontali");
const slideV = document.querySelector(".slide-verticali");
let contatore = 3;
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

for(let i= 0; i < items.length; i++){
   
    const titolo = document.createElement("h1");
    titolo.className = "titolo";
    if (i === contatore) {
       titolo.classList.add("active"); 
    }
    titolo.innerHTML = title[i];
    slideO.append(titolo); 
}

for(let i= 0; i < items.length; i++){
   
    const paragrafo = document.createElement("p");
    paragrafo.className = "paragrafo";
    if (i === contatore) {
       paragrafo.classList.add("active"); 
    }
    paragrafo.innerHTML = text[i];
    slideO.append(paragrafo); 
}

up.addEventListener("click", function(){
    
    contentO[contatore].classList.remove ("active");
    contentV[contatore].classList.remove ("active-mini");
    contatore--;
    if (contatore < 0) {
        contatore = items.length -1;
    }
//    console.log(contatore);
   contentO[contatore].classList.add("active");
   contentV[contatore].classList.add("active-mini");
});

down.addEventListener("click", function(){
    contentO[contatore].classList.remove ("active");
    contentV[contatore].classList.remove ("active-mini");
    contatore++;
    if (contatore > items.length - 1) {
        contatore = 0;
    }
    // console.log(items[contatore]);
    contentO[contatore].classList.add("active");
    contentV[contatore].classList.add("active-mini");
});


