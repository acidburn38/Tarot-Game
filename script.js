

// Listes Cartes [ Fichiers - Titre Cartes - Description Cartes]
let file_name = ['KingofCups.jpg', 'KingOfPentacles.jpg', 'KingOfSwords.jpg', 'KingOfWand.jpg', 'KnightofCups.jpg', 'KnightOfPentacle.jpg', 'KnightOfSwords.jpg', 'KnightOfWands.jpg', 'PageOfCups.jpg', 'PageOfPentacles.jpg', 'PageOfSwords.jpg', 'PageOfWands.jpg', 'QueenofCups.jpg', 'QueenOfPentacles.jpg', 'QueenOfSwords.jpg', 'QueenOfWands.jpg'];

let card_name = ['King of Cups', 'King Of Pentacles', 'King Of Swords', 'King Of Wand', 'Knight of Cups', 'Knight Of Pentacle', 'Knight Of Swords', 'Knight Of Wands', 'Page Of Cups', 'Page Of Pentacles', 'Page Of Swords', 'Page Of Wands', 'Queen of Cups', 'Queen Of Pentacles', 'Queen Of Swords', 'Queen Of Wands'];

let info_card = ["Keywords UPRIGHT: Emotionally balanced, compassionate, diplomatic.<br>REVERSED: Self-compassion, inner feelings, moodiness, emotionally manipulative.<br>Description The King of Cups sits on a large stone throne and wears a blue tunic and a gold cape – a symbol of his authority and status. A small fish amulet hangs around his neck symbolising his creativity. In his right hand, he holds a cup representing the emotions, and his left has a sceptre, showing power and control. Unlike the other Cups court cards, he doesn’t look at his cup and seems to be focused elsewhere; perhaps he has already mastered his emotional self and doesn’t need to concentrate as hard on this facet of himself.<br>The King of Cups appears to be floating on a granite block in the middle of a turbulent sea. Behind him on his right, a fish jumps out of the ocean, while on the left, a ship sails steadily despite the waves. These images show that this King stays calm and balanced, even in turbulent conditions, and has learned how to stay open to his emotions and unconscious impulses, without being overwhelmed by them. He keeps power and control while balancing his feelings.", "Keywords UPRIGHT: Wealth, business, leadership, security, discipline, abundance.<br>REVERSED: Financially inept, obsessed with wealth and status, stubborn.<br>Description The King of Pentacles sits on a throne embellished with carvings of bulls, representing his connection to the astrological sign of Taurus, and grapes and vines adorn his robe, symbolising wealth and abundance. In his right hand, he holds the sceptre of his power, and in his left, he holds a golden coin, symbolic of his material influence. This King has an innate ability to create material wealth and financial abundance – and better yet, he can sustain his wealth over time through self-discipline, control and leadership. <br>At his feet and around his throne are more vines, flowers and plants, representing the highest attainment of material success. His castle sits behind him, a symbol of all he has built through his efforts and determination. This King is therefore very serious about financial security and has made the accumulation of wealth his focus in life. He is proud of his achievements and likes to show others his prized possessions and wealth.", "Keywords UPRIGHT: Mental clarity, intellectual power, authority, truth.<br>REVERSED: Quiet power, inner truth, misuse of power, manipulation.<br>Description The King of Swords sits upon his throne, facing forward as if ready to confront whatever life throws at him. He holds a sword in his right hand, the hand of the conscious, rational mind, and points it upright and to the left, the side of the subconscious, intuitive mind. This symbolises the King’s decisiveness, but also flexibility in all matters; while he makes decisions based mostly on his intellectual understanding, he stays open to his intuition. The King wears a blue tunic, symbolic of a desire for spiritual knowledge, and a purple cape, symbolic of his compassion and intellect. The back of his throne is decorated with butterflies (transformation), crescent moons and an angel just near his left ear, positioned as if to give him subtle guidance. <br>The trees behind him stand still, and the clouds have settled. The wind from the previous Swords court cards has died down, giving the impression of stability and clarity rather than the confusion of sweeping change."];



    
// Variables
let descriptionCarte;
let titreCarte;
let indexCard;
let imageCard;


// Emplacement DOM
let placeDescription = document.getElementById('description');
let placeTitre = document.getElementById('title');

// Fonction Carte Aléatoire
    // Nombre Aléatoire d'index
function carteAleatoire(){
    indexCard = Math.floor(Math.random()*16);
    titreCarte = card_name[indexCard];
    descriptionCarte = info_card[indexCard];
    imageCard = file_name[indexCard];
    console.log('Titre Carte', titreCarte);
    console.log('Description Carte', descriptionCarte);
}

//Ajouter événement de clic sur chaque carte
let placeCartes = document.getElementsByClassName('card');
for (let indexCarte = 0; indexCarte < placeCartes.length; indexCarte++) {
    placeCartes[indexCarte].addEventListener("click", clicCarte);
    }

// Fonction pour cliquer sur carte et faire se retourner la carte
function clicCarte(event){
    event.preventDefault();

    carteAleatoire();

    // // Rotation carte
    // let card_Picked = document.getElementById('picked_card');
    // card_Picked.setAttribute('class','card_flipped');

    // Ajout Titre
    placeTitre.innerHTML = titreCarte;
    
    // Ajout Description
    placeDescription.innerHTML = descriptionCarte;

}



