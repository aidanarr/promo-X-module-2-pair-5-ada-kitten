"use strict";

let jslist = document.querySelector(".js-list");

const anastacio = `<li class="card"> <article>
    <img
        class="card_img"
        src="https://dev.adalab.es/gato-siames.webp"
        alt="siames-cat"
    />
    <h3 class="card_title">Anastacio</h3>
    <h4 class="card_race">Siamés</h4>
    <p class="card_description kittenDesc1">
        Porte elegante, su patrón de color tan característico y sus ojos
        de un azul intenso, pero su historia se remonta a Asía al menos
        hace 500 años, donde tuvo su origen muy posiblemente.
        Gato
    </p>
    </article>
    </li>`;

const fiona = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
  Gato
</p>
</li>`;

const cielo = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description kittenDesc3">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
  Gato
</p>
</li>`;

// jslist.innerHTML = anastacio;

// jslist.innerHTML += fiona;

// jslist.innerHTML += cielo;


const form = document.querySelector('.new-form');
const button = document.querySelector('.js-btn-add');

button.addEventListener("click", (event)=>{
  form.classList.toggle('collapsed');

});

const btnCancel = document.querySelector('.js-btn-cancel');
const jsForm = document.querySelector('.js_form');

btnCancel.addEventListener("click", (event)=>{
  form.classList.add('collapsed');
  jsForm.reset();

});

const input_search_desc = document.querySelector('.js_in_search_desc');
const searchButton = document.querySelector(".js-search-button");


const descrSearchText = input_search_desc.value;

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
    if( anastacio.includes(descrSearchText) ) {
        jslist.innerHTML = anastacio;
        }
        
    if( fiona.includes(descrSearchText) ) {
          jslist.innerHTML += fiona;
        }
        
    if( cielo.includes(descrSearchText) ) {
          jslist.innerHTML += cielo;
        }
});

// input_search_desc.addEventListener("change", () => {
//   if( anastacio.includes(descrSearchText) ) {
//     jslist.innerHTML = anastacio;
//     }
    
//     if( kittenDesc2.includes(descrSearchText) ) {
//       jslist.innerHTML += fiona;
//     }
    
//     if( kittenDesc3.includes(descrSearchText) ) {
//       jslist.innerHTML += cielo;
//     }
// });


