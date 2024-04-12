"use strict";

let jslist = document.querySelector(".js-list");

//Anastacio
// const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
// const kittenName1 = 'Anastacio';
// const kittenDesc1 =
//   ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
// const kittenRace1 = 'Siamés';

// //Fiona
// const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
// const kittenName2 = 'Fiona';
// const kittenDesc2 =
//   ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza  gatuna que se caracteriza por la «ausencia» de pelo.';
// const kittenRace2 = 'Sphynx';

// //Cielo
// const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
// const kittenName3 = 'Cielo';
// const kittenDesc3 =
//   ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su  bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
// const kittenRace3 = 'Maine Coon';


const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};


const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza  gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};


const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su  bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

// CARDS
const anastacio = `<li class="card"> <article>
    <img
        class="card_img"
        src="${kittenData_1.image}"
        alt="siames-cat"
    />
    <h3 class="card_title">${kittenData_1.name.toUpperCase()}</h3>
    <h4 class="card_race">${kittenData_1.race}</h4>
    <p class="card_description">
    ${kittenData_1.desc}
    </p>
    </article>
    </li>`;

const fiona = `<li class="card">
    <img
      class="card_img"
      src="${kittenData_2.image}"
      alt="sphynx-cat"
    />
    <h3 class="card_title">${kittenData_2.name.toUpperCase()}</h3>
    <h4 class="card_race">${kittenData_2.race}</h4>
    <p class="card_description">
    ${kittenData_2.desc}
    </p>
    </li>`;

const cielo = `<li class="card">
    <img
      class="card_img"
      src="${kittenData_3.image}"
      alt="maine-coon-cat"
    />
    <h3 class="card_title">${kittenData_3.name.toUpperCase()}</h3>
    <h4 class="card_race">${kittenData_3.race}</h4>
    <p class="card_description">
      ${kittenData_3.desc}
    </p>
    </li>`;



// FORM

const form = document.querySelector('.new-form');
const button = document.querySelector('.js-btn-add');

function showNewCatForm() {
  form.classList.remove('collapsed');
}

function hideNewCatForm() {
  form.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (form.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

button.addEventListener("click", handleClickNewCatForm);


const btnCancel = document.querySelector('.js-btn-cancel');
const jsForm = document.querySelector('.js_form');


btnCancel.addEventListener("click", (event)=>{
  form.classList.add('collapsed');
  jsForm.reset();

});


// Añadir nuevo gatito

const buttonNewKitten = document.querySelector('.js_add_new_kitten');
const urlImage = document.querySelector('.js_url_image');
const nameKitten = document.querySelector('.js_name');
const raceKitten = document.querySelector('.js_race');
const descriptionKitten = document.querySelector('.js_description');
const kittenData = {
  image: '',
  name: '',
  desc: '',
  race: '',
};


// function kittenCard(photo, name, race, description) {
//   jslist.innerHTML = `<li class="card">
//     <img
//       class="card_img"
//       src="${photo}"
//       alt=""
//     />
//     <h3 class="card_title">${name.toUpperCase()}</h3>
//     <h4 class="card_race">${race}</h4>
//     <p class="card_description">
//       ${description}
//     </p>
//     </li>`;
// }


function kittenCard(kittenData) {
  jslist.innerHTML = `<li class="card">
    <img
      class="card_img"
      src="${kittenData.image}"
      alt=""
    />
    <h3 class="card_title">${kittenData.name.toUpperCase()}</h3>
    <h4 class="card_race">${kittenData.race}</h4>
    <p class="card_description">
      ${kittenData.desc}
    </p>
    </li>`;
}

function addNewKitten(event) {
  event.preventDefault();
  const valuePhoto = urlImage.value;
  const valueName = nameKitten.value;
  const valueRace = raceKitten.value;
  const valueDescription = descriptionKitten.value;
  kittenData.name = valueName;
  kittenData.image = valuePhoto;
  kittenData.race = valueRace;
  kittenData.desc = valueDescription;
  kittenCard(kittenData);
}


buttonNewKitten.addEventListener('click', addNewKitten);

console.log(addNewKitten);

// Barra de búsqueda

const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');
const searchButton = document.querySelector(".js-search-button");


searchButton.addEventListener("click", (event) => {
    const descrSearchText = input_search_desc.value;
    const raceSearchText = input_search_race.value;
    event.preventDefault();
    jslist.innerHTML = "";
    if( anastacio.includes(descrSearchText) ) {
      jslist.innerHTML += anastacio;
    }
        
    if( fiona.includes(descrSearchText) ) {
          jslist.innerHTML += fiona;
        }
        
    if( cielo.includes(descrSearchText) ) {
          jslist.innerHTML += cielo;
        }
      
    if (descrSearchText === "") {
      alert("falta descripción");
    }
    
    if (raceSearchText === "") {
      alert("falta raza");
    }
});







