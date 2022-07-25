const username = "Placeholder"
const suite = ["Spades", "Hearts", "Diamonds", "Clubs"]
const cardValue = ["Ace", "2", "3", "4", "5", "6","7","8","9","10","Jack","Queen","King"]
const deck = []

const player = {
    hand: [{}],
    chips: [{}],
    fold: false, 
    currentBet: 0
}

const dealerHand = [{}]

const createDeck = () => {
    for(let i = 0; i < suite.length;i++){
        for(let j = 0; j<cardValue.length; j++){

            let firstPrefix, secondPrefix

            if(cardValue[j].charAt(0) ==1){
                firstPrefix="T"
            }else{
                firstPrefix=cardValue[j].charAt(0)
            }

            secondPrefix = suite[i].charAt(0)

            deck.push({
                name: "" + cardValue[j] + " of " + suite[i],
                suite: suite[i],
                value: j + 1,
                raw: cardValue[j].charAt(0) + suite[i].charAt(0), 
                imgSrc: "primary/" + firstPrefix+ secondPrefix + ".svg"
            })
        }
    }
}

const shuffle = () => {
    let temp = {}
    let roll = 0

    for(let i = 0; i<deck.length; i++){
        roll = Math.floor(Math.random()*52)
        temp = deck[i]
        deck[i] = deck[roll]
        deck[roll] = temp
    }
}

    createDeck()


    $(() => {

        const fold = () => {
            //fold hand 
            //dealer done 
        }
    
        const checkPlayerBust = () => {
            //if player over 21, lose instantly 
                
        }
    
        const dealerHandCheck = () => {
            //check if dealer is below 17 hit 
                //if stand is true, dealer continues 
            //if dealer is over 21, bust
        }
    
        const stand =()=> {
            //set stand to true
            //dealer proceeds to 17
            dealerHandCheck()
        }
    
        const hit = () => {
            //giveCard
                checkPlayerBust()
            dealerHandCheck()
        }
        
        const makeSelection = () => {
    
            //hit
                hit()
                    //include betting
            //stand
                stand()
            //fold
                fold()
                //split
                //doubledown
        }
    
        const initialDeal = () => {
            
            player.hand.push(deck.pop())
            const $playerCardOne = $('<img>').attr("src",`${player.hand[1].imgSrc}`).addClass("playerHandCards")
            $('#playerHandContainer').append($playerCardOne)

            dealerHand.push(deck.pop())
            const $dealerCardOne = $('<img>').attr("src","primary/2B.svg").addClass("dealerHandCards")
            $('#dealerHandContainer').append($dealerCardOne)

            player.hand.push(deck.pop())
            const $playerCardTwo = $('<img>').attr("src",`${player.hand[2].imgSrc}`).addClass("playerHandCards")
            $('#playerHandContainer').append($playerCardTwo)

            dealerHand.push(deck.pop())
            const $dealerCardTwo = $('<img>').attr("src",`${dealerHand[2].imgSrc}`).addClass("dealerHandCards")
            $('#dealerHandContainer').append($dealerCardTwo)


            //Player Receives One Card 
                //Face Up
                //append Card with deck.pop() to player div container 
            //Dealer Receives One Card
                //Face Down
                //append Card FACE DOWN WITHOUT img/src using 2B.svg (append independently)
            //Player Receives One More Card
                //append Card with deck.pop()
            //Dealer Receives One Card 
                //append Card with deck.pop()
        }
    
        const playBlackJack = () => {
             shuffle()
             //betting
             initialDeal()
            //  makeSelection()
            //  //Split & Double Down 
            //  secondaryDeal()
            //  winLose()
        }
    
        const $welcomeToBlackJack = $("<h1>").text("Welcome to Blackjack!")
        const $dealerHandContainer = $('<div>').attr("id","dealerHandContainer").text("Dealer Hand")
        const $playerHandContainer = $('<div>').attr("id","playerHandContainer").text("Player Hand")

        $('body').append($welcomeToBlackJack, $dealerHandContainer, $playerHandContainer)

        playBlackJack()

    })
