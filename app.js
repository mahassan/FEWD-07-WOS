//get all references
const overlay = document;
const btn__reset = document.querySelector('.btn__reset');
const qwerty = document.getElementById('qwerty');
let phraseUL = document.querySelector('ul');
let missed = 0; //more than 5 losses the game;
let rightWords;

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
            li = document.createElement("li");
            li.textContent = splitedWords[i]
            phraseUL.appendChild(li);
        if(splitedWords[i] != ' '){
            rightWords = li.className = "letter";
        }else{
            li.className = "space";
        }
    }
    return li
}
const phraseArray = getRandomPhraseAsArray(phrase);
const words = addPhrasetoDisplay(phraseArray);


function checkLetter(button){
    let ulChildren = phraseUL.children;
    for(let i= 0; i<ulChildren.length;i++){
        //console.log(ulChildren[i].textContent === button)
        if(ulChildren[i].className === 'letter' && ulChildren[i].textContent === button){
          ulChildren[i].classList.add('show');
        }
    }
}
//checkLetter()

qwerty.addEventListener("click", function(e){
    //Generic variable to extend as needed
    const target = e.target;
    //saving in button to reference elsewhere
    const button = e.target.textContent
    checkLetter(button)
    target.className = "chosen";
    target.setAttribute("disabled","")
})
