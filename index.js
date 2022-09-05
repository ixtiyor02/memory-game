const cardList = [
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

//sorting cards in random position
cardList.sort(() => 0.5 - Math.random());

let cardChosen = [];
let cardChosenIds = [];
let cardWon = [];

const gridDisplay = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");

//creating 12 cards, setting them id and img
function createBoard() {
  for (let i = 0; i < cardList.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

//checking for a match
function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = [cardChosenIds[0]];
  const optionTwoId = [cardChosenIds[1]];
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("u have clicked the same card");
  }
  if (cardChosen[0] == cardChosen[1]) {
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("sorry, try again");
  }
  scoreDisplay.innerHTML = cardWon.length;
  cardChosen = [];
  cardChosenIds = [];
  if (cardWon.length == cardList.length / 2) {
    scoreDisplay.innerHTML = "Congratulations! you found them all";
  }
}

//get two cards, push them to empty arrays
function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardList[cardId].name);
  cardChosenIds.push(cardId);
  this.setAttribute("src", cardList[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
