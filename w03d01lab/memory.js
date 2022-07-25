const username = "Placeholder"
const suite = ["Spades", "Hearts", "Diamonds", "Clubs"]
const cardValue = ["Ace", "2", "3", "4", "5", "6","7","8","9","10","Jack","Queen","King"]
const deck = []

let playerInput=""

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
                imgSrc: firstPrefix+ secondPrefix + ".svg"
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

//createDeck
//shuffleDeck

//-> BlackJack
    //Standard Bet - Chips (Some type)
    //Get Dealt 
        //Player Face Down -> Face Up
        //Dealer Face Down
        //Player Face Down -> Face Up
        //Dealer Face Up
    //Make Selection
            //Split if both cards are the same (Low Priority) 
                //Two Extra Cards
                    //Pay Again 
                //check if enough money/chips
            //Double Down -> Bet Again - No New Cards -> Can Not Get New Cards anymore at all (Medium Priority)
        //Hit/Standard Bet (High Priority)
        //Hold - Dealer Keeeps Going
        //Fold
    //Deal Again - One Card Each 
        //PlayerChoice First
        //DealerCheck - Stand at 17 
    //Repeat Make Selection 
        //Until Game Ends 
    //New Game 

    const fold = () => {
        //fold hand 
    }

    const dealerHandCheck = () => {
        //check if dealer is at 17 
    }

    const stand =()=> {
        //dealer proceeds to 17
        //dealerHandCheck()
    }

    const hit = () => {
        //giveCard
        //dealerHandCheck()
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
        //we need playerhand object, dealerhand object
        //div containers for playerhand, dealerhand 

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
         makeSelection()
         //Split & Double Down 
         secondaryDeal()
         winLose()
    }

    createDeck()


    $(() => {

        playBlackJack()


    })
