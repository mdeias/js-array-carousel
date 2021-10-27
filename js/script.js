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

// Variabili 
const contentO = document.getElementsByClassName ("item");
const contentV = document.getElementsByClassName ("mini-item");
const testoTitolo = document.getElementsByClassName ("titolo");
const testoParagrafo = document.getElementsByClassName ("paragrafo");
const slideO = document.querySelector(".slide-orizzontali");
const slideV = document.querySelector(".slide-verticali");
let contatore = 3;
const up = document.querySelector(".up");
const down = document.querySelector(".down");

// ciclo immagini orizzontali
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

// ciclo immagini verticali

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

// ciclo titoli

for(let i= 0; i < title.length; i++){
   
    const titolo = document.createElement("h1");
    titolo.className = "titolo";
    if (i === contatore) {
       titolo.classList.add("active-t"); 
    }
    titolo.innerHTML = title[i];
    slideO.append(titolo); 
}

// ciclo paragrafi

for(let i= 0; i < text.length; i++){
   
    const paragrafo = document.createElement("p");
    paragrafo.className = "paragrafo";
    if (i === contatore) {
       paragrafo.classList.add("active-p"); 
    }
    paragrafo.innerHTML = text[i];
    slideO.append(paragrafo); 
}

// click

up.addEventListener("click", function(){
    
    contentO[contatore].classList.remove ("active");
    contentV[contatore].classList.remove ("active-mini");
    testoTitolo[contatore].classList.remove ("active-t");
    testoParagrafo[contatore].classList.remove ("active-p");
    contatore--;
    if (contatore < 0) {
        contatore = items.length -1;
    }
//    console.log(contatore);
   contentO[contatore].classList.add("active");
   contentV[contatore].classList.add("active-mini");
   testoTitolo[contatore].classList.add ("active-t");
   testoParagrafo[contatore].classList.add ("active-p");
});

down.addEventListener("click", function(){
    contentO[contatore].classList.remove ("active");
    contentV[contatore].classList.remove ("active-mini");
    testoTitolo[contatore].classList.remove ("active-t");
    testoParagrafo[contatore].classList.remove ("active-p");
    contatore++;
    if (contatore > items.length - 1) {
        contatore = 0;
    }
    // console.log(items[contatore]);
    contentO[contatore].classList.add("active");
    contentV[contatore].classList.add("active-mini");
    testoTitolo[contatore].classList.add ("active-t");
    testoParagrafo[contatore].classList.add ("active-p");
});


