"use strict";

let jslist = document.querySelector(".js-list");

//Anastacio
const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio';
const kittenDesc1 =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1 = 'Siamés';

//Fiona
const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 =
  ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza  gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace2 = 'Sphynx';

//Cielo
const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 =
  ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su  bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace3 = 'Maine Coon';

// CARDS
const anastacio = `<li class="card"> <article>
    <img
        class="card_img"
        src="${kittenImage1}"
        alt="siames-cat"
    />
    <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
    <h4 class="card_race">${kittenRace1}</h4>
    <p class="card_description">
    ${kittenDesc1}
    </p>
    </article>
    </li>`;

const fiona = `<li class="card">
<img
  class="card_img"
  src="${kittenImage2}"
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenName2.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description">
${kittenDesc2}
</p>
</li>`;

const cielo = `<li class="card">
<img
  class="card_img"
  src="${kittenImage3}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenName3.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description">
  ${kittenDesc3}
</p>
</li>`;


// FORM

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

// Barra de búsqueda

const input_search_desc = document.querySelector('.js_in_search_desc');
const searchButton = document.querySelector(".js-search-button");


searchButton.addEventListener("click", (event) => {
  
    const descrSearchText = input_search_desc.value;
    event.preventDefault();

    if( anastacio.includes(descrSearchText) ) {
        jslist.innerHTML = anastacio;
        }
        
    if( fiona.includes(descrSearchText) ) {
          jslist.innerHTML = fiona;
        }
        
    if( cielo.includes(descrSearchText) ) {
          jslist.innerHTML = cielo;
        }
      
});







