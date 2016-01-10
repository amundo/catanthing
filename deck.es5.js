"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Gradient = function Gradient() {
  var shape = arguments[0] === undefined ? "radial" : arguments[0];
  var colors = arguments[1] === undefined ? ["red", "orange", "yellow", "green", "blue", "purple"] : arguments[1];

  _classCallCheck(this, Gradient);

  this.gradient = shape;
};

var Dice = (function () {
  function Dice(sides, n) {
    _classCallCheck(this, Dice);

    this.sides = sides;
    this.sides = sides;
  }

  _createClass(Dice, {
    roll: {
      value: function roll() {}
    }
  });

  return Dice;
})();

function shuffle(array) {
  var m = array.length,
      t,
      i;

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

var Deck = (function () {
  function Deck(cards) {
    _classCallCheck(this, Deck);

    this.cards = cards;
  }

  _createClass(Deck, {
    shuffle: {
      value: (function (_shuffle) {
        var _shuffleWrapper = function shuffle() {
          return _shuffle.apply(this, arguments);
        };

        _shuffleWrapper.toString = function () {
          return _shuffle.toString();
        };

        return _shuffleWrapper;
      })(function () {
        console.log("…shuffling…");
        shuffle(this.cards);
      })
    },
    draw: {
      value: function draw() {
        return this.cards.pop();
      }
    }
  });

  return Deck;
})();

var CardDeck = (function (_Deck) {
  function CardDeck() {
    var _this = this;

    _classCallCheck(this, CardDeck);

    this.suits = [{ suit: "spades", symbol: "black", symbol: "♠" }, { suit: "hearts", symbol: "red", symbol: "♥" }, { suit: "diamonds", symbol: "red", symbol: "♦" }, { suit: "clubs", symbol: "black", symbol: "♣" }];

    this.ranks = [{ rank: "2", name: "2" }, { rank: "3", name: "3" }, { rank: "4", name: "4" }, { rank: "5", name: "5" }, { rank: "6", name: "6" }, { rank: "7", name: "7" }, { rank: "8", name: "8" }, { rank: "9", name: "9" }, { rank: "10", name: "10" }, { rank: "J", name: "Jack" }, { rank: "K", name: "King" }, { rank: "Q", name: "Queen" }, { rank: "A", name: "Ace" }];

    this.cards = [];

    this.suits.forEach(function (suit) {
      _this.ranks.forEach(function (rank) {
        var card = Object.assign({}, rank, suit);
        _this.cards.push(card);
      });
    });

    this.cards.push({ rank: "0", name: "Joker", suit: null, symbol: "Joker" });

    this.shuffle();
  }

  _inherits(CardDeck, _Deck);

  _createClass(CardDeck, {
    draw: {
      value: function draw() {
        var drawn = this.cards.pop();
        if (drawn.name == "Joker") {
          this.shuffle();
          this.draw();
        } else {
          return drawn;
        }
      }
    }
  });

  return CardDeck;
})(Deck);

