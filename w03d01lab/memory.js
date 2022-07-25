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

        const resetGame = () => {
                $(".playerHandCards").attr("src","primary/2B.svg")
                $(".dealerHandCards").attr("src","primary/2B.svg")
  
            player.hand =[{}]
            dealerHand = [{}]
            $(".playerHandCards").remove()  
            $(".dealerHandCards").remove()
            playBlackJack()

        }
    
        const checkPlayerBust = () => {
            let playerSum = 0;
            for(let i = 1; i < player.hand.length; i++){
                playerSum += player.hand[i].value
            }
            if(playerSum > 21){
                console.log("It's over")
                resetGame()
            }
        }
    
        const dealerHandCheck = () => {
            let dealerSum = 0;
            for(let i = 1; i < dealerHand.length; i++){
                dealerSum+=dealerHand[i].value
            }
            if(dealerSum >=17){
                //nothing happens
                console.log("Dealer has reached 17")
            }else{
                console.log("dealer receives another card")
                dealerHand.push(deck.pop())
                $('#dealerHandContainer').append(`<img src ='${dealerHand[dealerHand.length-1].imgSrc}' class='dealerHandCards'>`)
            }
        }
    
        const stand =()=> {
            //set stand to true
            //dealer proceeds to 17
            dealerHandCheck()
        }
    
        const hit = () => {
            player.hand.push(deck.pop())
            const $newCard = $("<img>").attr({"src":`${player.hand[player.hand.length-1].imgSrc}`,"class":"playerHandCards"})
            $("#playerHandContainer").append($newCard)
            checkPlayerBust()
            dealerHandCheck()
            makeSelection()
        }
        
        const makeSelection = () => {
    
                const $hit = $("<button>").attr("id","hitButton").addClass("playerChoices").text("HIT")
                const $stand = $("<button>").attr("id","standButton").addClass("playerChoices").text("STAND")
                const $fold = $("<button>").attr("id","foldButton").addClass("playerChoices").text("FOLD")

                const $playerChoiceButtonsContainer = $('<div>').attr("id","playerChoiceButtonsContainer")

                $playerChoiceButtonsContainer.append($hit, $stand, $fold)

                $('body').append($playerChoiceButtonsContainer)

                $hit.on('click', function(){
                    $(this).off('click')
                    $("#playerChoiceButtonsContainer").remove()
                    hit()
                })

                $stand.on('click', function(){
                    $(this).off('click')
                    $("#playerChoiceButtonsContainer").remove()
                    stand()
                })

                $fold.on('click', function(){
                    $(this).off('click')
                    $("#playerChoiceButtonsContainer").remove()
                    fold()
                })

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

        }
    
        const playBlackJack = () => {
            shuffle()
             //betting
            initialDeal()
            makeSelection()
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
