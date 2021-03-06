

// Listes Cartes [ Fichiers - Titre Cartes - Description Cartes]
let file_name = ['KingofCups.jpg', 'KingOfPentacles.jpg', 'KingOfSwords.jpg', 'KingOfWand.jpg', 'KnightofCups.jpg', 'KnightOfPentacle.jpg', 'KnightOfSwords.jpg', 'KnightOfWands.jpg', 'PageOfCups.jpg', 'PageOfPentacles.jpg', 'PageOfSwords.jpg', 'PageOfWands.jpg', 'QueenofCups.jpg', 'QueenOfPentacles.jpg', 'QueenOfSwords.jpg', 'QueenOfWands.jpg'];

let card_name = ['King of Cups', 'King Of Pentacles', 'King Of Swords', 'King Of Wand', 'Knight of Cups', 'Knight Of Pentacle', 'Knight Of Swords', 'Knight Of Wands', 'Page Of Cups', 'Page Of Pentacles', 'Page Of Swords', 'Page Of Wands', 'Queen of Cups', 'Queen Of Pentacles', 'Queen Of Swords', 'Queen Of Wands'];

let info_card = ["UPRIGHT: Emotionally balanced, compassionate, diplomatic.<br><br>REVERSED: Self-compassion, inner feelings, moodiness, emotionally manipulative.<br><br>Description The King of Cups sits on a large stone throne and wears a blue tunic and a gold cape – a symbol of his authority and status. A small fish amulet hangs around his neck symbolising his creativity. In his right hand, he holds a cup representing the emotions, and his left has a sceptre, showing power and control. Unlike the other Cups court cards, he doesn’t look at his cup and seems to be focused elsewhere; perhaps he has already mastered his emotional self and doesn’t need to concentrate as hard on this facet of himself.<br>The King of Cups appears to be floating on a granite block in the middle of a turbulent sea. Behind him on his right, a fish jumps out of the ocean, while on the left, a ship sails steadily despite the waves. These images show that this King stays calm and balanced, even in turbulent conditions, and has learned how to stay open to his emotions and unconscious impulses, without being overwhelmed by them. He keeps power and control while balancing his feelings.", 
"UPRIGHT: Wealth, business, leadership, security, discipline, abundance.<br><br>REVERSED: Financially inept, obsessed with wealth and status, stubborn.<br><br>Description The King of Pentacles sits on a throne embellished with carvings of bulls, representing his connection to the astrological sign of Taurus, and grapes and vines adorn his robe, symbolising wealth and abundance. In his right hand, he holds the sceptre of his power, and in his left, he holds a golden coin, symbolic of his material influence. This King has an innate ability to create material wealth and financial abundance – and better yet, he can sustain his wealth over time through self-discipline, control and leadership. <br>At his feet and around his throne are more vines, flowers and plants, representing the highest attainment of material success. His castle sits behind him, a symbol of all he has built through his efforts and determination. This King is therefore very serious about financial security and has made the accumulation of wealth his focus in life. He is proud of his achievements and likes to show others his prized possessions and wealth.", 
"UPRIGHT: Mental clarity, intellectual power, authority, truth.<br><br>REVERSED: Quiet power, inner truth, misuse of power, manipulation.<br><br>Description The King of Swords sits upon his throne, facing forward as if ready to confront whatever life throws at him. He holds a sword in his right hand, the hand of the conscious, rational mind, and points it upright and to the left, the side of the subconscious, intuitive mind. This symbolises the King’s decisiveness, but also flexibility in all matters; while he makes decisions based mostly on his intellectual understanding, he stays open to his intuition. The King wears a blue tunic, symbolic of a desire for spiritual knowledge, and a purple cape, symbolic of his compassion and intellect. The back of his throne is decorated with butterflies (transformation), crescent moons and an angel just near his left ear, positioned as if to give him subtle guidance. <br>The trees behind him stand still, and the clouds have settled. The wind from the previous Swords court cards has died down, giving the impression of stability and clarity rather than the confusion of sweeping change.", 
"UPRIGHT: Natural-born leader, vision, entrepreneur, honour. <br><br>REVERSED: Impulsiveness, haste, ruthless, high expectations.<br><br>Description The King of Wands sits on his throne, holding a blossoming wand in his hand, a symbol of life and creativity. His throne and cape are decorated with lions and salamanders, both symbols of fire and strength. The salamanders biting their own tails represent infinity and the ongoing drive to move forward against all obstacles.",
"UPRIGHT: Creativity, romance, charm, imagination, beauty. <br><br>REVERSED: Overactive imagination, unrealistic, jealous, moody. <br><br>Description In the Knight of Cups, a knight rides on a white horse and holds out a golden cup as if he bears a message from the heart. Over his armour, the knight wears a cloak covered with images of fish, the symbol of water, consciousness and creativity. His helmet and boots are winged, a symbol of an active and creative imagination and an appreciation for beautiful things. <br>Unlike the Knight of Wands or the Knight of Swords, the horse in the Knight of Cups is not charging forward but instead moves slowly and gracefully, giving an air of calmness and peace. The horse represents power, energy and drive and the colour white is a symbol of purity, spirituality and light. <br>The background is mostly barren, except for some trees far away and the river that flows through, symbolising the power of the emotions and imagination to create a new life force, even where it may seem that there is none.",
"UPRIGHT: Hard work, productivity, routine, conservatism. <br><br>REVERSED: Self-discipline, boredom, feeling ‘stuck’, perfectionism. <br><br>Description The Knight of Pentacles sits on a stationary draught horse, carefully looking at the gold coin held in his hand. He is in no hurry, preferring to assess and plan his path ahead before taking action. In the background, there is a broad field that has been laboriously ploughed row by row, symbolising that this Knight is ready and willing to do the work to realise his dreams, even if it is repetitive and dull.",
"UPRIGHT: Ambitious, action-oriented, driven to succeed, fast-thinking. <br><br>REVERSED: Restless, unfocused, impulsive, burn-out. <br><br>Description The Knight of Swords shows a knight dressed in armour, charging ahead with great energy on his powerful white horse. The knight’s sword is held high, a symbol of his dedication to his purpose and mission. The white horse symbolises the purity of the intellectual energy that motivates the knight. In the background, storm clouds are beginning to form, and the trees bend in the strong winds. The wind doesn’t stop the knight, however; he heads directly into it, eager to complete his mission.",
"UPRIGHT: Energy, passion, inspired action, adventure, impulsiveness.<br><br>REVERSED: Passion project, haste, scattered energy, delays, frustration. <br><br>Description The Knight of Wands sits on his horse in full armour, wearing a yellow robe decorated with salamanders (associated with the element of fire), and a helmet with fiery red plumes flowing behind him. He holds a sprouting wand in his right hand, which symbolises his energy and enthusiasm for his mission. His horse rises up on its hind legs, poised and ready for action. Like all the Wands Court Cards, the background is hot, dry and barren, with mountains soaring in the distance.",
"UPRIGHT: Creative opportunities, intuitive messages, curiosity, possibility.<br><br>REVERSED: New ideas, doubting intuition, creative blocks, emotional immaturity. <br><br>Description The Page of Cups wears a blue tunic with a floral print and a beret on his head with a long, flowing scarf. He stands on the shore, with the wavy sea behind him, holding a cup in his right hand. Surprisingly, a fish pops its head out of the cup and looks at the young man. The fish and the sea behind him represent the element of water and all things to do with creativity, intuition, feelings and emotions. The unexpected appearance of the fish signifies that creative inspiration often comes out of the blue and only when you are open to it.",
"UPRIGHT: Manifestation, financial opportunity, skill development. <br><br>REVERSED: Lack of progress, procrastination, learn from failure. <br><br>Description The Page of Pentacles depicts a young man standing in a grassy field of blooming flowers. In the distance behind him is a small patch of trees and a newly ploughed field, promising an abundant harvest. The mountain range in the horizon signifies the upcoming challenges and obstacles the Page must surmount along his journey. The Page holds a gold coin in his hand and examines it carefully, as if to discover how to manifest even more gold and abundance.",
"UPRIGHT: New ideas, curiosity, thirst for knowledge, new ways of communicating. <br><br>REVERSED: Self-expression, all talk and no action, haphazard action, haste. <br><br>Description The Page of Swords shows a young man standing with his sword pointing upwards to the sky. His body and the sword lean in one direction, but he looks the other way as if to see what else is happening around him. A breeze blows through the young man’s hair, and the clouds behind him appear to dash through the sky, bringing dynamic energy to the card. The ground on which the Page stands is green and fertile, suggesting that the Page’s ideas are likely to bring positive change and forward movement.",
"UPRIGHT: Inspiration, ideas, discovery, limitless potential, free spirit. <br><br>REVERSED: Newly-formed ideas, redirecting energy, self-limiting beliefs, a spiritual path.<br><br>Description The Page of Wands shows a young man holding a long staff in both hands as he looks inquisitively at the green leaves sprouting from the top. His tunic is emblazoned with salamanders, a mythical creature associated with fire and transformation. The Page stands still, with his staff firmly planted on the ground, suggesting that while he is inspired by the potential growth represented by the sprouting staff, he has not yet taken action on this inspiration. <br>In the background, the landscape is barren and mountainous, implying that this Page has the gift of being able to find growth and potential in the most unlikely places. He is so energised by his ideas that he can make anything happen and isn’t limited by his circumstances.",
"UPRIGHT: Compassionate, caring, emotionally stable, intuitive, in flow. <br><br>REVERSED: Inner feelings, self-care, self-love, co-dependency. <br><br>Description The Queen of Cups is a beautiful, introspective woman who sits on a throne at the edge of the sea. In her hands, she holds a golden, cup adorned with handles shaped like angels. Unlike most of the cups in the Suit of Cups cards, this cup is closed – showing that the Queen’s thoughts and feelings come from her subconscious mind and the depths of her soul. <br>She sits upon a stone throne decorated with images of sea-nymphs, fish, and scallop shells. The sea and fish are symbols of the unconscious mind, and water represents emotion, spirit and perception. A cloudless, bright-blue sky and placid water of the sea surround her. Her feet do not touch the water; they rest on colourful pebbles on the shore. It is as if she is connected to her emotions (as represented by the water), but not overwhelmed by them.",
"UPRIGHT: Nurturing, practical, providing financially, a working parent.<br><br>REVERSED: Financial independence, self-care, work-home conflict.<br><br>Description In the Queen of Pentacles, a woman sits on a stone throne decorated with carvings of fruit trees, goats, angels and other symbols of material success and sensual pleasure. She cradles a gold coin with both hands and looks down on it with loving care, as if to nurture this symbol of wealth and material success. Luscious plants and flowers surround her, representing her connection to Mother Earth, nature, and abundance. A small rabbit jumps near to where she is seated, symbolising fertility and suggesting that her life is in flow and alignment.",
"UPRIGHT: Independent, unbiased judgement, clear boundaries, direct communication. <br><br>REVERSED: Overly-emotional, easily influenced, bitchy, cold-hearted.<br><br>Description The Queen of Swords sits on a stone throne decorated with a cherub, representing the Queen’s softer side, and butterflies representing transformation. She faces towards the future, with her left hand raised as if to receive, and in her right hand, she holds a sword up high and straight, representing her desire to find the truth in all matters. As with the earlier Swords Court cards, clouds accumulate in the sky and a strong wind that passes through the trees, symbolising the ongoing nature of change.",
"UPRIGHT: Courage, confidence, independence, social butterfly, determination. <br><br>REVERSED: Self-respect, self-confidence, introverted, re-establish sense of self. <br><br>Description The Queen of Wands sits upon a throne decorated with lions facing opposing directions, a symbol of fire and strength. In her left hand, on her crown and behind her are sunflowers, symbolising life, fertility, joy and satisfaction, and her right hand holds a wand with one small sprout springing to life. A black cat sits at her feet, a sign that while this Queen is bold and outgoing she is also in touch with her shadow self – the darker, lesser-known side of her being."];



    
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

    // Rotation carte
    let card_Picked = document.getElementById('cardToFlip');
    card_Picked.setAttribute('class','card_flipped');
    let card_back = document.getElementById('cardFlipped');
    card_back.innerHTML = '<img class="img_card" src="./assets/img/'+ imageCard +'" alt="">';


    // Ajout Titre
    placeTitre.removeAttribute('class','black');
    placeTitre.innerHTML = titreCarte;
    
    // Ajout Description
    placeDescription.removeAttribute('class','black');
    placeDescription.innerHTML = descriptionCarte;

}



