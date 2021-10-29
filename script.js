//Ajouter événement de clic sur chaque carte
let placeCartes = document.getElementsByClassName('carte');
    for (let indexCarte = 0; indexCarte < placeCartes.length; indexCarte++) {
        placeCartes[indexCarte].addEventListener("click", clicCarte);
    }
    
// Variables
let descriptionCarte;
let titreCarte;

// Fonction pour cliquer sur carte et faire se retourner la carte
function clicCarte(event){
    event.preventDefault();
    let card_Picked = event.currentTarget.innerText;
    card_Picked.setAttribute('class','card_flipped');
}

let placeDescription = document.getElementById('description');
