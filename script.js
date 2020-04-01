let n = 16;
const cont = document.getElementById("container");
let a = "black";

// code for blue color
let blue = document.querySelector('#blue');
blue.addEventListener('click', function (e){
  a = "blue";
})

// code for red color
let red = document.querySelector('#red');
red.addEventListener('click', function(e){
  a = "red";
})

// code for green color
let green = document.querySelector('#green');
green.addEventListener('click', function(e){
  a = "green";
})

// code for black color
let black = document.querySelector('#black');
black.addEventListener('click', function(e){
  a = "black";
})

// code for yellow color
let yellow = document.querySelector('#yellow');
yellow.addEventListener('click', function(e){
  a = "yellow";
})

// code for random color
let rnd = document.querySelector('#random');
rnd.addEventListener('click', function(e){
  a = "#" + Math.floor(Math.random()*16777215).toString(16);
})

// code for erase button
let erase = document.querySelector('#erase');
erase.addEventListener('click', function(e){
  a = "#53A0AC";
  document.body.style.cursor = "url('eraser.png', auto);
})

// Function used to create the grid
function grid(n) {
  cont.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  cont.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  
  // Array created to make grids
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let div = document.createElement('div');
      div.className = 'box';
      div.style.backgroundColor = "#53A0AC;
      cont.appendChild(div);
    }
   }

  // Change the color of boxes when hovered over
  let boxes = document.querySelectorAll("div.box");
  boxes.forEach(square =>{
  square.addEventListener('mouseover', function(e){
  e.target.style.backgroundColor = a;
  })
  });
  }
  
  // Clear the grid
  function clear() {
    let last = cont.lastElementChild;
    while (last) {
      cont.removeChild(last);
      last = cont.lastElementChild;
    }
  }
  
  // Code for reset button
  let reset = document.querySelector('#reset');
  reset.addEventListener('click', function(e){
    n = prompt('Enter grid size:');
    clear();
    grid(n);
  })
  
  // Code for clear button
  let clear = document.querySelector('#clear');
  clear.addEventListener('click', function(e){
    clear();
    grid(n);
  })
  
  grid(n);
  
}
