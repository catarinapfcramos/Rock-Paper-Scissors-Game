//dictionary object
 const handOptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
 }
let score = 0

const pickUserHand = (hand) => {
    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    //show the next page with hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //set the user pick
    document.getElementById("userPickImage").src = handOptions[hand];
    //select computer hand
    let cpHand = pickComputerHand();

    //find the winner
    referee(hand, cpHand);
}

const pickComputerHand = () => {
    let computerOptions = ["rock", "paper", "scissors"];
    let cpHand = computerOptions[Math.floor(Math.random() * 3)];
    document.getElementById("computerPickImage").src = handOptions[cpHand];
    return cpHand;
}

const referee = (userHand, cpHand) => {
    if(userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
    } if(userHand == "paper" && cpHand == "rock"){
        setDecision("YOU WIN!");
        setScore(score + 1);
    } if(userHand == "paper" && cpHand == "paper"){
        setDecision("It's a Tie!");
    } if(userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    } if(userHand == "rock" && cpHand == "scissors"){
        setDecision("YOU WIN!");
        setScore(score + 1);
    } if(userHand == "rock" && cpHand == "rock"){
        setDecision("It's a Tie!");
    } if(userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    } if(userHand == "scissors" && cpHand == "paper"){
        setDecision("YOU WIN!");
        setScore(score + 1);
    } if(userHand == "scissors" && cpHand == "scissors"){
        setDecision("It's a Tie!");
    }}
 
const setDecision = (decision) => {
   document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
    score= newScore;
    document.querySelector(".score h1").innerText = newScore;
}

const startNewGame = () => {
   let contest = document.querySelector(".contest");
   contest.style.display = "none";
   let hands = document.querySelector(".hands");
   hands.style.display = "flex";
}
