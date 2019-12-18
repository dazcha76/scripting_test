const characters = [{name: 'adventurer', image: './assets/class-select-portrait-adventurer.png'},
                    {name: 'expatriate', image: './assets/class-select-portrait-expatriate.png'},
                    {name: 'explorer', image: './assets/class-select-portrait-explorer.png'},
                    {name: 'soldier', image: './assets/class-select-portrait-soldier.png'},
                    {name: 'stowaway', image: './assets/class-select-portrait-stowaway.png'}];

displayCharacters(characters);

function displayCharacters(arr){
  for(character of characters){
    let characterContainer = document.createElement('div');
    characterContainer.classList.add('character', `${character.name}`);
    characterContainer.addEventListener('click', selectCharacter);
    characterContainer.style.backgroundImage = `url(${character.image})`;

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

function selectCharacter(){
  console.log(this.children);
  this.children[0].classList.add('hide');
  this.children[1].classList.add('show')
  this.removeEventListener('click', selectCharacter);
  this.style.opacity = 1;
  this.querySelectorAll('.parent .frame')

  for(let i = 0; i < 5; i++){
    let frameShadow = document.createElement('img');
    frameShadow.src = './assets/class-select-frame-active-extras.png';
    frameShadow.classList.add('frame-shadow');
    this.appendChild(frameShadow);
  }
  
}