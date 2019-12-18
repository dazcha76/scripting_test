const characters = [{name: 'adventurer', image: './assets/class-select-portrait-adventurer.png'},
                    {name: 'expatriate', image: './assets/class-select-portrait-expatriate.png'},
                    {name: 'explorer', image: './assets/class-select-portrait-explorer.png'},
                    {name: 'soldier', image: './assets/class-select-portrait-soldier.png'},
                    {name: 'stowaway', image: './assets/class-select-portrait-stowaway.png'}];

displayCharacters(characters);

function displayCharacters(arr){
  for(character of characters){
    let characterContainer = document.createElement("div");
    characterContainer.classList.add('character', `${character.name}`);
    characterContainer.addEventListener("click", selectCharacter);
    characterContainer.style.backgroundImage = `url(${character.image})`;

    let frame = document.createElement("img");
    frame.src = './assets/class-select-frame.png';
    frame.classList.add('frame');
    characterContainer.appendChild(frame);


    document.getElementById("character-wrapper").appendChild(characterContainer);
  }
}

function selectCharacter(){

}