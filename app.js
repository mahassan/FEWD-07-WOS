//get all references
const btn__reset = document.querySelector('.btn__reset');
const qwerty = document.getElementById('qwerty');
let phraseUL = document.querySelector('ul');
let missed = 0; //more than 5 losses the game;
let rightWords;

phrase = ["LUKE CAGE IS GANGSTA NOW", "Misty Knight"];
const overlay = document.getElementById('overlay')
//listerner 
btn__reset.addEventListener('click', function () {
    overlay.style.display = "none";
})
//function
function getRandomPhraseAsArray(arr) {
    let randomPhrase = phrase[Math.floor(Math.random() * arr.length)];
    return randomPhrase.split("");
}

function addPhrasetoDisplay(splitedWords) {
    for (i = 0; i < splitedWords.length; i++) {
        li = document.createElement("li");
        li.textContent = splitedWords[i]
        phraseUL.appendChild(li);
        if (splitedWords[i] != ' ') {
            rightWords = li.className = "letter";
        } else {
            li.className = "space";
        }
    }
    return li
}
const phraseArray = getRandomPhraseAsArray(phrase);
const words = addPhrasetoDisplay(phraseArray);


function checkLetter(button) {
    let letterFound = null;
    let ulChildren = phraseUL.children;
    for (let i = 0; i < ulChildren.length; i++) {
        if (ulChildren[i].className.includes("letter")) {
            if (ulChildren[i].textContent.toLowerCase() === button.toLowerCase()) {
                letterFound = true;
                ulChildren[i].classList.add('show');
            }
        }
    }
    return letterFound;
}
function checkWin() {
    const letter = document.querySelectorAll(".letter");
    const shown = document.querySelectorAll('.show');
    if(letter.length === shown.length){
        overlay.className = "win";
        overlay.style.display = "block";
        overlay.innerHTML = "<h1>You won</h1>"; 
    }
    if (missed > 4) {
        console.log("lose");
        overlay.className = "lose";
        overlay.style.display = "block";
        overlay.innerHTML = "<h1>You lose</h1>";
    }
}
qwerty.addEventListener("click", function (e) {
    const target = e.target;
    if (target.type === 'submit') {
        //Generic variable to extend as needed
        //saving in button to reference elsewhere
        const button = e.target.textContent;
        target.className = "chosen";
        target.setAttribute("disabled", "");
        let letterFound = checkLetter(button)
        if (letterFound === null) {
            const scoreboard = document.getElementsByTagName("img");
            for(let i = 0; i < scoreboard.length; i++){
                scoreboard[i].src = "images/lostHeart.png";
            }
            missed += 1;
        }
    }

    checkWin();
});
