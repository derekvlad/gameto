import Card from "./card.js"




function newGame(container, cardsCount) {
    
    let cardsNumderArray = []
    let cardsArray = []
    let firstCard = null
    let secondCard = null
    for (let i = 1; i <= cardsCount / 2; i++) {
        cardsNumderArray.push(i)
        cardsNumderArray.push(i)
    }

    cardsNumderArray = cardsNumderArray.sort(() => Math.random() - 0.5)
    for (const cardNumber of cardsNumderArray) {
        cardsArray.push(new Card(container, cardNumber, flip))
    }

    function flip(card) {
        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number != secondCard.number) {
                firstCard.open = false
                secondCard.open = false
                firstCard = null
                secondCard = null
            }
        }
        if (firstCard == null) {
            firstCard = card
        }
        else {
            if (secondCard == null) {
                secondCard = card
            }
        }

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number == secondCard.number) {
                firstCard.success = true
                secondCard.success = true
                firstCard = null
                secondCard = null
            }
        }
        if (document.querySelectorAll('.card.success').length == cardsNumderArray.length) {
            alert("Победа")
            container.innerHTML = ''
            let cardsNumderArray = []
            let cardsArray = []
            let firstCard = null
            let secondCard = null
            newGame(container, cardsCount)
        }
    }
}


newGame(document.getElementById('game'), 12)