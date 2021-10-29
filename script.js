// Nombre Aléatoire d'index
let indexCard = Math.floor(Math.random()*16);

//Ajouter événement de clic sur chaque carte
let placeCartes = document.getElementsByClassName('carte');
    for (let indexCarte = 0; indexCarte < placeCartes.length; indexCarte++) {
        placeCartes[indexCarte].addEventListener("click", clicCarte);
    }
    
// Variables
let descriptionCarte;
let titreCarte;

// Emplacement DOM
let placeDescription = document.getElementById('description');

// Fonction pour cliquer sur carte et faire se retourner la carte
function clicCarte(event){
    event.preventDefault();
    let card_Picked = document.getElementById('picked_card');
    card_Picked.setAttribute('class','card_flipped');
}


