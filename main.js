
const deck = document.getElementById('cardDeck');
const reveal = document.createElement('button');
const reset = document.createElement('button');


// Array of cards --//

const allCards = [
    "0", "1", "2", "3", "5", "8", "13", "20", "40", "100"
]

// -- Lopp to display the array of cards --//
displayCards();
function displayCards() {
    let cards = "";

    for (card of allCards) {
        cards += `
    <button class="card">${card}</button>
    `
        deck.innerHTML = cards;
    }
}


//-- function for choosing and waiting phase --//
function addCard(e) {
    const selection = document.getElementById('selection');
    selection.appendChild(e.target);
    e.target.id = "chosenCard";
    reveal.id = "reveal";
    reveal.innerText = "reveal";
    selection.appendChild(reveal);

}

//--- Function for reveal state --//
function revealCard() {
    document.getElementById("chosenCard").style.color = "black";
    document.getElementById("chosenCard").style.background = "whitesmoke";
    reset.id = 'reset';
    reset.innerText = 'reset';
    selection.appendChild(reset)
}



//--- Eventlisteners for my functions, separately ---- //
deck.addEventListener("click", function (e) {
    addCard(e);

});

reveal.addEventListener('click', function () {
    revealCard();

})

reset.addEventListener('click', function () {
    location.reload();


})
