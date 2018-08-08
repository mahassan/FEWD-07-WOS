//get all references
const overlay = document;
const btn__reset = document.querySelector('.btn__reset');
const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0; //more than 5 losses the game;
let ul = phrase.querySelector("ul");


phrase = ["LUKE", "CAGE","Misty","Knight"];

//listerner 
btn__reset.addEventListener('click', function(){
    document.getElementById('overlay').style.display = "none";
})
//function
function getRandomPhraseArray(arr){
   let randomPhrase =  phrase[Math.floor(Math.random()* arr.length)];
   return randomPhrase.split("");
} 
let splitedWords = getRandomPhraseArray(phrase);
console.log(splitedWords);

function addPhraseToDisplay(phrase){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for(i = 0; i < splitedWords.length; i++){
        let li = document.createElement('LI');
        //If the character in the array is a letter and not a space, the function should add the class “letter” to the list item.
        //if(splitedWords.includes(splitedWords[i])){
            li.className = 'letter';
            li.innerHTML = splitedWords[i];
            ul.appendChild(li);
       // }
    }
    splitedWords.includes(splitedWords[i]);
}
addPhraseToDisplay(phrase);

//console.log(ul);