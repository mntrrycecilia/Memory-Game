const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "black"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let cardsDown = [];
let newClick = true;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if (!newClick) return;

  const cardColor = event.target;
  cardColor.style.backgroundColor = cardColor.classList[0];
  
  if (cardsDown.length === 0) {
    cardsDown.push(cardColor)
  }
  else if(cardsDown.length === 1 && cardsDown[0] !== cardColor) (
    cardsDown.push(cardColor)
  )

  if(cardsDown.length === 2) {
    newClick = false; 

    const card1 = cardsDown [0];
    const card2 = cardsDown [1];

    if(card1.classList[0] === card2.classList[0]) {
      card1.classList.add('MATCHED');
      card2.classList.add('MATCHED');
      cardsDown = [];
      newClick = true;
      

    } else {
      setTimeout(function() {
        card1.style.backgroundColor = '';
        card2.style.backgroundColor = '';
        cardsDown = [];
        newClick = true;
      },1000);
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
