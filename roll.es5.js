"use strict";
var init = function () {
  var d = [1, 2, 3, 4, 5, 6],
      rolls = [];

  d.forEach(function (i) {
    d.forEach(function (j) {
      rolls.push(i + j);
    });
  });

  rolls.push(0);

  gradient(document.body);

  var shuffle = function (array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  window.rolls = shuffle(rolls);
};

var render = function (n) {
  document.body.innerHTML = " " + n + "<sub>" + counter + "</sub>  ";
};

document.body.addEventListener("click", function (ev) {
  counter = counter + 1;
  var r = rolls.pop();
  if (r === 0) {
    init();
  } else {
    render(r);
  };
});

init();

