var Hand = function(name) {
    //member variables
   // this.cards = [];
	//this.name = name;
	//private member
	var status = HandStatus.INGAME;
	var cards = [];
    var currentScore = 0;
	var scoredCardsCnt = 0;
	//var lastReturnedCardIndex=-1;
    //private methods
	function calculateScore() {
		//console.log("Deck constructor called");
		var score = 0;
		//var noOfAces = 0;
		var haveAce = false;
		console.log("total cards with hand" + cards.length);
		for (var i =0; i < cards.length;  i++) {
		     // if(card.faceValue == faceValue.ace)
		     /*if(card.faceValue == faceValue.ace){
		       noOfAces = noOfAces + 1;
			 }*/
			// console.log("facevalue: " + cards[i].suitType + cards[i].faceValue);
			 
			// console.log("faceValue.ace :" + faceValue.ace);
			 var cardScore = faceValue[cards[i].faceValue];
			 if(cardScore == faceValue.ace){
			    haveAce = true;
			 }
			 score += cardScore;
		}
		
		if((score + 10 <= 21) && haveAce){
		    score =score+ 10;
		}
		
		console.log("current score of " + name + " is " + score);
		//return score;
		currentScore = score;
	}
	
	
	function evaluateStatus(){
		//var crntScore = getScore();
		calculateScore();
         console.log("evaluateStatus:: "+ currentScore);
		if(currentScore> 21){
			status = HandStatus.BUSTED;
		} else if(currentScore==21){
			status = HandStatus.BLACKJACK;
		} else if(currentScore >=17 && currentScore <=20){
			status = HandStatus.STAND;
		} else{
			status = HandStatus.INGAME;
		}
		//console.log("status" + this.status);
	}
	
	//privileged method
	this.getStatus = function(){
		evaluateStatus();
		console.log("status" + status);
		return status;
	};
	
	this.addCard = function(newCard){
	  
	  cards.push(newCard);
	  
	  $("#template").tmpl([newCard.faceValue + ", " + newCard.suitType])
					.appendTo("#" + name);
	}
	
	this.getScore = function(){
	    if(scoredCardsCnt <cards.length){
		   calculateScore();
		   scoredCardsCnt = cards.length;
		} 
		    return currentScore;
		
	}
	
	/*this.getCards = function(){
	    var card_values = [];
	    for(var i = lastReturnedCardIndex +1; i<cards.length;i++){
		  card_values.push(cards[i].faceValue + " " + cards[i].suitType);
		}
		lastReturnedCardIndex = i -1;
		return card_values;
	}*/
	
	//return cards back after the game
	this.returnCards = function(){
	  // console.log("len before returning" + cards.length);
	  return cards.splice(0,cards.length);
	}
	
		
}

 //public methods
	

var HandStatus = {
      BLACKJACK: "blackjack",
      BUSTED: "busted",
	  STAND: "stand",
      INGAME: "ingame"
    };