const username = "Placeholder"
const suite = ["Spades", "Hearts", "Diamonds", "Clubs"]
const cardValue = ["Ace", "2", "3", "4", "5", "6","7","8","9","10","Jack","Queen","King"]
const deck = []

const player = {
    hand: [{}],
    chips: [{}],
    fold: false, 
    currentBet: 0, 
    alive: false
}

const dealer =  {
    hand: [{}],
    hold: false, 
    alive: false
}

let gameStatus = true;

let standHand= false

const createDeck = () => {
    for(let i = 0; i < suite.length;i++){
        for(let j = 0; j<cardValue.length; j++){

            let firstPrefix, secondPrefix
            let valueCard = 0

            if(cardValue[j].charAt(0) ==1){
                firstPrefix="T"
            }else{
                firstPrefix=cardValue[j].charAt(0)
            }

            if(cardValue[j]=='Ace'){
                valueCard=1
            }else if(cardValue[j]=="King" || cardValue[j]=="Queen" || cardValue[j]=="Jack"){
                valueCard = 10
            } else{
                valueCard = j+1
            }

            secondPrefix = suite[i].charAt(0)

            deck.push({
                name: "" + cardValue[j] + " of " + suite[i],
                suite: suite[i],
                value: valueCard,
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

        const $hit = $("<button>").attr("id","hitButton").addClass("playerChoices").text("HIT")
        const $stand = $("<button>").attr("id","standButton").addClass("playerChoices").text("STAND")
        // const $fold = $("<button>").attr("id","foldButton").addClass("playerChoices").text("FOLD")

        const $playerChoiceButtonsContainer = $('<div>').attr("id","playerChoiceButtonsContainer")

        // const fold = () => {
        // }

        // const resetGame = () => {
        //     $('body').html('')
        // }
    
        const checkPlayerBust = () => {
            let playerSum = 0;
            for(let i = 0; i < player.hand.length; i++){
                playerSum += player.hand[i].value
            }
            if(playerSum > 21){
                console.log(player.hand)
                console.log(playerSum)
                alert("You bust!")
                $('body').html("Game Over You Bust!")
                gameStatus=false
            }

        }
    
        const compareHands = (dealer) => {
            let playerSum = 0
            for(let i = 0; i< player.hand.length;i++){
                playerSum+=player.hand[i].value
            }
            if(playerSum > dealer){
                alert("Player Wins")
                gameStatus=false
            }else if(playerSum == dealer){
                alert("It's a tie")
                gameStatus=false
            }else if(playerSum < dealer){
                alert("Dealer wins")
                gameStatus=false
            }
            $('body').html("Game Over Thanks for Playing")
        }

        const dealerHandCheck = () => {
            let dealerSum = 0;
            for(let i = 0; i < dealer.hand.length; i++){
                dealerSum+=dealer.hand[i].value
            }
            if(dealerSum >21){
                alert("You won! Dealer bust")
                $('body').html("Dealer Bust You Win")
                gameStatus=false
            }else if(dealerSum >=17 && dealerSum <=21 && standHand == false){
                        makeSelection()                
            }else if(dealerSum <= 21 && dealerSum >=17 && standHand == true){
                compareHands(dealerSum)
            }else if(standHand == true){
                dealer.hand.push(deck.pop())
                $('#dealerHandContainer').append(`<img src ='${dealer.hand[dealer.hand.length-1].imgSrc}' class='dealerHandCards'>`)
                dealerHandCheck()
            }else {
                console.log("dealer receives another card")
                dealer.hand.push(deck.pop())
                $('#dealerHandContainer').append(`<img src ='${dealer.hand[dealer.hand.length-1].imgSrc}' class='dealerHandCards'>`)
                makeSelection()               
            }

        }
    
        const stand =()=> {
            standHand = true
            dealerHandCheck()
        }
    
        const hit = () => {
            player.hand.push(deck.pop())
            const $newCard = $("<img>").attr("src",`${player.hand[player.hand.length-1].imgSrc}`)
            $("#playerHandContainer").append($newCard)
            checkPlayerBust()
            if(gameStatus!=false){
                dealerHandCheck()
            }

        }
        
        const makeSelection = () => {
    
            if(gameStatus == true){
                $playerChoiceButtonsContainer.append($hit, $stand)

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

                // $fold.on('click', function(){
                //     $(this).off('click')
                //     $("#playerChoiceButtonsContainer").remove()
                //     fold()
                // })
            }else{
                gameStatus = true
                playBlackJack()
            }
               

                //split
                //doubledown
        }
    
        const initialDeal = () => {
            
            player.hand[0] = deck.pop()
            const $playerCardOne = $('<img>').attr("src",`${player.hand[0].imgSrc}`).addClass("playerHandCards")
            $('#playerHandContainer').append($playerCardOne)

            dealer.hand[0] = deck.pop()
            const $dealerCardOne = $('<img>').attr("src","primary/2B.svg").addClass("dealerHandCards")
            $('#dealerHandContainer').append($dealerCardOne)

            player.hand[1] = deck.pop()
            const $playerCardTwo = $('<img>').attr("src",`${player.hand[1].imgSrc}`).addClass("playerHandCards")
            $('#playerHandContainer').append($playerCardTwo)

            dealer.hand[1] = deck.pop()
            const $dealerCardTwo = $('<img>').attr("src",`${dealer.hand[1].imgSrc}`).addClass("dealerHandCards")
            $('#dealerHandContainer').append($dealerCardTwo)
            console.log(dealer.hand)
            console.log(player + "Player")

        }
    
        const playBlackJack = () => {
            createDeck()
            shuffle()
             //betting
            initialDeal()
            makeSelection()
            //  //Split & Double Down 
            //  secondaryDeal()
            //  winLose()
        }
    
        const $welcomeToBlackJack = $("<h1>").text("Welcome to One Round Blackjack! Aces are only One! House Rules!")
        const $dealerHandContainer = $('<div>').attr("id","dealerHandContainer").text("Dealer Hand")
        const $playerHandContainer = $('<div>').attr("id","playerHandContainer").text("Player Hand")
        $('body').append($welcomeToBlackJack, $dealerHandContainer, $playerHandContainer)

        playBlackJack()

    })
