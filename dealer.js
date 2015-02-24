//constructor
var Dealer = function () {

};

//member methods
Dealer.prototype.startGame = function () {
    console.log("Hello, I'm ");
     var deck = new Deck();
	 var player = new Hand();
	 deck.setup();
    //var deck = Object.create(Deck); //with this constructor function is not called
    //console.log(deck.Deck());
    console.log("Getting 2 cards for dealer");
        for(var i = 0;i<2;i++){
            var nextCard = deck.getCard();
			player.addCard(nextCard);
            //var nextCard = getCard(deck.cards);
            console.log(i+1 + " " + faceValue[nextCard.faceValue] + " " + nextCard.suitType);
        }
		
	console.log("cards length after removing two" + deck.getCount());
	
	console.log("Player score" + player.score());
			
};


var Card = function (value,suit) {
    this.faceValue = value;
    this.suitType = suit;
    this.isIssued = false;
};

var Suit = function (suit) {
    this.suitType = suit;
};

var SuitType = { DIAMOND: 0, HEART: 1, SPADE: 2, CLUB: 3 };

var faceValue = {
ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8,
    nine: 9, ten: 10, jack: 10, queen: 10, king: 10
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

		for (var i = 0; i < this.cards.length; i++) {
			console.log(i + " " + this.cards[i].faceValue + " " + this.cards[i].suitType);
		}
	
	}

	this.getCard = function() {
	    console.log("Deck: Get Card");
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


