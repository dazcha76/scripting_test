const characters = [{name: 'adventurer', 
                     image: './assets/class-select-portrait-adventurer.png',
                     description: 'The New World always has more need of strong arms and bold spirits... Just as a meat grinder needs meat. live by the sword...',
                     weapon1: 'Badass Riffle',
                     weapon2: 'Potent AF Potion'},
                    {name: 'expatriate', 
                     image: './assets/class-select-portrait-expatriate.png',
                     description: 'The New World always has more need of strong arms and bold spirits... Just as a meat grinder needs meat. live by the sword...',
                     weapon1: 'Badass Riffle',
                     weapon2: 'Potent AF Potion'},
                    {name: 'explorer', 
                     image: './assets/class-select-portrait-explorer.png',
                     description: 'The New World always has more need of strong arms and bold spirits... Just as a meat grinder needs meat. live by the sword...',
                     weapon1: 'Badass Riffle',
                     weapon2: 'Potent AF Potion'},
                    {name: 'soldier', 
                     image: './assets/class-select-portrait-soldier.png',
                     description: 'The New World always has more need of strong arms and bold spirits... Just as a meat grinder needs meat. live by the sword...',
                     weapon1: 'Badass Riffle',
                     weapon2: 'Potent AF Potion'},
                    {name: 'stowaway', 
                     image: './assets/class-select-portrait-stowaway.png',
                     description: 'The New World always has more need of strong arms and bold spirits... Just as a meat grinder needs meat. live by the sword...',
                     weapon1: 'Badass Riffle',
                     weapon2: 'Potent AF Potion'}];

const names = ['adventurer', 'expatriate', 'explorer', 'soldier', 'stowaway'];

let players = [];

displayCharacters(characters);

function displayCharacters(arr){
  for(character of characters){
    let characterContainer = document.createElement('div');
    characterContainer.classList.add('character', `${character.name}`, 'animated', 'zoomIn', 'delay-1s', 'not-selected');
    characterContainer.addEventListener('click', selectPlayerOne);
    characterContainer.style.backgroundImage = `url(${character.image})`;

    let characterDetails = document.createElement('div');
    characterDetails.classList.add('character-details');
    characterContainer.appendChild(characterDetails);

    let characterDescription = document.createElement('div');
    characterDescription.classList.add('character-description');
    characterDescription.innerHTML = character.description;
    characterDetails.appendChild(characterDescription);

    let characterName = document.createElement('div');
    characterName.classList.add('character-name');
    characterName.innerHTML = character.name;
    characterDetails.appendChild(characterName);

    let characterWeapon1 = document.createElement('div');
    characterWeapon1.classList.add('character-weapon1');
    characterWeapon1.innerHTML = character.weapon1;
    characterDetails.appendChild(characterWeapon1);

    let characterWeapon2 = document.createElement('div');
    characterWeapon2.classList.add('character-weapon1');
    characterWeapon2.innerHTML = character.weapon2;
    characterDetails.appendChild(characterWeapon2);

    let frame = document.createElement('img');
    frame.src = './assets/class-select-frame.png';
    frame.classList.add('frame');
    characterContainer.appendChild(frame);

    let activeFrame = document.createElement('img');
    activeFrame.src = './assets/class-select-frame-active.png';
    activeFrame.classList.add('active-frame');
    characterContainer.appendChild(activeFrame);

    document.getElementById('character-wrapper').appendChild(characterContainer);    
  }
}

function adjustSize(){
  let frameHeight = document.querySelector('.frame').height;
  document.querySelector('.character').style.height = `${frameHeight}px`;
  
  let grid = document.querySelectorAll('.character-details');
  for(item of grid){
    item.style.height = `${frameHeight}px`;
  }

  let frameWidth = document.querySelector('.frame').width;
  document.querySelector('.frame-shadow').style.width = `${frameWidth}px`;
}

setTimeout(adjustSize, 100);
window.addEventListener("resize", adjustSize);

function selectPlayerOne(){
  this.children[0].classList.add('hide');
  this.children[1].classList.add('show');
  this.classList.remove('not-selected');
  this.style.opacity = 1;
  this.removeEventListener('click', selectPlayerOne);

  for(let i = 0; i < 3; i++){
    let frameShadow = document.createElement('img');
    frameShadow.src = './assets/class-select-frame-active-extras2.png';
    frameShadow.classList.add('frame-shadow');
    this.appendChild(frameShadow);
  }

  let character = this.className.split(' ');
  players.push(character[1]);

  document.querySelector(`.${character[1]}`).style.transform = 'scale(1.15) translateY(0.5rem)';

  let index = names.indexOf(character[1]);
  names.splice(index, 1);

  for(let character of names){
    document.querySelector(`.${character}`).removeEventListener('click', selectPlayerOne);
  }
  document.querySelector('.next-button').classList.remove('hidden');
  document.querySelector('.next-button').classList.add('animated', 'fadeInUp', 'delay-0.5s');
  document.querySelector('.next-button').addEventListener('click', next);
}

function next(){
  document.querySelector('.player1').classList.add('hidden');
  document.querySelector('.player2').classList.remove('hidden');
  document.querySelector('.player2').classList.add('animated', 'fadeInDown', 'delay-0.5s');

  for(let character of names){
    document.querySelector(`.${character}`).addEventListener('click', selectPlayerTwo);
  }
  document.querySelector('.next-button').removeEventListener('click', next);
  document.querySelector('.next-button').classList.add('hidden');
};

function selectPlayerTwo(){
  document.querySelector('.start-button').classList.remove('hidden');
  this.children[0].classList.add('hide');
  this.children[1].classList.add('show');
  this.classList.remove('not-selected');
  this.style.opacity = 1;
  this.removeEventListener('click', selectPlayerTwo);

  for(let i = 0; i < 3; i++){
    let frameShadow = document.createElement('img');
    frameShadow.src = './assets/class-select-frame-active-extras2.png';
    frameShadow.classList.add('frame-shadow');
    this.appendChild(frameShadow);
  }

  let character = this.className.split(' ');
  players.push(character[1]);

  document.querySelector(`.${character[1]}`).style.transform = 'scale(1.15) translateY(0.5rem)';

  let index = names.indexOf(character[1]);
  names.splice(index, 1);

  for(let character of names){
    document.querySelector(`.${character}`).removeEventListener('click', selectPlayerTwo);
  }

  document.querySelector('.start-button').classList.add('animated', 'fadeInUp', 'delay-0.5s');
  document.querySelector('.start-button').addEventListener('click', start);
}

function start(){
  document.querySelector('.player1').classList.add('hidden');
  document.querySelector('.player2').classList.add('hidden');
  document.querySelector('.play').classList.remove('hidden');
  document.querySelector('.play').classList.add('animated', 'fadeInDown', 'delay-0.5s');
  document.getElementById('character-wrapper').classList.add('animated', 'zoomIn', 'delay-1s');
  document.getElementById('character-wrapper').style.justifyContent = 'center';
  for(let character of names){
    document.querySelector(`.${character}`).remove();
  }
  for(player of players){
    document.querySelector(`.${player}`).style.margin = '50px';
  }
  document.querySelector('.button-wrapper').remove();

  setTimeout(adjustSize, 100);
}
