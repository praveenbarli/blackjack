var Hand = function(name) {
    //member variables
    this.cards = [];
	this.name = name;
    
    //constructor methods
	this.score = function(){
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