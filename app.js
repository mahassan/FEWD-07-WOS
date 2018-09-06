//get all references
const overlay = document;
const btn__reset = document.querySelector('.btn__reset');
const qwerty = document.getElementById('qwerty');
let phraseUL = document.getElementById('phrase');
let missed = 0; //more than 5 losses the game;
let li 

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


function addPhrasetoDisplay(splitedWords){
    for(i = 0; i < splitedWords.length; i++){
        if(splitedWords[i] === ""){
            li.className = " ";
        }else{
           //console.log(splitedWords[i]);
           li = document.createElement("LI");
           li.className = "letter";
           li.textContent = splitedWords[i]
           phraseUL.appendChild(li);
        }
        return li
    }
}
const phraseArray = getRandomPhraseAsArray(phrase);
const words = addPhrasetoDisplay(phraseArray);
console.log(addPhrasetoDisplay(phraseArray))
//console.log(words);

// function checkLetter(){
//     for(i = 0; i <= words.length; i++){
//         console.log(words[i]);
//     }
// }
// checkLetter();

