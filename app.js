//get all references
const overlay = document;
const btn__reset = document.querySelector('.btn__reset');
const qwerty = document.getElementById('qwerty');
let phraseUL = document.querySelector('ul');
let missed = 0; //more than 5 losses the game;

phrase = ["LUKE CAGE IS GANGSTA NOW","Misty Knight"];

//listerner 
btn__reset.addEventListener('click', function(){
    document.getElementById('overlay').style.display = "none";
})
//function
function getRandomPhraseAsArray(arr){
   let randomPhrase =  phrase[Math.floor(Math.random()* arr.length)];
   return randomPhrase.split("");
} 
console.log(getRandomPhraseAsArray(phrase))

function addPhrasetoDisplay(splitedWords){
    for(i = 0; i < splitedWords.length; i++){
            li = document.createElement("li");
            li.textContent = splitedWords[i]
            phraseUL.appendChild(li);
        if(splitedWords[i] != ' '){
            li.className = "letter";
        }else{
            li.className = "space";
        }
    }
    return li
}
const phraseArray = getRandomPhraseAsArray(phrase);
const words = addPhrasetoDisplay(phraseArray);

