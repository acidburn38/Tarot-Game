let file_name = ['KingofCups.jpg', 'KingOfPentacles.jpg', 'KingOfSwords.jpg', 'KingOfWand.jpg', 'KnightofCups.jpg', 'KnightOfPentacle.jpg', 'KnightOfSwords.jpg', 'KnightOfWands.jpg', 'PageOfCups.jpg', 'PageOfPentacles.jpg', 'PageOfSwords.jpg', 'PageOfWands.jpg', 'QueenofCups.jpg', 'QueenOfPentacles.jpg', 'QueenOfSwords.jpg', 'QueenOfWands.jpg'];

let card_name = ['King of Cups', 'King Of Pentacles', 'King Of Swords', 'King Of Wand', 'Knight of Cups', 'Knight Of Pentacle', 'Knight Of Swords', 'Knight Of Wands', 'Page Of Cups', 'Page Of Pentacles', 'Page Of Swords', 'Page Of Wands', 'Queen of Cups', 'Queen Of Pentacles', 'Queen Of Swords', 'Queen Of Wands'];

let info_card = [];


//Ajouter événement de clic sur chaque carte
let placeCartes = document.getElementsByClassName('carte');
    for (let indexCarte = 0; indexCarte < 1; indexCarte++) {
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

