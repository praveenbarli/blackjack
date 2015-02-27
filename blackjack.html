//constructor
var CardGame = function () {
  //member variables
  this.deck = new Deck();
  //player could be made array in future.
  this.player = new Hand("Player");
  this.dealer = new Hand("Dealer");
  this.status = GameStatus.STOPPED;
  
  
  this.getCardsBack = function() {
	          var playerCards = this.player.returnCards();
		
		console.log("len of returned player cards" + playerCards.length);
	   for(var card in playerCards){
	      console.log(card.faceValue + " " + card.suitType);
	   }
	   var dealerCards = this.dealer.returnCards();
	   console.log("len of returned dealer cards" + dealerCards.length);
	   
	   this.deck.addCardsBack(playerCards);
	   this.deck.addCardsBack(dealerCards);
	   
	
	};
};

CardGame.prototype.UpdateStatus = function (status) {
    
    $("#labelTemplate").tmpl([status])
                  .appendTo("#statusLabel");
}

//member methods
CardGame.prototype.startGame = function () {
    console.log("Hello, I'm ");
	 
    
	 //Initialize deck and shuffle
	 this.deck.setup();
	 this.deck.shuffle();
	 this.deck.printDeck();
	 
	 this.status = GameStatus.STARTED;
	 //distribute two cards each to dealer and player
    //var deck = Object.create(Deck); //with this constructor function is not called
    //console.log(deck.Deck());
    
	this.distributeCards(this.player, 2);
	this.distributeCards(this.dealer, 2);
	console.log("cards length after removing two" + this.deck.getCount());
	
	//console.log("Player status" + this.player.getStatus());
	
		this.evaluatePlayerStatus();
        $("#startgame_btn").attr('disabled',true);		
};

var GameStatus = { STARTED:"started", STOPPED:"stopped"}


CardGame.prototype.evaluatePlayerStatus = function () {
    
      var currentPlayerStatus = this.player.getStatus();
	  console.log("Player status" + currentPlayerStatus);
	if(currentPlayerStatus == HandStatus.INGAME || currentPlayerStatus == HandStatus.STAND){
	    console.log("In Game. enable hit, stand. ");
		$("#hit").attr('disabled',false); 
		$("#stand").attr('disabled',false);
	} else if(currentPlayerStatus == HandStatus.BLACKJACK){
	     if(this.dealer.getStatus() == HandStatus.BLACKJACK)
		 {
		    console.log("Game tie. BlackJack for both player and dealer. Disable hit, stand. Enable start game");
	     } else {
	         this.UpdateStatus("Player wins!!");
	         $("#hit").attr('disabled', true);
	         $("#stand").attr('disabled', true);
	         $("#stand").attr('disabled', false);
	         console.log("Player wins . BlackJack. Disable hit, stand. Enable start game");
			 
		}
	     endGameUpdatestatus();
	} else {
	    this.UpdateStatus("Player Busted, Dealer Wins");
	    console.log("Dealer WINS. Player busted, Disable hit, stand. ");
	    $("#startgame_btn").attr('disabled', false);
	    $("#hit").attr('disabled', true);
	    $("#stand").attr('disabled', true);
	    endGameUpdatestatus();
	}

};

endGameUpdatestatus= function() 
{
    this.getCardsBack();
    $("#hit").attr('disabled', true);
    $("#stand").attr('disabled', true);
    $("#startgame_btn").attr('disabled', false);
}

CardGame.prototype.Hit = function()
{
  //if(hand == undefined) {
  //   hand = this.player;
  //  }
  //console.log("hit called by " + hand.name);
  this.distributeCards(this.player, 1);
  //if(hand.name == "Dealer"){
  //  this.evaluateDealerStatus();
  //}else{
    this.evaluatePlayerStatus();
	
  
};

CardGame.prototype.Stand = function(){
  console.log("stand called");
   this.evaluateDealerStatus();
 //this.evaluatePlayerStatus();
  
  };
  
  CardGame.prototype.evaluateDealerStatus = function() {
      var currentDealerStatus = this.dealer.getStatus();
	  console.log("Dealer status :" + currentDealerStatus);
	  if (currentDealerStatus == HandStatus.BUSTED) {
	      this.UpdateStatus("Dealer Busted:-)");
	    console.log("Player WINS. Dealer busted. Enable Start game button and disable hit, stand. ");
	    this.getCardsBack();
	    endGameUpdatestatus();
	    
	} else if(currentDealerStatus == HandStatus.BLACKJACK){
	    console.log("Dealer wins . BlackJack . Enable Start game. Disable hit, stand.");
		this.getCardsBack();
		endGameUpdatestatus();
    } else if (currentDealerStatus == HandStatus.STAND) {
	      var dealerScore = this.dealer.getScore();
		  var playerScore = this.player.getScore();
		  console.log("dealer score" + dealerScore + "playerscore: " + playerScore);
		  if(dealerScore > playerScore){
		      console.log("Dealer wins . Enable Start game. Disable hit, stand.");
			  this.getCardsBack();
			  endGameUpdatestatus();
			  this.UpdateStatus("Dealer wins!!)");
		  } else if (dealerScore == playerScore) {
		      this.UpdateStatus("Game Tie");
		       console.log("Tie. Enable Start game. Disable hit, stand.");
			   this.getCardsBack();
			   endGameUpdatestatus();
			   this.UpdateStatus("Game Tie!)");
           } else {
		      this.distributeCards(this.dealer, 1);
		      this.evaluateDealerStatus();
		  }
	} else {
	    
	    this.distributeCards(this.dealer, 1);
	   this.evaluateDealerStatus();
        
	}
};

function  continuegame()
  {
      $("#hit").attr('disabled', true);
      $("#stand").attr('disabled', true);
      $("#startgame_btn").attr('disabled', false);
  }



CardGame.prototype.distributeCards =  function(hand,count){
     console.log("Giving " + count + " cards to " + hand.name);
	 var cardsAvail = this.deck.length;
	 if(cardsAvail < count){
	    console.log("Not enough cards to distribute to " + hand.name);
		return;
	} else {
	    for(var i = 0;i< count;i++){
	        var nextCard = this.deck.getNextCard();
	        
	        if (typeof (nextCard) != "undefined") {
	            hand.addCard(nextCard);
	            //var nextCard = getNextCard(deck.cards);
	            console.log(i + 1 + " " + faceValue[nextCard.faceValue] + " " + nextCard.suitType);
	        }
        }
	}
       
};




var Card = function (value,suit) {
    this.faceValue = value;
    this.suitType = suit;
    this.isIssued = false;
};

var Suit = function (suit) {
    this.suitType = suit;
};

var SuitType = { Diamond: 0, Heart: 1, Spade: 2, Club: 3 };

var faceValue = {
Ace: 1, Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, seven: 7, Eight: 8,
    Nine: 9, Ten: 10, Jack: 10, Queen: 10, King: 10
};
/*var Deck = function () {
    var cards = [];

    
    for (var st in SuitType) {
        for (var fv in faceValue) {
            // console.log(fv + st);
            cards.push(new Card(fv, st));
            
        }
        // more statements
    }

    for (var i=0; i< cards.length;i++) {
        console.log(i +" " +  cards[i].faceValue + " " + cards[i].suitType);
    }
};*/

//Deck class
var Deck = function() {
    //member variables
    this.cards = [];
    
    //constructor methods
	this.setup = function(){
		console.log("Deck constructor called");
		for (var st in SuitType) {
			for (var fv in faceValue) {
			//for(var i = 0;i<faceValue.length ;i++){
				 console.log(fv + st);
			//	this.cards.push(new Card(faceValue[i], st));
			this.cards.push(new Card(fv,st));

			}
			// more statements
		}

		/*for (var i = 0; i < this.cards.length; i++) {
			console.log(i + " " + this.cards[i].faceValue + " " + this.cards[i].suitType);
		}
		for(var card in this.cards){
		   console.log(card.faceValue + card.suitType);
		}*/
	
	}
	
	this.printDeck = function(){
		for (var i = 0; i < this.cards.length; i++) {
			console.log(i + " " + this.cards[i].faceValue + " " + this.cards[i].suitType);
		}
	
	}

	this.getNextCard = function() {
	   // console.log("Deck: Get Card");
		var len = this.cards.length;
		var nextCard;
		if (len > 0) {
			nextCard = this.cards[len - 1];
			//deck.cards[i].isIssued = true;
			this.cards.splice(len - 1, 1);

		}
		return nextCard;
	}
	
	this.getCount = function() {
	    return this.cards.length;
	}
	
	this.shuffle = function () {
	    for (i=0; i< this.cards.length; i++)
	    {
	        randomIndex = Math.floor(Math.random() * this.cards.length);
	        temp = this.cards[i];
	        this.cards[i]= this.cards[randomIndex];
	        this.cards[randomIndex] = temp;
	    }	  
    }
	
	this.addCardsBack = function(returnedCards) {
	
	  console.log("deck size before adding back cards " + this.cards.length);
	   for(var c in returnedCards){
          this.cards.push(c);
        }	   
	   console.log("deck size after adding back cards " + this.cards.length);
	}
	
	
    
};


/*
function Deck() {

    for (var st in SuitType) {
        for (var fv in faceValue) {
            // console.log(fv + st);
            cards.push(new Card(fv, st));

        }
        // more statements
    }

    for (var i = 0; i < cards.length; i++) {
        console.log(i + " " + cards[i].faceValue + " " + cards[i].suitType);
    }

}*/


