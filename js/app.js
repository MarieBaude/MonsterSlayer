class People {
    constructor(name) {
      this.name = name;
      this.hp = 100;
    }
    attack(damage) {
      this.damage = damage;
    }
  }
  
  class Player extends People {
    attackSpe(speDamage) {
      this.speDamage = speDamage;
    }
    heal() {
        this.heal = 10;
    }
  }
  
let player = new Player("You");

player.attack(3); 
player.attackSpe(15); 

/* VARIABLES 
-----------------------------
*/
const playerBar = document.querySelector('.you-life');
const monsterBar = document.querySelector('.monster-life');

const buttonStart = document.querySelector('.new-start-monster');
const buttonAttack = document.querySelector('.attack');
const buttonSpecialAttack = document.querySelector('.special-attack');
const buttonHeal = document.querySelector('.heal');
const buttonGiveUP = document.querySelector('.give-up');

const sectionText = document.querySelector('.text');
const list = document.querySelector('.action-list');

let playerHP = 100;
let monsterHP = 100;

let playerDamage;
let monsterDamage;
let playerSpeDamage;


/* EVENTS
-----------------------------
*/
buttonStart.addEventListener('click', function() {
    appearButton();
});

buttonGiveUP.addEventListener('click', function() {
    reset();
});

buttonAttack.addEventListener('click', function() {
    playerAttack();
    updateSizeBarPlayer();
    updateSizeBarMonster();
    monsterAttack();
    addLiPlayer();
    addLiMonster();
    checkWinner();
});

buttonSpecialAttack.addEventListener('click', function() {
    playerSpecialAttack();
    monsterAttack();
    updateSizeBarPlayer();
    updateSizeBarMonster();
    addLiPlayerSpecial();
    addLiMonster();
    checkWinner();
});

buttonHeal.addEventListener('click', function() {
    playerHeal();
    monsterAttack();
    addLiPlayerHeal();
    addLiMonster();
    checkWinner();
});


/* FUNCTIONS 
-----------------------------
*/
function playerHeal () {
    playerHP += 10;
    playerBar.style.width = playerHP + 10 + '%';
}

function updateSizeBarPlayer () {
    playerBar.style.width = playerHP + '%';
}

function updateSizeBarMonster () {
    monsterBar.style.width = monsterHP + '%';
}

function playerAttack () {
    playerDamage = randomNum(3, 10);
    monsterHP -= playerDamage;
}

function playerSpecialAttack () {
    playerSpeDamage = randomNum(10, 20);
    monsterHP -= playerSpeDamage;
}

function monsterAttack () {
    monsterDamage = randomNum(5, 10);
    playerHP -= monsterDamage;
}

function addLiPlayer () {
    let liPLayer = document.createElement('li.player-action');
    liPLayer.appendChild(document.createTextNode('Player hit monster for ' + playerDamage ));
    list.appendChild(liPLayer);
}

function addLiMonster () {
    let liMonster = document.createElement('li.monster-action');
    liMonster.appendChild(document.createTextNode('\n' + 'Monster hit player for ' + monsterDamage ));
    list.appendChild(liMonster);
}

function addLiPlayerSpecial () {
    let liPLayerSpecial = document.createElement('li.player-action');
    liPLayerSpecial.appendChild(document.createTextNode('Player hit hard monster for ' + playerSpeDamage ));
    list.appendChild(liPLayerSpecial);
}

function addLiPlayerHeal () {
    let liPLayerHeal = document.createElement('li.player-action-heal');
    liPLayerHeal.appendChild(document.createTextNode('Player heals for ' + '10'));
    list.appendChild(liPLayerHeal);
}

function reset () {
    buttonAttack.style.display = 'none';
    buttonSpecialAttack.style.display = 'none';
    buttonHeal.style.display = 'none';
    buttonGiveUP.style.display = 'none';
    sectionText.style.display = 'none';
    buttonStart.style.display = 'inherit';
    playerHP = 100;
    monsterHP = 100;
    list.innerHTML = '';
    playerBar.style.width = '100%';
    monsterBar.style.width = '100%';
}

function checkWinner () {
    if (playerHP <= 0) {
        confirm('Vous avez perdu.\nOk pour recommencer');
        reset();
    } else if (monsterHP <= 0) {
        confirm('Vous avez gagné !\nOk pour recommencer');
        reset();
    }
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function appearButton () {
    buttonStart.style.display = 'none';
    buttonAttack.style.display = 'inherit';
    buttonSpecialAttack.style.display = 'inherit';
    buttonHeal.style.display = 'inherit';
    buttonGiveUP.style.display = 'inherit';
    sectionText.style.display = 'inherit';
}