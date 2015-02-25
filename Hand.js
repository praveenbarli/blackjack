var Hand = function(name) {
    //member variables
    this.cards = [];
	this.name = name;
    
    //constructor methods
	this.getScore = function(){
		//console.log("Deck constructor called");
		var score = 0;
		var noOfAces = 0;
		console.log("total cards with hand" + this.cards.length);
		if(this.cards.length > 0){
		  	for (var i =0; i < this.cards.length;  i++) {
		     // if(card.faceValue == faceValue.ace)
		     /*if(card.faceValue == faceValue.ace){
		       noOfAces = noOfAces + 1;
			 }*/
			 console.log("facevalue: " + this.cards[i].suitType + this.cards[i].faceValue);
			 score += faceValue[this.cards[i].faceValue];
		    }
		}
		
		console.log("current score of " + this.name + " is " + score);
		return score;
	}
	
	this.addCard = function(newCard){
	 this.cards.push(newCard);
	}
	
		
}

Hand.prototype.getStatus = function(){
   var currentScore = this.getScore();
   
   if(currentScore> 21){
        return this.HandStatus.BUSTED;
	} else if(currentScore==21){
        return this.HandStatus.BLACKJACK;
	} else if(currentScore >=17 && currentScore <=20){
	   return this.HandStatus.STAND;
	} else{
	   return this.HandStatus.INGAME;
	}
}

Hand.prototype.HandStatus = {
      BLACKJACK: "blackjack",
      BUSTED: "busted",
	  STAND: "stand",
      INGAME: "ingame"
    }