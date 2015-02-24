var Hand = function() {
    //member variables
    this.cards = [];
    
    //constructor methods
	this.score = function(){
		//console.log("Deck constructor called");
		var score = 0;
		for (var card in this.cards) {
		  // if(card.faceValue == faceValue.ace)
			score += faceValue[card.faceValue];
		}
		return score;
	}
	
	this.addCard = function(newCard){
	 this.cards.push(newCard);
	}
		
		
}