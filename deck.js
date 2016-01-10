class Gradient {
  constructor(shape='radial', colors=['red','orange','yellow','green','blue','purple']){
    this.gradient = shape; 
  }
}


class Dice { 
  constructor(sides, n){
    this.sides = sides;
    this.sides = sides;
  }

  roll(){

  }

}

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

class Deck { 
  constructor(cards){
    this.cards = cards;
  } 

  shuffle(){
    console.log('…shuffling…');
    shuffle(this.cards);
  }

  draw(){
    return this.cards.pop();
  }
}

class CardDeck extends Deck { 
  constructor(){ 
    this.suits = [
      { suit: 'spades',   symbol:'black', symbol: '♠' }, 
      { suit: 'hearts',   symbol:'red',   symbol: '♥' }, 
      { suit: 'diamonds', symbol:'red',   symbol: '♦' }, 
      { suit: 'clubs',    symbol:'black', symbol: '♣' }
    ]
    
    this.ranks = [
      { rank: "2",  name: "2"     },
      { rank: "3",  name: "3"     },
      { rank: "4",  name: "4"     },
      { rank: "5",  name: "5"     },
      { rank: "6",  name: "6"     },
      { rank: "7",  name: "7"     },
      { rank: "8",  name: "8"     },
      { rank: "9",  name: "9"     },
      { rank: "10", name: "10"    },
      { rank: "J",  name: "Jack"  },
      { rank: "K",  name: "King"  },
      { rank: "Q",  name: "Queen" },
      { rank: "A",  name: "Ace"   }
    ]
   
    this.cards = [];

    this.suits.forEach(suit => {
      this.ranks.forEach(rank => {
        var card = Object.assign({}, rank, suit);
        this.cards.push(card);
      }) 
    })

    this.cards.push( { "rank": null, "name": "Joker", "suit": null, "symbol": "Joker" } );

    this.shuffle();
  }

  draw(){ 
    var drawn = this.cards.pop();    
    if(drawn.name == 'Joker'){ 
      this.shuffle();
      this.draw();
    } else { 
      return drawn 
    }
  }
}
