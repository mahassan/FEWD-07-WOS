//get all references
const overlay = document;
const btn__reset = document.querySelector('.btn__reset');
const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0; //more than 5 losses the game;


phrase = ["L "," U", "K" ," E "]

//listerner 
btn__reset.addEventListener('click', function(){
    document.getElementById('overlay').style.display = "none";
})
//function
function getRandomPhraseArray(arr){
   return phrase[Math.floor(Math.random()* arr.length)];
} 
console.log(getRandomPhraseArray(phrase));