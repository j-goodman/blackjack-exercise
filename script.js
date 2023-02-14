/*
The following methods are available to you, defined in htmlFunctions.js:

blackjackHtmlMethods.addCardToCardContainer(card)
Adds whatever text you put in as the "card" parameter to the body
of index.html, contained in the HTML element called "card-container"

blackjackHtmlMethods.addMessageToMessageContainer(message)
Replaces the text of the "message-container" HTML element with
whatever text you provide.

htmlFunctions.js also sets up the button element so that when you
click it, the "drawCard" function runs.
*/

let total = 0;

function drawCard() {
    // console.log("Drawing card.")
    let card = pickRandomCard(deckOfCards)
    total += getValueOfCard(card)
    blackjackHtmlMethods.addCardToCardContainer(card)
    blackjackHtmlMethods.addMessageToMessageContainer(total)
}

const faceCardValues = {
    Ace: 1,
    Jack: 10,
    Queen: 10,
    King: 10,
}

function getValueOfCard(card) {
    const result = Number.parseInt(card)
    // if (Number.isNaN(result)) {
    //     console.log(card)
    //     return faceCardValues[card.split(" ")[0]]
    // } else{
    //     return result
    // }
    return Number.isNaN(result) ? faceCardValues[card.split(" ")[0]] : result;
}

function pickRandomCard(deck) {
    let randomNumber = Math.floor(Math.random() * deck.length)
    return deck.splice(randomNumber, 1)[0];
}

// let randomCard = pickRandomCard(deckOfCards)
// console.log(pickRandomCard(deckOfCards))
// console.log(randomCard)
// console.log(getValueOfCard(randomCard))