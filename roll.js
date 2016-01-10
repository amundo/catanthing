
class Gradient { 
  constructor(el, colors){
    this.el = el;
    this.colors = colors || [
      "#9933CC", "#9441D1", "#904FD5", "#8B5DDA", "#866BDF",
      "#8279E3", "#7D86E8", "#7994EC", "#74A2F1", "#6FB0F6",
      "#6BBEFA", "#66CCFF", "#6BBEFA", "#6FB0F6", "#74A2F1",
      "#7994EC", "#7D86E8", "#8279E3", "#866BDF", "#8B5DDA",
      "#904FD5", "#9441D1", "#9933CC"
    ];
  }

  cycle(){
    this.colors = this.colors.slice(1).concat(this.colors[0])
  }

  render(){
    this.cycle();
    this.el.style.backgroundImage = `radial-gradient(${this.colors.join(',')})`;
  }
}


class Game { 
  constructor(){
    this.counter = 0;
    this.rolls = [0];
    [1,2,3,4,5,6].forEach(i => { 
      [1,2,3,4,5,6].forEach(j => { 
         this.rolls.push(i+j)
      }),
    })
  }

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex ;
  
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
  }
  
  var init = () => {
    
    var gradient = new Gradient(document.body);
    gradient.render();
  
  
    window.rolls = shuffle(rolls);
  }

  var render = n => {
    document.body.innerHTML = ` ${n}<sub>${counter}</sub>  `;
    gradient.render();
  }
  
  document.body.addEventListener('click', ev => {
    counter = counter + 1;
    var r = rolls.pop();
    if(r === 0){ 
       init() 
    } else { 
      render(r);
    };
  })
}

var game = new Game();
game.init();


